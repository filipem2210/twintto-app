import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/Auth/Landing';
import SignUpScreen from '../screens/Auth/SignUp';
import SignInScreen from '../screens/Auth/SignIn';

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
