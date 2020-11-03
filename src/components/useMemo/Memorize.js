import React from 'react'
import '../useEffect/effects.css';
import useCounter from '../../hook/useCounter';
import Small from './Small';
import { useState } from "react";


// Cómo prevenir que un componente se vuelva a renderizar si sus propiedades no han cambiado, 
// si el cambio se da en otro componente

 const Memorize = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Counter: <Small value={ counter } /></h1>
      <hr/>
      <button
        className='btn btn-primary'
        onClick={ increment }
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() =>{
          setShow(!show)
        }}
      >
        show/hide { JSON.stringify( show )}
      </button>
    </div>
  )
}

export default Memorize;