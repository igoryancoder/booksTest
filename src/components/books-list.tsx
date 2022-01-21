import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {ListItem} from '../components';
import {booksListGet} from '../store/actions';
import {prop} from 'styled-tools';
import {bookReducerT, bookT, reducerT} from '../types';

export const List = styled.FlatList`
  display: flex;
  flex-grow: 1;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  background-color: ${prop('theme.primary')};
`;

export const BooksList = () => {
  const dispatch = useDispatch();
  const selector = (store: reducerT) => store.books;
  const books: bookReducerT = useSelector(selector);
  const {filteredBooksList, booksSearchText} = books;

  return (
    <Container>
      <List
        onEndReached={() => !booksSearchText && dispatch(booksListGet())}
        onEndReachedThreshold={0.1}
        data={filteredBooksList}
        contentContainerStyle={{paddingBottom: 120}}
        keyExtractor={(item: bookT) => Math.random() + item.id.toString()}
        renderItem={({item}: {item: bookT}) => <ListItem item={item} />}
        // refreshing={books.isLoading}
        // onRefresh={() => dispatch(booksListGet())}
      />
    </Container>
  );
};
