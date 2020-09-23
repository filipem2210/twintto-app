import React from 'react';

import Header from '../../../components/Header';

import {Container, ScreenTitle, Title} from './styles';

export default function NotificationsScreen({navigation}) {
  return (
    <Container>
      <Header navigation={navigation}>
        <ScreenTitle>Notificações</ScreenTitle>
      </Header>
      <Title>Notifications Screen</Title>
    </Container>
  );
}
