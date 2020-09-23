import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabNavigator = styled(Tab.Navigator).attrs((props) => ({
  tabBarOptions: {
    showLabel: false,
    keyboardHidesTabBar: true,
    activeTintColor: props.theme.colors.twitter,
    inactiveTintColor: props.theme.colors.inactiveTintColor,
    style: {
      backgroundColor: props.theme.colors.background,
    },
  },
}))`
  background-color: ${(props) => props.theme.colors.twitter};
`;
