import React from 'react';
import {useTheme} from '@react-navigation/native';

import ProfileTabs from '../../../components/ProfileTabs';
import Tweet from '../../../components/Tweet';

import balloon from '../../../assets/balloon.png';

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  MoreOptionsButton,
  MoreOptionsIcon,
  Avatar,
  ProfileData,
  EditProfileButtonWrapper,
  EditProfileButton,
  EditProfileText,
  Name,
  UserName,
  City,
  IconWrapper,
  LocationIcon,
  Birthday,
  BalloonIcon,
  SignUpDate,
  CalendarIcon,
  FollowInfo,
  FollowingNumber,
  FollowingText,
  FollowersNumber,
  FollowersText,
  Tweets,
} from './styles';

export default function Profile({navigation}) {
  const {colors} = useTheme();

  return (
    <Container>
      <Header
        source={{
          uri:
            'https://pbs.twimg.com/profile_banners/704295040982650880/1589387411/1500x500',
        }}>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <MoreOptionsButton>
          <MoreOptionsIcon />
        </MoreOptionsButton>
        <Avatar
          style={{borderColor: colors.card}}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_200x200.jpg',
          }}
        />
      </Header>

      <ProfileData>
        <EditProfileButtonWrapper>
          <EditProfileButton style={{borderColor: colors.gray}}>
            <EditProfileText style={{color: colors.gray}}>
              Editar perfil
            </EditProfileText>
          </EditProfileButton>
        </EditProfileButtonWrapper>
        <Name style={{color: colors.text}}>old wolf</Name>
        <UserName style={{color: colors.gray}}>@filipem2210</UserName>
        <City style={{color: colors.gray}}>
          <IconWrapper>
            <LocationIcon color={colors.gray} />
          </IconWrapper>
          Florianópolis
        </City>
        <Birthday style={{color: colors.gray}}>
          <IconWrapper>
            <BalloonIcon source={balloon} />
          </IconWrapper>
          Nascido em 22 de outubro de 1986
        </Birthday>
        <SignUpDate style={{color: colors.gray}}>
          <IconWrapper>
            <CalendarIcon color={colors.gray} />
          </IconWrapper>
          Entrou em fevereiro de 2016
        </SignUpDate>
        <FollowInfo>
          <FollowingNumber style={{color: colors.text}}>78 </FollowingNumber>
          <FollowingText style={{color: colors.gray}}>Seguindo </FollowingText>
          <FollowersNumber style={{color: colors.text}}>22 </FollowersNumber>
          <FollowersText style={{color: colors.gray}}>Seguidores</FollowersText>
        </FollowInfo>
      </ProfileData>
      <ProfileTabs />
      <Tweets style={{borderTopColor: colors.border}}>
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
          name="Gabs Ferreira"
          user="@o_gabsferreira"
          date="20 de mai"
          description="Entendendo a web em 4 passos simples"
          image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
          comments={15}
          retweets={281}
          likes={125}
          retweet
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
          name="talita souza"
          user="@souzatali7"
          date="10 de set"
          description="queria ta tirando uma soneca com o ar condicionado no talo"
          likes={1}
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
          name="Gabs Ferreira"
          user="@o_gabsferreira"
          date="20 de mai"
          description="Entendendo a web em 4 passos simples"
          image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
          comments={15}
          retweets={281}
          likes={125}
          retweet
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
          name="talita souza"
          user="@souzatali7"
          date="10 de set"
          description="queria ta tirando uma soneca com o ar condicionado no talo"
          likes={1}
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
          name="Gabs Ferreira"
          user="@o_gabsferreira"
          date="20 de mai"
          description="Entendendo a web em 4 passos simples"
          image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
          comments={15}
          retweets={281}
          likes={125}
          retweet
        />
        <Tweet
          avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
          name="talita souza"
          user="@souzatali7"
          date="10 de set"
          description="queria ta tirando uma soneca com o ar condicionado no talo"
          likes={1}
        />
      </Tweets>
    </Container>
  );
}
