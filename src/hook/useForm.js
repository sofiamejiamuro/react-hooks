import { useState } from "react";

// useForm recibe un objeto de parámetro
const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);
  
  const reset = () => {
    setValues(initialState)
  }
  const handleInputChange = ({ target }) => {
    // el target es el input
    // console.log(target);
    setValues({
      ...values,
      [ target.name ]: target.value
    });
    // console.log(values);
  }

  // Retorna un arreglo con los valores y la función
  return [ values, handleInputChange, reset];
}

export default useForm;