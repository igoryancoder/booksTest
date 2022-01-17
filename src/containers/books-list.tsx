import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {booksListGet} from '../store/actions';
import {BooksList, Search} from '../components';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const BooksListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksListGet());
  }, [booksListGet]);

  return (
    <Container>
      <Search />
      <BooksList />
    </Container>
  );
};
