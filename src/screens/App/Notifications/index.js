import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Header from '../../../components/Header';

import {Container, Title} from './styles';

export default function NotificationsScreen({navigation}) {
  const {colors} = useTheme();

  return (
    <Container>
      <Header navigation={navigation}>
        <Title style={{color: colors.text}}>Notificações</Title>
      </Header>
      <Text>Notifications Screen</Text>
    </Container>
  );
}
