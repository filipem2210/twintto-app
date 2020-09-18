import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerItems from './drawerItems';
import HomeTabs from './bottomTabs';
import ProfileScreen from '../screens/App/Profile';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      initialRouteName="Home"
      drawerStyle={{width: '90%'}}
      drawerContent={(props) => <DrawerItems {...props} />}>
      <AppDrawer.Screen name="Home" component={HomeTabs} />
      <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
}
