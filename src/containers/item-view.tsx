import React from 'react';
import styled from 'styled-components/native';
import {BooksItem} from '../components';
import {prop} from 'styled-tools';
import {RouteProp} from '@react-navigation/native';

const Container = styled.View`
  display: flex;
  padding-top: 20px;
  padding-horizontal: 18px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  background-color: ${prop('theme.primary')};
`;

export const ItemScreen = ({
  route,
}: {
  route: RouteProp<{params: {id: number}}, 'params'>;
}) => {
  const {params} = route;
  return (
    <Container>
      <BooksItem id={params?.id} />
    </Container>
  );
};
