import { createTheme } from '@mui/material/styles';

// Define themes
const themes = {
  darkTheme1: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#e50914', // Netflix Red
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#141414',
        paper: '#141414',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
  darkTheme2: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1e1e1e', // Tesla Dark
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#1e1e1e',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
  darkTheme3: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#b81d24', // A different red
      },
      secondary: {
        main: '#ffffff',
      },
      background: {
        default: '#181818',
        paper: '#181818',
      },
      text: {
        primary: '#ffffff',
      },
    },
  }),
  lightTheme1: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffffff', // White
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  }),
  lightTheme2: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#e0e0e0', // Light Gray
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  }),
  lightTheme3: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#cccccc', // Gray
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  }),
};

export default themes;
