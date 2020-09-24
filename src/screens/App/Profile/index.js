import React from 'react';

import ProfileTabs from '../../../components/ProfileTabs';
import Tweet from '../../../components/Tweet';

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
  CityText,
  Birthday,
  BalloonIcon,
  BirthdayText,
  SignUpDate,
  CalendarIcon,
  SignUpDateText,
  FollowInfo,
  FollowingNumber,
  FollowingText,
  FollowersNumber,
  FollowersText,
  Tweets,
} from './styles';

export default function Profile({navigation}) {
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
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_200x200.jpg',
          }}
        />
      </Header>

      <ProfileData>
        <EditProfileButtonWrapper>
          <EditProfileButton>
            <EditProfileText>Editar perfil</EditProfileText>
          </EditProfileButton>
        </EditProfileButtonWrapper>
        <Name>old wolf</Name>
        <UserName>@filipem2210</UserName>
        <City>
          <IconWrapper>
            <LocationIcon />
          </IconWrapper>
          <CityText>Florianópolis</CityText>
        </City>
        <Birthday>
          <IconWrapper>
            <BalloonIcon />
          </IconWrapper>
          <BirthdayText>Nascido em 22 de outubro de 1986</BirthdayText>
        </Birthday>
        <SignUpDate>
          <IconWrapper>
            <CalendarIcon />
          </IconWrapper>
          <SignUpDateText>Entrou em fevereiro de 2016</SignUpDateText>
        </SignUpDate>
        <FollowInfo>
          <FollowingNumber>78 </FollowingNumber>
          <FollowingText>Seguindo </FollowingText>
          <FollowersNumber>22 </FollowersNumber>
          <FollowersText>Seguidores</FollowersText>
        </FollowInfo>
      </ProfileData>
      <ProfileTabs />
      <Tweets>
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
