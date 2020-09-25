import React, {createRef, useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import ProfileTabs from '../../../components/ProfileTabs';
import Tweet from '../../../components/Tweet';

import {
  Container,
  Header,
  BackButton,
  BackIcon,
  MoreOptionsButton,
  MoreOptionsIcon,
  AvatarWrapper,
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
  const avatarRef = createRef();
  const nameRef = createRef();
  const userRef = createRef();
  const cityRef = createRef();
  const birthDayRef = createRef();
  const signUpDateRef = createRef();
  const followInfoRef = createRef();
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1500);
  }, []);

  useEffect(() => {
    const shimmerAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
      Animated.parallel([
        nameRef.current.getAnimated(),
        userRef.current.getAnimated(),
        cityRef.current.getAnimated(),
        birthDayRef.current.getAnimated(),
        signUpDateRef.current.getAnimated(),
        followInfoRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(shimmerAnimated).start();
  }, [
    avatarRef,
    nameRef,
    userRef,
    cityRef,
    birthDayRef,
    signUpDateRef,
    followInfoRef,
  ]);

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
        <AvatarWrapper>
          <ShimmerPlaceholder
            ref={avatarRef}
            width={75}
            height={75}
            shimmerStyle={{borderRadius: 75}}
            visible={avatarVisible}>
            <Avatar
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_200x200.jpg',
              }}
              onLoadEnd={() => setAvatarVisible(true)}
            />
          </ShimmerPlaceholder>
        </AvatarWrapper>
      </Header>

      <ProfileData>
        <EditProfileButtonWrapper>
          <EditProfileButton>
            <EditProfileText>Editar perfil</EditProfileText>
          </EditProfileButton>
        </EditProfileButtonWrapper>
        <ShimmerPlaceholder ref={nameRef} visible={visible} stopAutoRun>
          <Name>old wolf</Name>
        </ShimmerPlaceholder>
        <ShimmerPlaceholder ref={userRef} visible={visible} stopAutoRun>
          <UserName>@filipem2210</UserName>
        </ShimmerPlaceholder>
        <City>
          <IconWrapper>
            <LocationIcon />
          </IconWrapper>
          <ShimmerPlaceholder ref={cityRef} visible={visible} stopAutoRun>
            <CityText>Florianópolis</CityText>
          </ShimmerPlaceholder>
        </City>
        <Birthday>
          <IconWrapper>
            <BalloonIcon />
          </IconWrapper>
          <ShimmerPlaceholder ref={birthDayRef} visible={visible} stopAutoRun>
            <BirthdayText>Nascido em 22 de outubro de 1986</BirthdayText>
          </ShimmerPlaceholder>
        </Birthday>
        <SignUpDate>
          <IconWrapper>
            <CalendarIcon />
          </IconWrapper>
          <ShimmerPlaceholder ref={signUpDateRef} visible={visible} stopAutoRun>
            <SignUpDateText>Entrou em fevereiro de 2016</SignUpDateText>
          </ShimmerPlaceholder>
        </SignUpDate>
        <ShimmerPlaceholder
          ref={followInfoRef}
          visible={visible}
          style={{marginTop: 20}}
          stopAutoRun>
          <FollowInfo>
            <FollowingNumber>78 </FollowingNumber>
            <FollowingText>Seguindo </FollowingText>
            <FollowersNumber>22 </FollowersNumber>
            <FollowersText>Seguidores</FollowersText>
          </FollowInfo>
        </ShimmerPlaceholder>
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
