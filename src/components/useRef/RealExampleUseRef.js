import React,{ useState } from 'react';
import '../useEffect/effects.css';

import MultipleCustomHooks from '../examples/MultipleCustomHooks';

const RealExampleUseRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real example</h1>
      <hr />
      { show && <MultipleCustomHooks /> }
      <button
        className="btn btn-warning mt-5"
        onClick={ () => {
          setShow( !show );
        }}
      >
        Show/Hide
      </button>
    </div>
  )
}

export default RealExampleUseRef
