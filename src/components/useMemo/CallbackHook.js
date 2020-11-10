import React from 'react';
import '../useEffect/effects.css';
import { useState, useCallback, useEffect } from "react";
import ShowIncrement from './ShowIncrement';

// useCallback tiene dos casos de uso:
// 1. Cuando queremos mandar una funcion a un componente hijo 

// 2. Cuando hay un useEffect qu tiene una dependencia y esa dependencia es una función

const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // Normalmente sería así, cada que s ejecuta el componentee see vuelve a ejecutar, es deicr,
  // Si hay un cambio de estado se re-renderiza el componente por lo tanto la función
  /*  const increment = () =>{
    setCounter( counter + 1);
  }  */

  // Pero en este ejercicio vamos a mandar la función al componente hijo
  // useCallback(1 argumento una función, la dependencia)
  const increment = useCallback( (num) =>{
    // setCounter( counter + 1);
    setCounter(c => c + num)
  }, [setCounter ])

  useEffect(() => {
    
    
  }, [increment])

  return (
    <div>
      <h1>useCallback Hook: { counter } </h1>
      <hr />
      <ShowIncrement increment={ increment }/>
    </div>
  )
}

export default CallbackHook;
