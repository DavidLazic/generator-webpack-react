import { all } from 'redux-saga/effects';
import testSaga from './modules/test';

export default function* sagas () {
  yield all([
    testSaga()
  ]);
}
