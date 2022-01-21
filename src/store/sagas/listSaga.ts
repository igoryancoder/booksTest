import {call, put, takeEvery, select} from 'redux-saga/effects';

import {GET_BOOKS_LIST, GET_BOOK_BY_ID} from '../types';
import {
  booksListSet,
  bookDataSet,
  pagesCounterSet,
  loadingSet,
} from '../actions';
import {Requests} from '../../utils/api';
import {navigate} from '../../helpers/navigation-ref';
import {bookReducerT, ResponseGenerator, reducerT, actionT} from '../../types';

function* getListSaga() {
  try {
    yield put(loadingSet(true));
    const selector = (store: reducerT) => store.books;
    const store: bookReducerT = yield select(selector);
    const {page, itemsPerPage, filters} = store;
    const values = {
      page,
      itemsPerPage,
      filters,
    };

    const response: ResponseGenerator = yield call(Requests.ITEMS_LIST_POST, {
      values,
    });

    yield put(booksListSet(response.books));
    yield put(pagesCounterSet());
  } catch (e) {
    console.error('Err', e);
  } finally {
    yield put(loadingSet(false));
  }
}

function* getBookSaga({payload}: actionT) {
  try {
    yield put(loadingSet(true));

    const response: ResponseGenerator = yield call(Requests.ITEMS_BY_ID_GET, {
      id: payload,
    });

    yield put(bookDataSet(response?.book));
    navigate('ItemScreen');
  } catch (e) {
    console.error('Err', e);
  } finally {
    yield put(loadingSet(false));
  }
}

export default function* list() {
  yield takeEvery(GET_BOOKS_LIST, getListSaga);
  yield takeEvery(GET_BOOK_BY_ID, getBookSaga);
}
