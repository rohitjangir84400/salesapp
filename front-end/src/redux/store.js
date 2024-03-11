import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from '../redux/reducers/combinereducer';
/* pass root reducer to store */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;