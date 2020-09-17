import React, {useState, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {DarkTheme} from './styles/dark';
import {LightTheme} from './styles/light';

import {ThemeContext} from './contexts/ThemeContext';

import Routes from './routes';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? DarkTheme : LightTheme;

  const themeContext = useMemo(
    () => ({
      toggleTheme: () => {
        setIsDarkTheme((prevValue) => !prevValue);
      },
    }),
    [],
  );

  return (
    <NavigationContainer theme={theme}>
      <ThemeContext.Provider value={themeContext}>
        <StatusBar barStyle={isDarkTheme ? 'dark-content' : 'light-content'} />
        <Routes />
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
