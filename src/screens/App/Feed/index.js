import React from 'react';

import Header from '../../../components/Header';
import Tweets from '../../../components/Tweets';

import logo from '../../../assets/logo.png';

import {Container, Logo} from './styles';

export default function Feed({navigation}) {
  const logoSize = 25;

  return (
    <Container>
      <Header navigation={navigation} feed>
        <Logo
          source={logo}
          resizeMode="contain"
          width={logoSize}
          height={logoSize}
        />
      </Header>
      <Tweets />
    </Container>
  );
}
