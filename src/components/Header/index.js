import React from 'react';
import {useTheme, DrawerActions} from '@react-navigation/native';

import {
  Container,
  MenuButton,
  MenuIcon,
  ChildrenWrapper,
  SettingsButton,
  SettingsIcon,
} from './styles';

export default function Header({navigation, children, feed}) {
  const {colors} = useTheme();

  return (
    <Container>
      <MenuButton>
        <MenuIcon
          color={colors.twitter}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </MenuButton>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {!feed && (
        <SettingsButton>
          <SettingsIcon color={colors.twitter} />
        </SettingsButton>
      )}
    </Container>
  );
}
