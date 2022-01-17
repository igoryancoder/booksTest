import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {bookByIdGet} from '../store/actions';
import {prop} from 'styled-tools';
import {bookT} from '../types';

const Button = styled.TouchableOpacity`
  margin-left: 18px;
  margin-right: 18px;
  margin-bottom: 10px;
  border-width: 1px;
  border-radius: 16px;
  padding: 9px;
  background-color: ${prop('theme.secondary')};
`;

const Text = styled.Text`
  padding-vertical: 4px;
  color: ${prop('theme.textLight')};
`;

const TextTittle = styled.Text`
  padding-vertical: 4px;
  font-weight: bold;
  color: ${prop('theme.textDark')};
`;

export const ListItem = ({item}: {item: bookT}) => {
  const dispatch = useDispatch();

  return (
    <Button onPress={() => dispatch(bookByIdGet(item.id))}>
      <TextTittle>Book Tittle: {item.book_title}</TextTittle>
      <Text>Book Authors: {item.book_author.join(', ')}</Text>
      <Text>Book publication year: {item.book_publication_year}</Text>
    </Button>
  );
};
