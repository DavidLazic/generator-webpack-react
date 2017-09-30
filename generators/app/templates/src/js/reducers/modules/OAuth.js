import { createReducer } from 'lib';
import * as types from 'actions/types';

export const authReducer = createReducer({
    [types.USER]: null,
    [types.API_TOKEN]: null
}, {
    [types.USER] (state, action) {
        return Object.assign({}, state, { [types.USER]: action.data });
    },
    [types.API_TOKEN] (state, action) {
        return Object.assign({}, state, { [types.API_TOKEN]: action.data });
    }
});
