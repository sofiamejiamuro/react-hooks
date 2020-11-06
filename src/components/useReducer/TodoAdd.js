import React from 'react';
import useForm from '../../hook/useForm';

const TodoAdd = ({ handleAddTodo }) => {
  // formValues es un objeto
  /* const [ formValues, handleInputChange ] = useForm({
    description:'hola'
  }) */

  // al desestructurar el objeto fromValues y obtener solo el value
  const [ { description }, handleInputChange, reset ] = useForm({
    description:''
  })

  // 1. se ejecuta el useForm, mando el objeto que es el initialState {description:'new todo'}
  // 2. se crea el useState
  // 3. se crea la función handleInputChange
  // 4. se retornan los valores y la función 

  // console.log(description)
  const handleSubmit = (e) => {

    // preventDefault evita el refresh
    e.preventDefault();

    if (description.trim().length <= 1){
      return;
    }

    // el contenido del input debe pasar por el reducer para que se pueda agregar a la lista
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    // Se manda la accion al reducer mediante el dispatch
    handleAddTodo( newTodo );
    reset();

  }
  return (
    <div>
      <h4>Agregar TODO</h4>
        <hr />
        <form
          onSubmit={ handleSubmit }
        >
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Hacer..."
            autocompltee="off"
            value={ description }
            onChange={ handleInputChange }
          />
          <button
            type="submit"
            className="btn btn-warning btn-block mt-1"
          >
            Agregar
          </button>
        </form> 
    </div>
  )
}

export default TodoAdd;
