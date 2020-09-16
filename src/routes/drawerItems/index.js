import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  UserInfo,
  Avatar,
  Name,
  UserName,
  FollowInfo,
  FollowingNumber,
  FollowingText,
  FollowersNumber,
  FollowersText,
  DrawerItemsWrapper,
  DrawerNav,
  BottomOptions,
} from './styles';

export default function DrawerItems(props) {
  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <UserInfo>
          <Avatar
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg',
            }}
          />
          <Name>old wolf</Name>
          <UserName>@filipem2210</UserName>
          <FollowInfo>
            <FollowingNumber>78 </FollowingNumber>
            <FollowingText>Seguindo </FollowingText>
            <FollowersNumber>22 </FollowersNumber>
            <FollowersText>Seguidores</FollowersText>
          </FollowInfo>
        </UserInfo>
        <DrawerItemsWrapper>
          <DrawerNav
            label="Perfil"
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
        <View>
          <DrawerNav label="Configurações e privacidade" />
          <DrawerNav label="Central de Ajuda" />
        </View>
      </DrawerContentScrollView>
      <BottomOptions>
        <Icon color="#33a1f2" size={25} name="bulb-outline" />
        <Icon color="#33a1f2" size={25} name="qr-code-outline" />
      </BottomOptions>
    </Container>
  );
}
