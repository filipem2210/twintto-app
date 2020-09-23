import React from 'react';
import {DrawerActions} from '@react-navigation/native';

import {
  Container,
  MenuButton,
  MenuIcon,
  ChildrenWrapper,
  SettingsButton,
  SettingsIcon,
} from './styles';

export default function Header({navigation, children, feed}) {
  return (
    <Container>
      <MenuButton>
        <MenuIcon
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </MenuButton>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {!feed && (
        <SettingsButton>
          <SettingsIcon />
        </SettingsButton>
      )}
    </Container>
  );
}
