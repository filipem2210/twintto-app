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
  justify-content: center;
  background-color: #fff;
  padding: 15px 0;
`;

export const TopMenuWrapper = styled.View`
  flex-direction: row;
  align-items: center;
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

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  margin-top: 30px;
  padding: 0 30px;
`;

export const FormWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 30px;
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

export const SignUpButtonWrapper = styled.View`
  width: 100%;
  align-items: flex-end;
  padding: 0 15px;
`;

export const SignUpButton = styled(RectButton)`
  background-color: #33a1f2;
  border-radius: 50px;
  padding: 6px 16px;
  align-items: center;
  width: 115px;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
