import {takeLatest, put} from 'redux-saga/effects';
import {filterFetch} from '../../utils/apiFetch';

import {
  GET_LIST_PLACEHOLDER_ERROR,
  GET_LIST_PLACEHOLDER_PROCESS,
  GET_LIST_PLACEHOLDER_SUCCESS,
} from '../../actions';

function* getListPlaceholderSaga(action) {
  try {
    const result = yield filterFetch({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'get',
    });
    yield put({
      type: GET_LIST_PLACEHOLDER_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: GET_LIST_PLACEHOLDER_ERROR,
      error: error,
    });
  }
}

export function* watchGetListPlaceholderSaga() {
  yield takeLatest(GET_LIST_PLACEHOLDER_PROCESS, getListPlaceholderSaga);
}
