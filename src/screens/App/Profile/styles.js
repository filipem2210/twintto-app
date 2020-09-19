import styled from 'styled-components/native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

export const BackIcon = styled(ADIcon).attrs({
  name: 'arrowleft',
  size: 25,
  color: '#fff',
})``;

export const MoreOptionsButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;

export const MoreOptionsIcon = styled(IoIcon).attrs({
  name: 'ellipsis-vertical-outline',
  size: 25,
  color: '#fff',
})``;

export const Avatar = styled.Image`
  position: absolute;
  bottom: -40px;
  left: 15px;
  width: 75px;
  height: 75px;
  border-bottom-left-radius: 75px;
  border-bottom-right-radius: 75px;
  border-top-right-radius: 75px;
  border-top-left-radius: 75px;
  border-width: 4px;
`;

export const ProfileData = styled.View`
  padding: 8px 15px;
`;

export const EditProfileButtonWrapper = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const EditProfileButton = styled.TouchableOpacity`
  padding: 6px 20px;
  border-width: 1px;
  border-color: gray;
  border-radius: 20px;
  background-color: transparent;
`;

export const EditProfileText = styled.Text`
  font-weight: bold;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const UserName = styled.Text`
  font-size: 14px;
`;

export const IconWrapper = styled.View`
  width: 20px;
  margin-right: 5px;
`;

export const City = styled.Text`
  font-size: 14px;
  margin-top: 20px;
  align-items: center;
`;

export const LocationIcon = styled(IoIcon).attrs({
  name: 'location-outline',
  size: 15,
})`
  width: 20px;
`;

export const Birthday = styled.Text`
  font-size: 14px;
  margin-top: 3px;
  align-items: center;
`;

export const BalloonIcon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 12px;
  height: 12px;
`;

export const SignUpDate = styled.Text`
  font-size: 14px;
  margin-top: 3px;
  align-items: center;
`;

export const CalendarIcon = styled(IoIcon).attrs({
  name: 'calendar-outline',
  size: 15,
})`
  width: 20px;
`;

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

export const Tweets = styled.View`
  flex: 1;
  border-top-width: 1px;
`;
