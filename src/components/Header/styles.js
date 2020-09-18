import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const iconSize = 25;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 55px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const MenuIcon = styled(Icon).attrs({
  name: 'menu',
  size: iconSize,
})``;

export const ChildrenWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const SettingsButton = styled.TouchableOpacity``;

export const SettingsIcon = styled(Icon).attrs({
  name: 'md-settings-outline',
  size: iconSize,
})``;
