import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

  // Un hook no puede estar dentro de una condición, if statemement
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const { name, email } = form;
  // Ejecutar un efecto secundario cuando algo suceda en un componente
  // Mandar como segundo argumento [] hace que se ejecute una sola vez
  useEffect(() => {
    console.log('hey');
    // el return en el useEffect hace una limpieza cuando el componenete se deemopnta (unmount)
  },[]);

  // Aqui sólo se disparará lo establecido dentro de la funcion use efect cuando lo que se establezca como segundo argumento sucedaa
  useEffect(() => {
    console.log('hey, form cambió');
  },[form]);
  
  useEffect(() => {
    console.log('hey, form cambió');
  },[email]);

  // The target event property returns the element that triggered the event, gets the element on which the event originally occurred
  const handleInputChange = ({ target }) => {
    // console.log(target);
    // console.log('[target.name]',target.name);
    // console.log(target.value);

    setForm({
      ...form,
      [ target.name ]: target.value
    });
  };

  return (
      <>
        <h1>Use Effect</h1>
        <hr />
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="form-control"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Tu correo"
            className="form-control"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
          />
        </div>
        { (name === '123') && <Message />}
      </>
    )
}
 
export default SimpleForm;