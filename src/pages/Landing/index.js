import React from 'react';

import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  Wrapper,
  Title,
  SignUpButton,
  SignUpButtonText,
  SignInWrapper,
  SignInText,
  SignInButton,
  SignInButtonText,
} from './styles';

export default function LandingScreen({navigation}) {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
      <Wrapper>
        <Title>Veja o que está acontencendo no mundo neste momento.</Title>
        <SignUpButton onPress={() => navigation.navigate('SignUp')}>
          <SignUpButtonText>Criar Conta</SignUpButtonText>
        </SignUpButton>
      </Wrapper>
      <SignInWrapper>
        <SignInText>Já tem uma conta? </SignInText>
        <SignInButton>
          <SignInButtonText>Entrar</SignInButtonText>
        </SignInButton>
      </SignInWrapper>
    </Container>
  );
}
