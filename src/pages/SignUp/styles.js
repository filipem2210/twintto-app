import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
`;

export const TopMenuWrapper = styled.View`
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity``;

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

export const Input = styled.TextInput`
  font-size: 19px;
`;

export const ErrorWrapper = styled.Text`
  color: #c0392b;
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: #33a1f2;
  border-radius: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
