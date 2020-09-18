import styled from 'styled-components/native';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const iconSize = 25;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  padding: 15px;
`;

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
`;

export const UserName = styled.Text``;

export const FollowInfo = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const FollowingNumber = styled.Text`
  font-weight: bold;
`;

export const FollowingText = styled.Text``;

export const FollowersNumber = styled.Text`
  font-weight: bold;
`;

export const FollowersText = styled.Text``;

export const DrawerItemsWrapper = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

export const DrawerNav = styled(DrawerItem)``;

export const BottomOptions = styled.View`
  border-top-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const ThemeSwitchButton = styled.TouchableOpacity``;

export const ThemeSwitchIcon = styled(Icon).attrs({
  name: 'bulb-outline',
  size: iconSize,
})``;

export const QrCodeButton = styled.TouchableOpacity``;

export const QrCodeIcon = styled(Icon).attrs({
  name: 'qr-code-outline',
  size: iconSize,
})``;
