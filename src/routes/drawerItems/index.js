import React, {useContext} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ThemeContext} from '../../contexts/ThemeContext';

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
  const {colors} = useTheme();
  const {toggleTheme} = useContext(ThemeContext);
  const iconSize = 25;

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
          <Name style={{color: colors.text}}>old wolf</Name>
          <UserName style={{color: colors.text}}>@filipem2210</UserName>
          <FollowInfo>
            <FollowingNumber style={{color: colors.text}}>78 </FollowingNumber>
            <FollowingText style={{color: colors.text}}>
              Seguindo{' '}
            </FollowingText>
            <FollowersNumber style={{color: colors.text}}>22 </FollowersNumber>
            <FollowersText style={{color: colors.text}}>
              Seguidores
            </FollowersText>
          </FollowInfo>
        </UserInfo>
        <DrawerItemsWrapper
          style={{
            borderTopColor: colors.border,
            borderBottomColor: colors.border,
          }}>
          <DrawerNav
            label="Perfil"
            labelStyle={{color: colors.text}}
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
            labelStyle={{color: colors.text}}
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
            labelStyle={{color: colors.text}}
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
            labelStyle={{color: colors.text}}
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
            labelStyle={{color: colors.text}}
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
          <DrawerNav
            label="Configurações e privacidade"
            labelStyle={{color: colors.text}}
          />
          <DrawerNav
            label="Central de Ajuda"
            labelStyle={{color: colors.text}}
          />
        </View>
      </DrawerContentScrollView>
      <BottomOptions style={{borderTopColor: colors.border}}>
        <Icon
          color={colors.twitter}
          size={iconSize}
          name="bulb-outline"
          onPress={() => {
            toggleTheme();
          }}
        />
        <Icon color={colors.twitter} size={iconSize} name="qr-code-outline" />
      </BottomOptions>
    </Container>
  );
}
