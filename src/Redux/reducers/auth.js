// INITIAL STATE
// const initialState = {
//   profile: {
//     name: '',
//     email: '',
//     password: '',
//   },
// };

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return [state, action.payload];
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default authReducer;
