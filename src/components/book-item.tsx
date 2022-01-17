import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {prop} from 'styled-tools';
import Share from 'react-native-share';
import _ from 'lodash';
import {bookByIdGet} from '../store/actions';
import {bookT, ID, reducerT} from '../types';
import {DEEP_LINKING_URL} from '../constants';

const Button = styled.TouchableOpacity`
  margin-top: 25px;
  border-width: 1px;
  border-radius: 16px;
  padding: 9px;
  width: 100%;
  align-items: center;
  justify-content: center;
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

export const BooksItem = ({id}: ID) => {
  const dispatch = useDispatch();
  const selector = (store: reducerT) => store.books.bookData;
  const book: bookT = useSelector(selector);

  useEffect(() => {
    if (id) {
      dispatch(bookByIdGet(id));
    }
  });

  function onSharePress() {
    const options = {
      title: 'Share book',
      failOnCancel: false,
      urls: [`${DEEP_LINKING_URL}${id}`],
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  return (
    <>
      <TextTittle>Book Tittle: {book.book_title}</TextTittle>
      <Text>Book Description: {book.description}</Text>
      {!_.isEmpty(book) && (
        <>
          <Text>
            Book classification: {book.thematical_classification.join(', ')}
          </Text>
          <Text>Book Authors: {book.book_author.join(', ')}</Text>
        </>
      )}
      <Text>Book publication year: {book.book_publication_year}</Text>
      <Text>Book publication city: {book.book_publication_city}</Text>
      <Text>Book publication country: {book.book_publication_country}</Text>
      <Button onPress={onSharePress}>
        <Text>Share</Text>
      </Button>
    </>
  );
};
