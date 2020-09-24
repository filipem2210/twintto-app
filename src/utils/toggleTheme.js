import React, {useState, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import DarkTheme from '../styles/dark';
import LightTheme from '../styles/light';

import {ThemeContext} from '../contexts/ThemeContext';

export default function ToggleTheme({children}) {
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
    <ThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={isDarkTheme ? 'dark-content' : 'light-content'} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
