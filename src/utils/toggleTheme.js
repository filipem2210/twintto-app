import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

// import usePersistedState from './usePersistedState';

import light from '../styles/light';
import dark from '../styles/dark';

import {ThemeContext} from '../contexts/ThemeContext';

export default function ToggleTheme({children}) {
  // const [theme, setTheme] = usePersistedState('@twintto:theme', light);
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{toggleTheme}}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={theme.title === 'light' ? 'light-content' : 'dark-content'}
        />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
