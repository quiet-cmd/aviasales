const initState = {
  all: true,
  without: true,
  once: true,
  twice: true,
  thrice: true,
};

const transfersReducer = (state = initState, action) => {
  const sumTrue = Object.values(state || []).reduce((a, b) => a + b, 0);

  switch (action.type) {
    case 'FILTER':
      if (sumTrue === 5) return { ...state, ...action.item, all: false };
      if (sumTrue + action.flag === 4) return initState;
      return { ...state, ...action.item };
    case 'ALL-FALSE-FILTER':
      return {
        all: false,
        without: false,
        once: false,
        twice: false,
        thrice: false,
      };
    case 'ALL-TRUE-FILTER':
      return initState;
    default:
      return state;
  }
};

export default transfersReducer;
