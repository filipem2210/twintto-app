import React, {useState, useReducer, useEffect, useMemo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {AuthContext} from '../contexts/AuthContext';

import AuthRoutes from './auth';
import AppRoutes from './app';

import SplashScreen from '../components/SplashScreen';

export default function App() {
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // userToken = await AsyncStorage.getItem('@twintto:token');
        userToken = 'token';
        // api.defaults.headers.common.authorization = `Bearer ${userToken}`;
      } catch (e) {
        setError(e);
      }

      //VALIDAR TOKEN => /me API
      // After restoring token, we may need to validate it in production apps

      setTimeout(() => {
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      }, 2000);
    };

    bootstrapAsync();
  }, [error]);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: '@twintto:token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: '@twintto:token'});
      },
    }),
    [],
  );

  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={authContext}>
      {state.isLoading ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : state.userToken == null ? (
        <AuthRoutes />
      ) : (
        <AppRoutes />
      )}
    </AuthContext.Provider>
  );
}
