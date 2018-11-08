import * as types from 'actions/types';

export function authGet (props) {
  return { type: types.TEST_GET, payload: props };
}
