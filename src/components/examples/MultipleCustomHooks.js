import React from 'react'
import './styles.css';

// Hooks 
import useFetch from '../../hook/useFetch';
import useCounter  from '../../hook/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  console.log(loading);
  console.log(data);
  // Una condición para extraer la data porque de inicio viene null y no la va a poder extraer
  // !null - true
  // !!null - false , si null es falso, es decir, si null tiene un valor
  const { author, quote } = !!data && data[0];

  console.log(author, quote);
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        loading
        ?
          (
            <div className="alert alert-info text-center" >
              Loading ...
            </div>
          )
        :
          (
            <>
              <blockquote className="blockquote text-right">
                <p className="mb-0">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>
              <button
                className="btn btn-primary"
                onClick={ increment }
              >
              Siguiente frase
              </button>
            </>
          )
      }
      
    </div>
  )
}

export default MultipleCustomHooks;
 