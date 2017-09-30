import { combineReducers } from 'redux';
import * as authReducer from 'reducers/modules/OAuth';

export default combineReducers(Object.assign(
    authReducer
));
