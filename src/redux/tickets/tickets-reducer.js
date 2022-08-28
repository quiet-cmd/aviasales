const ticketReducer = (state, action) => {
  const initState = {
    tickets: [],
    loader: true,
  };
  if (state === undefined) state = initState;
  switch (action.type) {
    case 'ADD-TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.value] };
    case 'SET-LOADED':
      return { ...state, loader: false };
    default:
      return state;
  }
};

export default ticketReducer;
