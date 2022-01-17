import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {defaultTheme} from '../constants';
import {reducerT} from '../types';

const Modal = styled.Modal``;
const ActivityIndicator = styled.ActivityIndicator``;

export const Spinner = () => {
  const selector = (store: reducerT) => store.books.isLoading;
  const isLoading: boolean = useSelector(selector);
  return (
    <Modal
      onRequestClose={() => {}}
      transparent
      animationType="none"
      visible={isLoading}>
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={defaultTheme.primary}
          animating={true}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
