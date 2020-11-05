const todoReducer = (state = [], action) => {
  // La estructura de control más utilizada en los reducers es el switch
  switch ( action.type ) {
    case 'add':
      return [...state, action.payload];  
    default:
      return state;
  }
};

export default todoReducer;