import React from 'react';
import {useTheme} from '@react-navigation/native';

import Tweet from '../Tweet';

import {Container} from './styles';

export default function Tweets() {
  const {colors} = useTheme();

  return (
    <Container style={{borderTopColor: colors.border}}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Container>
  );
}
