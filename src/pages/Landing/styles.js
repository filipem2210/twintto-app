import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px 30px 30px;
  background-color: #fff;
`;

export const Logo = styled.Image``;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  max-width: 70%;
  line-height: 40px;
`;

export const SignUpButton = styled(RectButton)`
  width: 100%;
  background-color: #33a1f2;
  border-radius: 50px;
  padding: 6px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const SignUpButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 23px;
`;

export const SignInWrapper = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SignInText = styled.Text`
  color: #8899a6;
`;

export const SignInButton = styled.TouchableOpacity``;

export const SignInButtonText = styled.Text`
  color: #33a1f2;
`;
