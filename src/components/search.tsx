import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {searchByFieldNames} from '../helpers';
import {filteredBooksListSet, booksSearchTextSet} from '../store/actions';
import {prop} from 'styled-tools';
import {bookReducerT, reducerT} from '../types';

const Container = styled.View`
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${prop('theme.primary')};
`;

const Input = styled.TextInput`
  text-align: left;
  padding-left: 16px;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 10px;
  background-color: ${prop('theme.secondary')};
`;

export const Search = () => {
  const dispatch = useDispatch();
  const selector = (store: reducerT) => store.books;
  const books: bookReducerT = useSelector(selector);
  const {initialBooksList, booksSearchText} = books;

  const onSearchInput = (text: string) => {
    const filtered = searchByFieldNames({
      text,
      data: initialBooksList,
      searchFields: ['book_title'],
    });
    dispatch(filteredBooksListSet(filtered));
    dispatch(booksSearchTextSet(text));
  };

  return (
    <Container>
      <Input
        placeholder={'Search'}
        value={booksSearchText}
        keyboardType="default"
        onChangeText={onSearchInput}
        underlineColorAndroid="transparent"
      />
    </Container>
  );
};
