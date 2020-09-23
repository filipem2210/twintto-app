import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ThemeContextProvider from './utils/toggleTheme';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Routes />
      </ThemeContextProvider>
    </NavigationContainer>
  );
}
