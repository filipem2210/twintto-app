import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.twitter};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Icon).attrs((props) => ({
  name: 'logo-twitter',
  color: props.theme.colors.white,
  size: 75,
}))``;
