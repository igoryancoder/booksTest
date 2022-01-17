import {all, takeEvery} from 'redux-saga/effects';

import list from './listSaga';

export default function* rootSaga() {
  yield all([list()]);
}
