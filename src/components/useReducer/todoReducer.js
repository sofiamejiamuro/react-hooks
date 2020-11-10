const todoReducer = (state = [], action) => {

  // La estructura de control más utilizada en los reducers es el switch
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];  
    case 'delete':
      return state.filter( todo => todo.id !== action.payload );    
    case 'done':
      return state.map( todo => 
        (todo.id === action.payload)
          ? { ...todo, done: !todo.done }
          : todo  
      )
    case 'done-deprecated':
      return state.map( todo => {
        if( todo.id === action.payload){
          return {
            ...todo,
            done: !todo.done
          } 
        }else {
          return todo;
        }
      })
    default:
      return state;
  }
};

export default todoReducer;