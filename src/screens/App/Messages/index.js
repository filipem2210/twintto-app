import React from 'react';

import Header from '../../../components/Header';

import {Container, ScreenTitle, Title} from './styles';

export default function MessagesScreen({navigation, theme}) {
  return (
    <Container>
      <Header navigation={navigation}>
        <ScreenTitle>Mensagens</ScreenTitle>
      </Header>
      <Title>Messages Screen</Title>
    </Container>
  );
}
