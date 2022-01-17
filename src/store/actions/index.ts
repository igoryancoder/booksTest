import {
  GET_BOOKS_LIST,
  SET_BOOKS_LIST,
  GET_BOOK_BY_ID,
  SET_BOOK_DATA,
  SET_PAGINATION_PAGES,
  SET_FILTERED_BOOKS_LIST,
  SET_BOOKS_SEARCH_TEXT,
  SET_LOADING,
} from '../types';
import {bookListT, bookT} from '../../types';

export const booksListGet = () => ({
  type: GET_BOOKS_LIST,
});

export const booksListSet = (payload: bookListT[]) => ({
  type: SET_BOOKS_LIST,
  payload,
});

export const filteredBooksListSet = (payload: bookListT[]) => ({
  type: SET_FILTERED_BOOKS_LIST,
  payload,
});

export const bookByIdGet = (payload: number) => ({
  type: GET_BOOK_BY_ID,
  payload,
});

export const bookDataSet = (payload: bookT) => ({
  type: SET_BOOK_DATA,
  payload,
});

export const pagesCounterSet = () => ({
  type: SET_PAGINATION_PAGES,
});

export const booksSearchTextSet = (payload: string) => ({
  type: SET_BOOKS_SEARCH_TEXT,
  payload,
});

export const loadingSet = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});
