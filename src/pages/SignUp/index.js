import React, {useRef, useState} from 'react';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/AntDesign';

import logo from '../../assets/logo.png';

import {
  Container,
  TopMenuWrapper,
  BackButton,
  Logo,
  Title,
  FormWrapper,
  Input,
  ErrorWrapper,
  SignUpButton,
  SignUpButtonText,
} from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O nome completo é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUpScreen({navigation: {goBack}}) {
  const [nameInputFocused, setNameInputFocused] = useState(false);
  const [emailInputFocused, setEmailInputFocused] = useState(false);
  const [passwordInputFocused, setPasswordInputFocused] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSignUp(data) {
    console.log(data);
  }

  return (
    <Container>
      <TopMenuWrapper>
        <BackButton onPress={() => goBack()}>
          <Icon name="arrowleft" size={25} color="#33a1f2" />
        </BackButton>
        <Logo source={logo} resizeMode="contain" />
      </TopMenuWrapper>
      <Title>Criar sua conta</Title>
      <FormWrapper>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSignUp(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            isSubmitting,
            values,
          }) => (
            <>
              <Input
                placeholder="Nome"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => {
                  handleBlur('name');
                  setNameInputFocused(false);
                }}
                autoCompleteType="name"
                autoCorrect={false}
                autoCapitalize="words"
                returnKeyType="next"
                autoFocus
                onFocus={() => {
                  setNameInputFocused(true);
                }}
                underlineColorAndroid={nameInputFocused ? '#33a1f2' : '#8899a6'}
                selectionColor="#33a1f2"
                onSubmitEditing={() => emailRef.current.focus()}
              />
              <ErrorWrapper>
                <ErrorMessage name="name" />
              </ErrorWrapper>

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
                ref={emailRef}
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

              <Input
                secureTextEntry
                placeholder="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => {
                  handleBlur('password');
                  setPasswordInputFocused(false);
                }}
                autoCompleteType="off"
                maxLength={50}
                ref={passwordRef}
                returnKeyType="send"
                onFocus={() => {
                  setPasswordInputFocused(true);
                }}
                underlineColorAndroid={
                  passwordInputFocused ? '#33a1f2' : '#8899a6'
                }
                selectionColor="#33a1f2"
                onSubmitEditing={handleSubmit}
              />
              <ErrorWrapper>
                <ErrorMessage name="password" />
              </ErrorWrapper>
            </>
          )}
        </Formik>
      </FormWrapper>

      <SignUpButton>
        <SignUpButtonText>Inscrever-se</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}
