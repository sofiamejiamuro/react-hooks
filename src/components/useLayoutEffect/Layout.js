//  La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM. 
// Use esto para leer el diseño del DOM y volver a renderizar de forma sincrónica.


// Ejecutar código despues de que se renderiza el html

// ver en pantalla el tamñano de una caja
import React from 'react'
import './layout.css' ;

// Hooks 
import useFetch from '../../hook/useFetch';
import useCounter  from '../../hook/useCounter';
import { useLayoutEffect, useRef, useState } from 'react';

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  // console.log(data);
  // Una condición para extraer la data porque de inicio viene null y no la va a poder extraer
  // !null - true
  // !!null - false , si null es falso, es decir, si null tiene un valor
  const { author, quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])


  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p 
          className="mb-0"
          ref={ pTag }
        >{ quote }</p>
        
      </blockquote>

      <pre>
        { JSON.stringify( boxSize ,null, 3)}
      </pre>
      <button
        className="btn btn-primary"
        onClick={ increment }
      >
      Siguiente frase
      </button>
    </div>
  )
}

export default Layout;
 