import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/Landing';
import SignUpScreen from '../screens/SignUp';
import SignInScreen from '../screens/SignIn';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
