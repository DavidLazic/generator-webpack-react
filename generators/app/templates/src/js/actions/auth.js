import * as types from 'actions/types';

export function setUser ({ user }) {
    return { type: types.USER, data: user };
}
