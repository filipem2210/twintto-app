import React from 'react';

import Header from '../../../components/Header';

import {Container, Search, Title} from './styles';

export default function SearchScreen({navigation}) {
  return (
    <Container>
      <Header navigation={navigation}>
        <Search placeholder="Busca do Twitter" />
      </Header>
      <Title>Search Screen</Title>
    </Container>
  );
}
