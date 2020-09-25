import React, {useContext, useState, useEffect, createRef} from 'react';
import {Animated} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import {ThemeContext} from '../../contexts/ThemeContext';

import {
  Container,
  UserInfo,
  AvatarWrapper,
  Avatar,
  Name,
  UserName,
  FollowInfo,
  FollowingNumber,
  FollowingText,
  FollowersNumber,
  FollowersText,
  DrawerItemsWrapper,
  DrawerMoreItemsWrapper,
  DrawerNav,
  BottomOptions,
  ThemeSwitchButton,
  ThemeSwitchIcon,
  QrCodeButton,
  QrCodeIcon,
} from './styles';

export default function DrawerItems(props) {
  const {toggleTheme} = useContext(ThemeContext);
  const avatarRef = createRef();
  const nameRef = createRef();
  const userRef = createRef();
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
        followInfoRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(shimmerAnimated).start();
  }, [avatarRef, nameRef, userRef, followInfoRef]);

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <UserInfo>
          <AvatarWrapper>
            <ShimmerPlaceholder
              ref={avatarRef}
              width={50}
              height={50}
              shimmerStyle={{borderRadius: 50}}
              visible={avatarVisible}>
              <Avatar
                source={{
                  uri:
                    'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg',
                }}
                onLoadEnd={() => setAvatarVisible(true)}
              />
            </ShimmerPlaceholder>
          </AvatarWrapper>
          <ShimmerPlaceholder ref={nameRef} visible={visible} stopAutoRun>
            <Name>old wolf</Name>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder ref={userRef} visible={visible} stopAutoRun>
            <UserName>@filipem2210</UserName>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            ref={followInfoRef}
            visible={visible}
            style={{marginTop: 10}}
            stopAutoRun>
            <FollowInfo>
              <FollowingNumber>78 </FollowingNumber>
              <FollowingText>Seguindo </FollowingText>
              <FollowersNumber>22 </FollowersNumber>
              <FollowersText>Seguidores</FollowersText>
            </FollowInfo>
          </ShimmerPlaceholder>
        </UserInfo>
        <DrawerItemsWrapper>
          <DrawerNav
            label="Perfil"
            onPress={() => props.navigation.navigate('Profile')}
            icon={({focused, color, size}) => (
              <Icon
                color={color}
                size={size}
                name={focused ? 'md-person-sharp' : 'md-person-outline'}
              />
            )}
          />
          <DrawerNav
            label="Listas"
            icon={({focused, color, size}) => (
              <Icon
                color={color}
                size={size}
                name={focused ? 'reader-sharp' : 'reader-outline'}
              />
            )}
          />
          <DrawerNav
            label="Tópicos"
            icon={({focused, color, size}) => (
              <Icon
                color={color}
                size={size}
                name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'}
              />
            )}
          />
          <DrawerNav
            label="Itens Salvos"
            icon={({focused, color, size}) => (
              <Icon
                color={color}
                size={size}
                name={focused ? 'chatbox-ellipses' : 'bookmark-outline'}
              />
            )}
          />
          <DrawerNav
            label="Moments"
            icon={({focused, color, size}) => (
              <Icon
                color={color}
                size={size}
                name={focused ? 'flash-sharp' : 'flash-outline'}
              />
            )}
          />
        </DrawerItemsWrapper>
        <DrawerMoreItemsWrapper>
          <DrawerNav label="Configurações e privacidade" />
          <DrawerNav label="Central de Ajuda" />
        </DrawerMoreItemsWrapper>
      </DrawerContentScrollView>
      <BottomOptions>
        <ThemeSwitchButton
          onPress={() => {
            toggleTheme();
          }}>
          <ThemeSwitchIcon />
        </ThemeSwitchButton>
        <QrCodeButton>
          <QrCodeIcon />
        </QrCodeButton>
      </BottomOptions>
    </Container>
  );
}
