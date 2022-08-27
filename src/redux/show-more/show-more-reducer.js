const showMoreReducer = (state = 5, action) => {
  switch (action.type) {
    case 'ADD-FIVE':
      return state + 5;
    case 'RESET-BTN-MORE':
      return 5;
    default:
      return state;
  }
};

export default showMoreReducer;
