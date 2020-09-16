import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeTabs from './bottomTabs';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator initialRouteName="Home" drawerStyle={{width: '90%'}}>
      <AppDrawer.Screen name="Home" component={HomeTabs} />
    </AppDrawer.Navigator>
  );
}
