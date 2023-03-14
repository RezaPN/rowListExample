import {all, fork} from 'redux-saga/effects';
import {watchGetListPlaceholderSaga} from './placeholder';

export default function* sagas() {
  yield all([fork(watchGetListPlaceholderSaga)]);
}
