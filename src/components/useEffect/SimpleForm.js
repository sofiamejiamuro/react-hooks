 import React, { useEffect } from 'react';
 import './effects.css';

  const SimpleForm = () => {

  // Ejecutar un efecto secundaario cuando lago suceda en un componente
  useEffect(() => {
    console.log('hey');
  });

  return (
     <>
       <h1>Use Effect</h1>
       <hr />
     </>
    )
  }
 
 export default SimpleForm;
 