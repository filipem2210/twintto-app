import React, {useRef, useState, useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import {AuthContext} from '../../../contexts/AuthContext';

import logo from '../../../assets/logo.png';

import {
  Container,
  TopMenuWrapper,
  BackButton,
  BackIcon,
  Logo,
  SignUpButton,
  SignUpButtonText,
  Title,
  FormWrapper,
  InputWrapper,
  Input,
  PasswordVisibilityButton,
  PasswordVisibilityIcon,
  ErrorWrapper,
  SignInButtonWrapper,
  SignInButton,
  SignInButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignInScreen({navigation}) {
  const {signIn} = useContext(AuthContext);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(true);

  const passwordRef = useRef();

  function handleSignIn(data) {
    signIn(data);
  }

  return (
    <Container>
      <TopMenuWrapper>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <Logo source={logo} resizeMode="contain" />
        <SignUpButton onPress={() => navigation.navigate('SignUp')}>
          <SignUpButtonText>Inscreva-se</SignUpButtonText>
        </SignUpButton>
      </TopMenuWrapper>
      <Title>Entrar no Twitter.</Title>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSignIn(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isSubmitting,
          values,
        }) => (
          <>
            <FormWrapper>
              <Input
                placeholder="E-mail"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => {
                  handleBlur('email');
                  setEmailInputFocused(false);
                }}
                keyboardType="email-address"
                autoCompleteType="email"
                autoCorrect={false}
                autoCapitalize="none"
                autoFocus
                returnKeyType="next"
                onFocus={() => {
                  setEmailInputFocused(true);
                }}
                underlineColorAndroid={
                  emailInputFocused ? '#33a1f2' : '#8899a6'
                }
                selectionColor="#33a1f2"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <ErrorWrapper>
                <ErrorMessage name="email" />
              </ErrorWrapper>

              <InputWrapper>
                <Input
                  secureTextEntry={passwordHidden}
                  placeholder="Senha"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => {
                    handleBlur('password');
                    setPasswordInputFocused(false);
                  }}
                  autoCapitalize="none"
                  autoCompleteType="off"
                  autoCorrect={false}
                  maxLength={50}
                  ref={passwordRef}
                  returnKeyType="done"
                  onFocus={() => {
                    setPasswordInputFocused(true);
                  }}
                  underlineColorAndroid={
                    passwordInputFocused ? '#33a1f2' : '#8899a6'
                  }
                  selectionColor="#33a1f2"
                  onSubmitEditing={handleSubmit}
                />
                <PasswordVisibilityButton
                  onPress={() => setPasswordHidden((prevValue) => !prevValue)}>
                  <PasswordVisibilityIcon
                    color={passwordHidden ? '#8899a6' : '#33a1f2'}
                    style={!passwordHidden && {opacity: 1}}
                  />
                </PasswordVisibilityButton>
              </InputWrapper>
              <ErrorWrapper>
                <ErrorMessage name="password" />
              </ErrorWrapper>

              <ForgotPasswordButton>
                <ForgotPasswordButtonText>
                  Esqueceu sua senha?
                </ForgotPasswordButtonText>
              </ForgotPasswordButton>
            </FormWrapper>

            <SignInButtonWrapper>
              <SignInButton onPress={handleSubmit}>
                {isSubmitting ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <SignInButtonText>Entrar</SignInButtonText>
                )}
              </SignInButton>
            </SignInButtonWrapper>
          </>
        )}
      </Formik>
    </Container>
  );
}
