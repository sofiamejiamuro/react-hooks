import React from 'react';

// El componente recibe de su padre una función a traves de los props
// El react memo no sirve aquí porque la función está definida en el componente padre y por lo tanto se vuelve a disparar
const ShowIncrement = React.memo(({ increment }) => {

  console.log('me volvi a generar :C');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment( 5 );
      }}
    >
      Incrementar
    </button>
  )
})

export default ShowIncrement;
