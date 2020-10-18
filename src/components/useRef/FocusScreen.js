import React,{ useRef } from 'react';
import '../useEffect/effects.css';

const FocusScreen = () => {

  // useRef sirve para mantener una referencia mutable 
  // cualquier element html o seguimiento a valores
  const ref = useRef();
  console.log(ref); // { current:undefined }


  const handleClick = () => {
    // document.querySelector('input').focus();
    // document.querySelector('input').select();
    ref.current.select()
    console.log(ref); // { current: input.form-control }
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
      ref= { ref }
        className="form-control"
        placeholder="Nombre"
      />
      <button
        className="btn btn-primary mt-5"
        onClick={ handleClick }
      >
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
