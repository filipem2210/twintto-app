import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: #fff;
`;

export const TopMenuWrapper = styled.View`
  flex-direction: row;
`;

export const BackButton = styled.TouchableHighlight.attrs({
  underlayColor: 'rgba(29, 161, 242, 0.1)',
})`
  padding: 5px;
  border-radius: 50px;
`;

export const Logo = styled.Image`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  margin-top: 30px;
`;

export const FormWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const InputWrapper = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  font-size: 19px;
`;

export const PasswordVisibilityButton = styled.TouchableWithoutFeedback``;

export const PasswordVisibilityButtonIcon = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 15px;
  opacity: 0.4;
`;

export const ErrorWrapper = styled.Text`
  color: #c0392b;
`;

export const SignUpButtonWrapper = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const SignUpButton = styled(RectButton)`
  background-color: #33a1f2;
  border-radius: 50px;
  padding: 6px 16px;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
