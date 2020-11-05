# useReducer

Temas puntuales de la sección
  
  - useReducer

  - Reducers

  - Teoría de un reducer

  - Aplicación de TODOs

  - CRUD local


  Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a **Redux** o bien usar el **contextAPI** fácilmente.

## ¿Qué es un reducer?

1. Una función que no puede ser asíncrona.
2. Debe ser una función pura: 
  - No debe tener efectos secundarios
  - No debe tener tareas asíncronas
  - Debe retornar siempre un nuevo estado
  - No debe dee llamar el localStorage o sessionStorage, porque aunque no son síncronas pueden fallar
  - No debe de requerir más de un acción
3. **Debe retornar SIEMPRE un NUEVO ESTADO , es decir, no mutar el estado anterior.**
4. **Usualmente recibe dos argumentos: el valor inicial (initialState) y la acción a ejecutar**

![reducer arguments](./assets/reducer-arguments.png)

### Tener en un solo lugar todas las posibles modificaciones de estado que tiene un aplicación, centralizar todos los estados, el reducer tiene todo el mapa de las acciones que se pueden agregar.

Ciclo de vida de un reducer

![reducer life-cycle](./assets/reducer-lifecycle.png)


```js
const initialState = [{
  id: 1,
  todo: "Comprar pan"
  done: false
}];

const todoReducer = ( state = initialState, action ) => {

  if( action?.type == "agregar" ){
    return [...state, action.payload]
  }

  return state;
};

// Inicialización el Reducer 
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar leche"
  done: false
};

const agregarTodoAction = {
  type="agregar",
  payload: newTodo
};

todos = todoReducer( todos, agregarTodoAction )
```

El useReducer como una alternativa al useState, es mejor el useReducer cuando hay muchos cambios de estado en la aplicación