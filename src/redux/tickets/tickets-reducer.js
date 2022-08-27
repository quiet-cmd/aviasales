const ticketReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW':
      return action.value;
    default:
      return state;
  }
};

export default ticketReducer;
