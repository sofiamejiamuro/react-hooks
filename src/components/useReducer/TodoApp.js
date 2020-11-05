import React, { useReducer } from 'react';
import todoReducer from './todoReducer';
import useForm from '../../hook/useForm';

import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender React',
  done: false
}]

const TodoApp = () => {

  // todos es un arreglo del return de useReducer
  // dispatch es una función
  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  // formValues es un objeto
  /* const [ formValues, handleInputChange ] = useForm({
    description:'hola'
  }) */

  // al desestructurar ele objeto fromValues y obtener solo el value
  const [ { description }, handleInputChange, reset ] = useForm({
    description:''
  })

  // 1. se ejecuta el useForm, mando el objeto que es el initialState {description:'new todo'}
  // 2. se crea el useState
  // 3. se crea la función handleInputChange
  // 4. se retornan los valores y la función 

  console.log(description)
  
  const handleSubmit = (e) =>{

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

    // Accion que se debe mandar al reducer
    const addTodo = {
      type: 'add',
      payload: newTodo
    }

    // Se manda la accion al reducer mediante el dispatch
    dispatch( addTodo );
    reset();
 
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {
              todos.map((todo, i) => (
                <li
                  key={ todo.id }
                  className="list-group-item"  
                >
                  <p className="text-center">{ i + 1}. { todo.desc }</p>
                  <button className="btn btn-danger">
                    Borrar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-5">
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
      </div>
      
    </div>
  )
}

export default TodoApp
