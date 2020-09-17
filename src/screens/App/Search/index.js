import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import Header from '../../../components/Header';

import {Container, Search} from './styles';

export default function SearchScreen({navigation}) {
  const {colors} = useTheme();

  return (
    <Container>
      <Header navigation={navigation}>
        <Search
          placeholder="Busca do Twitter"
          style={{
            color: colors.text,
            backgroundColor: colors.border,
          }}
        />
      </Header>
      <Text>Search Screen</Text>
    </Container>
  );
}
