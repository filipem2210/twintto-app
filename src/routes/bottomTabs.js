import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../screens/App/Feed';
import SearchScreen from '../screens/App/Search';
import NotificationsScreen from '../screens/App/Notifications';
import MessagesScreen from '../screens/App/Messages';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: colors.twitter,
        inactiveTintColor: colors.inactiveTintColor,
        showLabel: false,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              color={color}
              size={size}
              name={focused ? 'md-home-sharp' : 'md-home-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              color={color}
              size={size}
              name={focused ? 'md-search-sharp' : 'md-search-outline'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              color={color}
              size={size}
              name={
                focused ? 'md-notifications-sharp' : 'md-notifications-outline'
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              color={color}
              size={size}
              name={focused ? 'md-mail-sharp' : 'md-mail-outline'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
