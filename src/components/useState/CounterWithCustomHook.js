import React from 'react';
import useCounter from '../../hook/useCounter';

import './counter.css';

const CounterWithCustomHook = () => {

  const { state:counter, increment, decrement, reset } = useCounter(20);

  return (
    <>
      <h1>Counter with custom hook : { counter }</h1>
      <hr />
      <button 
        onClick={ increment }
        className='btn btn-warning'
      >+ 1</button>
      <button 
        onClick={ decrement }
        className='btn btn-warning'
      >- 1</button>
      <button 
        onClick= { reset }
        className='btn btn-danger'
      >RESET</button>
    </>
  )
}

export default CounterWithCustomHook
