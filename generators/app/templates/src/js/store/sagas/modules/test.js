import { all, put, call, fork, takeLatest } from 'redux-saga/effects';
import * as types from 'actions/types';
import Api from 'lib/api';
import * as refs from 'constants/refs';

function* testGet ({ payload }) {

  yield put({
    type: types.TEST,
    payload: { loading: true }
  });

  try {
    const { dealers } = yield call(Api.get, `${refs.TEST}/test/${payload.prop}`);

    yield put({
      type: types.TEST,
      payload: { data: dealers, loading: false }
    });

  } catch (error) {

    console.log(`[ ERR - testGet() ]: ${error}`);

    yield put({
      type: types.TEST,
      payload: { error, loading: false }
    });
  }
}

/**
* @description
* Root test saga
*
* @return {Function}
* @public
*/
export default function* testSaga () {
  yield all([
    fork(function* () { yield takeLatest(types.TEST_GET, testGet); })
  ]);
}
