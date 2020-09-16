import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Fontisto';

import FeedScreen from '../pages/Feed';
import SearchScreen from '../pages/Search';

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
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="bell" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="email" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
