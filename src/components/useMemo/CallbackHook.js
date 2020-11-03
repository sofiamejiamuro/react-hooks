import React from 'react';
import '../useEffect/effects.css';
import { useState } from "react";
import ShowIncrement from './ShowIncrement';

// useCallback tiene dos casos de uso:
// 1. Cuando queremos mandar una funcion a un componente hijo 

const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = () =>{
    setCounter( counter + 1);
  }

  return (
    <div>
      <h1>useCallback Hook: { counter } </h1>
      <hr />
      <ShowIncrement increment={ increment }/>
    </div>
  )
}

export default CallbackHook;
