import React from 'react'
import '../useEffect/effects.css';
import useCounter from '../../hook/useCounter';
import { useState, useMemo } from "react";
import procesoPesado from '../../helpers/procesoPesado';

const MemoHook = () => {

  const { counter, increment } = useCounter(5);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <hr/>

      <p> { memoProcesoPesado }</p>
     
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
};

export default MemoHook;