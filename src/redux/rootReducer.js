// rootReducer.js

import {combineReducers} from 'redux';
import authReducer from './slices/authSlice';
// Import other slice reducers as needed

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other slice reducers here
});

export default rootReducer;
