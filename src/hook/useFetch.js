import { useState, useEffect } from 'react';

const useFetch = (url) => {
  
  const [state, setstate] = useState({
    data:null,
    loading:true,
    error:null
  });

  useEffect(() => {
    
    fetch(url)
      .then( resp => resp.json() )
      .then( data => {
        setstate({
          data: data,
          loading: false,
          error: null
        })
      });
    
  }, [url]);

  return state;
};

export default useFetch
