import { createTheme } from '@material-ui/core/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      lineHeight: 1.6,
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#e82127',
        '&:hover': {
          backgroundColor: '#c51e22',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1e1e1e',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    body1: {
      lineHeight: 1.6,
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#e82127',
        '&:hover': {
          backgroundColor: '#c51e22',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
