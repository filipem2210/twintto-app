import styled from 'styled-components/native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';
import MIIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
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
  border-color: ${(props) => props.theme.colors.card};
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
  border-color: ${(props) => props.theme.colors.gray};
  border-radius: 20px;
  background-color: transparent;
`;

export const EditProfileText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray};
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.gray};
`;

export const UserName = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
`;

export const IconWrapper = styled.View`
  width: 20px;
  margin-right: 5px;
`;

export const City = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const LocationIcon = styled(IoIcon).attrs((props) => ({
  name: 'location-outline',
  size: 15,
  color: props.theme.colors.gray,
}))`
  width: 20px;
`;

export const CityText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Birthday = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const BalloonIcon = styled(MIIcon).attrs((props) => ({
  name: 'cake',
  size: 15,
  color: props.theme.colors.gray,
}))`
  width: 20px;
`;

export const BirthdayText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
`;

export const SignUpDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const CalendarIcon = styled(IoIcon).attrs((props) => ({
  name: 'calendar-outline',
  size: 15,
  color: props.theme.colors.gray,
}))`
  width: 20px;
`;

export const SignUpDateText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
`;

export const FollowInfo = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const FollowingNumber = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FollowingText = styled.Text`
  color: ${(props) => props.theme.colors.gray};
`;

export const FollowersNumber = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const FollowersText = styled.Text`
  color: ${(props) => props.theme.colors.gray};
`;

export const Tweets = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.gray};
`;
