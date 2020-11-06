import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, handleDelete, handleDone }) => {
  return (
    <>
      <ul
        className="list-group list-group-flush"
      >
        {
          todos.map((todo, i) => (
            <TodoListItem
              key={ todo.id }
              todo={todo}
              i={i}
              handleDelete={ handleDelete }
              handleDone={ handleDone }
            />
          ))
        }
      </ul>
    </>
  )
}

export default TodoList;
