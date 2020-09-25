import styled from 'styled-components/native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const iconSize = 25;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
`;

export const UserInfo = styled.View`
  padding: 15px;
`;

export const AvatarWrapper = styled.View``;

export const Avatar = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 50px;
  height: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const Name = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const UserName = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;

export const FollowInfo = styled.View`
  flex-direction: row;
`;

export const FollowingNumber = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FollowingText = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;

export const FollowersNumber = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FollowersText = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;

export const DrawerItemsWrapper = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.border};
`;

export const DrawerMoreItemsWrapper = styled.View``;

export const DrawerNav = styled(DrawerItem).attrs((props) => ({
  labelStyle: {
    color: props.theme.colors.text,
  },
  activeTintColor: props.theme.colors.gray,
  inactiveTintColor: props.theme.colors.gray,
}))``;

export const BottomOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.border};
`;

export const ThemeSwitchButton = styled.TouchableOpacity``;

export const ThemeSwitchIcon = styled(Icon).attrs((props) => ({
  name: 'bulb-outline',
  size: iconSize,
  color: props.theme.colors.twitter,
}))``;

export const QrCodeButton = styled.TouchableOpacity``;

export const QrCodeIcon = styled(Icon).attrs((props) => ({
  name: 'qr-code-outline',
  size: iconSize,
  color: props.theme.colors.twitter,
}))``;
