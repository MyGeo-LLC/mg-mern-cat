import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

const themes = {
  darkTheme: createTheme({
    palette: {
      mode: 'dark',
    },
  }),
  lightTheme: createTheme({
    palette: {
      mode: 'light',
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
