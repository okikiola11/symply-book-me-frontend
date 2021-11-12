const initialState = {
  lawyers: [],
  isLoading: false,
};

const lawyersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LAWYERS':
      return {
        ...state,
        isLoading: false,
        lawyers: action.payload,
      };
    default:
      return state;
  }
};

export default lawyersReducer;
