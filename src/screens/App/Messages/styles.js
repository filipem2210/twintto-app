import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ScreenTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;
