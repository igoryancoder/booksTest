import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {defaultTheme} from '../constants';
import {reducerT} from '../types';

const height: number = Dimensions.get('window').height / 2;
const Modal = styled.Modal``;
const View = styled.View`
  width: 100%;
  height: 100%;
`;
const ActivityIndicator = styled.ActivityIndicator`
  margin-top: ${height}px;
`;

export const Spinner = () => {
  const selector = (store: reducerT) => store.books.isLoading;
  const isLoading: boolean = useSelector(selector);
  return (
    <Modal
      onRequestClose={() => {}}
      transparent
      animationType="none"
      visible={isLoading}>
      <View>
        <ActivityIndicator
          size="large"
          color={defaultTheme.primary}
          animating={true}
        />
      </View>
    </Modal>
  );
};
