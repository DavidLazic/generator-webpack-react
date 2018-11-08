import { createReducer, createHandlers } from '../..';
import * as types from 'actions/types';

const initState = {
  [types.TEST]: {
    prop: null
  },
  [types.TEST2]: {
    prop: null
  }
};

export const testReducer = createReducer(initState, createHandlers(Object.keys(initState)));
