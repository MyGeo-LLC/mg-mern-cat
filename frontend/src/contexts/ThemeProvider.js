// frontend/src/contexts/ThemeProvider.js

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
        secondary: '#b0bec5',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          },
        },
      },
    },
  }),
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={themes[theme]}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
