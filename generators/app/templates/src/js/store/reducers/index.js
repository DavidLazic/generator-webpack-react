import { combineReducers } from 'redux';
import * as testReducer from './modules/test';

export default combineReducers(Object.assign(
  testReducer
));
