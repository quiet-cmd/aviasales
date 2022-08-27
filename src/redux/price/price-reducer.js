const priceReducer = (state = 'CHEAP', action) => {
  switch (action.type) {
    case 'CHEAP':
      return 'CHEAP';
    case 'FAST':
      return 'FAST';
    case 'OPTIMAL':
      return 'OPTIMAL';
    default:
      return state;
  }
};

export default priceReducer;
