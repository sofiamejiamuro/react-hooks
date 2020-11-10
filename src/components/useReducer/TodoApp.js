import React, { useReducer, useEffect, useCallback } from 'react';
import todoReducer from './todoReducer';

import TodoList from './TodoList';
import TodoAdd from './TodoAdd'


import './styles.css';


const init = () =>{
  /* return [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
  }] */
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {

  // todos es un arreglo del return de useReducer
  // dispatch es una función
  // init inicializa el estado inicial, funcion external al componente
  // const [ todos, dispatch ] = useReducer(todoReducer,initialState);

  //useReducer !== funcion reducer
  const [ todos, dispatch ] = useReducer(todoReducer, [] , init);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = ( todoId ) => {
    
    // console.log(todoId);

    const deleteTodo = {
      type: 'delete',
      payload: todoId
    }

    dispatch( deleteTodo );
  };
  

  const handleDone = ( todoId) => {
    dispatch({
      type: 'done',
      payload: todoId
    })
  };

  const handleAddTodo = ( newTodo ) => {

    // Accion que se debe mandar al reducer
    const addTodo = {
      type: 'add',
      payload: newTodo
    }

    // Se manda la accion al reducer mediante el dispatch
    dispatch( addTodo );
    
  };


  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={ todos }
            handleDelete={ handleDelete }
            handleDone={ handleDone }
          />
        </div>
        <div className="col-5">
        <TodoAdd 
          handleAddTodo={ handleAddTodo }
        />
        </div>
      </div>
      
    </div>
  )
}

export default TodoApp;
