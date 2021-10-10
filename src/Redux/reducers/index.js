import { combineReducers } from 'redux';

import authReducer from './auth';
import lawyersReducer from './lawyers';
import appointmentReducer from './appointment';

const rootReducer = combineReducers({
  user: authReducer,
  lawyers: lawyersReducer,
  appointments: appointmentReducer,
});

export default rootReducer;
