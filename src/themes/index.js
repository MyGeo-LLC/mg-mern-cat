import { createTheme } from '@mui/material/styles';

const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e82127', // Example primary color
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const lightTheme1 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e1e1e', // Example primary color
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Light background
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme2 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6200ea', // Purple
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const lightTheme2 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#03a9f4', // Light blue
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Light background
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const darkTheme3 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50', // Green
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const lightTheme3 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f44336', // Red
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Light background
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const themes = {
  darkTheme1,
  lightTheme1,
  darkTheme2,
  lightTheme2,
  darkTheme3,
  lightTheme3,
};

export default themes;
