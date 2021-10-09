import { combineReducers } from 'redux';

import authReducer from './auth';
import lawyersReducer from './lawyers';

const rootReducer = combineReducers({
  user: authReducer,
  lawyers: lawyersReducer,
});

export default rootReducer;
