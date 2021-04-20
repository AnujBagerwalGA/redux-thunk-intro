import { combineReducers } from 'redux';
import ListReducer from './List/ListReducer';

const rootReducer = combineReducers({
  ListReducer,
});

export default rootReducer;
