import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  border-top-width: 1px;
  padding: 5px 10px;
  flex-direction: row;
  border-top-color: ${(props) => props.theme.colors.border};
`;

export const Storie = styled.View`
  margin-right: 10px;
`;

export const AvatarWrapper = styled.View`
  position: relative;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  border-width: 3px;
  border-color: ${(props) => props.theme.colors.gray};
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 55px;
  height: 55px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const PlusIcon = styled(Icon).attrs((props) => ({
  name: 'pluscircle',
  size: 15,
  color: props.theme.colors.twitter,
}))`
  position: absolute;
  bottom: -2px;
  right: 0;
  padding: 2px;
  width: 19px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${(props) => props.theme.colors.white};
  border-width: 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  width: 60px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
`;
