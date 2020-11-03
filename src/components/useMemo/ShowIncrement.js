import React from 'react';

const ShowIncrement = ({increment}) => {

  console.log('me volvi a generar :C');
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment();
      }}
    >
      Incrementar
    </button>
  )
}

export default ShowIncrement;
