import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
  // su estas es true porque sí se renderea la primera vez 
  // mantener la referencia cuando el componente siga montado, mantener la referencia al valor

  const isMounted = useRef(true);

  const [state, setState] = useState({
    data:null,
    loading:true,
    error:null
  });

  useEffect(() => {
    // No quiero que haga nada

    // Sólo que actúe cuando el compoenente se desmonte , that is the return 
    return () => {
      // Entonces si se desmonta el componente cambia a false,
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    
    setState({
      data:null,
      loading:true,
      error:null
    });
    
    // qué pasa si la petición tarda mucho o si se cierra el componente? , ya no se ejecuta el setState, nos disparará un error
    // para emular el error usamos un settimeout(), si mostramos el  'quote' usando el botón, comienza el loading,
    // ocultamos antes de que termine el settimeout entonces no pemitimos quee se termine de renderear o montar el compoenente, se queda a medias
    // error: Can't perform a React state update on an unmounted component.
    // useRef nos resuelve este problema

    fetch(url)
      .then( resp => resp.json() )
      .then( data => {

        setTimeout(() => {
          // Sólo funcionará si isMounted es true
          if (isMounted.current){
            setState({
              data: data,
              loading: false,
              error: null
            })
          } else {
            console.log('setState no se llamó');
          }
          
        }, 100);
       
      });
    
  }, [url]);

  return state;
};

export default useFetch
