import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const getTheme = async (key, initialState) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return initialState;
  }
};

const setTheme = async (item, value, initialState) => {
  try {
    await AsyncStorage.setItem(item, JSON.stringify(value));
  } catch (error) {
    return initialState;
  }
};

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(getTheme(key, initialState));

  useEffect(() => {
    setTheme(key, state, initialState);
  }, [key, state, initialState]);

  return [state, setState];
}
