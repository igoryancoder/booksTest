import * as React from 'react';

import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components/native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {defaultTheme} from '../constants';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import {booksReducer} from './reducers';

import {Navigator} from '../navigation';

const rootReducer = combineReducers({
  books: booksReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(sagaMiddleware));

export const store = configureStore();

sagaMiddleware.run(rootSaga);

export const Store = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};
