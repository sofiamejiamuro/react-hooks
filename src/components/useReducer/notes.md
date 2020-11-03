# useReducer

Temas puntuales de la sección
  
  - useReducer

  - Reducers

  - Teoría de un reducer

  - Aplicación de TODOs

  - CRUD local


  Esta es una sección dedicada a comprender el concepto de un Reducer, el cual es sumamente importante para poder entrar a **Redux** o bien usar el **contextAPI** fácilmente.

## ¿Qué es un reducer?

1. Una función que no puede ser asíncrona.
2. Debe ser una función pura.
3. Debe retornar siempre un nuevo estado, es decir, no mutar el estado anterior.
4. Usualmente recibe dos argumentos: el valor inicial (initialState) y la acción a ejecutar
