import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Container} from './styles';

export default function Tweet() {
  const {colors} = useTheme();

  return (
    <Container style={{borderBottomColor: colors.border}}>
      <Text style={{color: colors.text}}>Tweet</Text>
    </Container>
  );
}
