/* define root reducer */
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import salesReducer from './salesReducer';

/* export root reducer to store that hold all state of an application */
const rootReducer = combineReducers({
  /* all reducers of an applocation */
  auth: authReducer,
  sales: salesReducer,
});

export default rootReducer;
