import styled from 'styled-components/native';
import {DrawerItem} from '@react-navigation/drawer';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  padding: 15px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
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
