import React,{ useEffect, useState } from 'react'

const Message = () => {

  const [coords, setCoords] = useState({x:0, y:0});
  const {x, y} = coords

  useEffect(() => {
    console.log(('message mounted'));
    const mouseMove = (e) => {
      console.log('mousemove');
      const coords = {
        x : e.x,
        y : e.y
      }
      setCoords( coords )
      // console.log(coords);
    };

    window.addEventListener('mousemove',mouseMove);
    /* window.addEventListener('mousemove', (e) => {
      /* console.log('mousemove');
      const coords = {
        x : e.x,
        y : e.y
      }
      console.log(coords); 
    })*/
    return () => {
        // el return en el useEffect hace una limpieza cuando el componenete se desmonta (unmount)
        window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div>
      <h3>Eres GEnial</h3>
      <p> x:{ x } y:{ y }</p>
    </div>
  )
}

export default Message;
 