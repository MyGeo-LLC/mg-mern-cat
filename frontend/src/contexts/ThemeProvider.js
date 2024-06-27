import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
  darkTheme: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
  lightTheme: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: '#ffffff',
        paper: '#f5f5f5',
      },
      text: {
        primary: '#000000',
      },
    },
  }),
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themes[theme]}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
