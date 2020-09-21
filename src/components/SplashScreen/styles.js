import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  background-color: #33a1f2;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Icon).attrs({
  name: 'logo-twitter',
  color: '#fff',
  size: 75,
})``;
