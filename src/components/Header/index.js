import React from 'react';
import {useTheme, DrawerActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Container, ChildrenWrapper} from './styles';

export default function Header({navigation, children, feed}) {
  const {colors} = useTheme();
  const iconSize = 25;

  return (
    <Container>
      <Icon
        name="menu"
        color={colors.twitter}
        size={iconSize}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {!feed && (
        <Icon
          name="md-settings-outline"
          color={colors.twitter}
          size={iconSize}
        />
      )}
    </Container>
  );
}
