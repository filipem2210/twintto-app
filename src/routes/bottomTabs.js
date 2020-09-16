import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../screens/Feed';
import SearchScreen from '../screens/Search';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#33a1f2',
        inactiveTintColor: '#8899a6',
        showLabel: false,
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
        component={SearchScreen}
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
        component={SearchScreen}
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
