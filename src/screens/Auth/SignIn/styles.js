import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import FAIcon from 'react-native-vector-icons/FontAwesome5';
import ADIcon from 'react-native-vector-icons/AntDesign';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  align-items: center;
  padding: 15px 0 0 0;
  background-color: #fff;
`;

export const TopMenuWrapper = styled.View`
  flex-direction: row;
  padding: 0 10px;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'rgba(29, 161, 242, 0.1)',
})`
  padding: 5px;
  border-radius: 50px;
`;

export const BackIcon = styled(ADIcon).attrs({
  name: 'arrowleft',
  size: 25,
  color: '#33a1f2',
})``;

export const Logo = styled.Image`
  flex: 1;
`;

export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const SignUpButtonText = styled.Text`
  color: #33a1f2;
  font-size: 16px;
  font-weight: bold;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 23px;
  font-weight: bold;
  margin-top: 10px;
  padding: 0 10px;
`;

export const FormWrapper = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
  padding: 0 10px;
`;

export const InputWrapper = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  font-size: 19px;
`;

export const PasswordVisibilityButton = styled.TouchableWithoutFeedback``;

export const PasswordVisibilityIcon = styled(FAIcon).attrs({
  name: 'eye',
  size: 20,
})`
  position: absolute;
  right: 5px;
  top: 15px;
  opacity: 0.4;
`;

export const ErrorWrapper = styled.Text`
  color: #c0392b;
`;

export const ForgotPasswordButton = styled.TouchableHighlight`
  padding: 5px;
  align-items: center;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #747d8c;
`;

export const SignInButtonWrapper = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 10px;
  border-top-width: 1px;
  border-top-color: #bdc3c7;
`;

export const SignInButton = styled(RectButton)`
  background-color: #33a1f2;
  border-radius: 50px;
  padding: 6px 16px;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
