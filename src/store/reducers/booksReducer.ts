import {actionT} from '../../types';
import {
  SET_BOOKS_LIST,
  SET_BOOK_DATA,
  SET_PAGINATION_PAGES,
  SET_FILTERED_BOOKS_LIST,
  SET_BOOKS_SEARCH_TEXT,
  SET_LOADING,
} from '../types';

const defaultState = {
  page: 1,
  itemsPerPage: 20,
  filters: [],
  initialBooksList: [],
  filteredBooksList: [],
  bookData: {},
  booksSearchText: '',
  isLoading: false,
};

export const booksReducer = (store = defaultState, action: actionT) => {
  const {type, payload} = action;

  switch (type) {
    case SET_BOOKS_LIST:
      return {
        ...store,
        initialBooksList: [...store.initialBooksList, ...payload],
        filteredBooksList: [...store.initialBooksList, ...payload],
      };
    case SET_FILTERED_BOOKS_LIST:
      return {
        ...store,
        filteredBooksList: payload,
      };
    case SET_BOOK_DATA:
      return {...store, bookData: payload};
    case SET_PAGINATION_PAGES:
      return {
        ...store,
        page: store.page + 20,
        itemsPerPage: store.itemsPerPage + 20,
      };
    case SET_BOOKS_SEARCH_TEXT:
      return {
        ...store,
        booksSearchText: payload,
      };
    case SET_LOADING:
      return {
        ...store,
        isLoading: payload,
      };
    default:
      return store;
  }
};
