import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Search = styled.TextInput`
  width: 90%;
  color: ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 25px;
  padding: 5px 0 5px 10px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;
