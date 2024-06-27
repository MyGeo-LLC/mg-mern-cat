import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#0056b3',
    },
    background: {
      default: '#1e1e1e',
      paper: '#333',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
    error: {
      main: '#ff4d4d',
    },
    success: {
      main: '#28a745',
    },
    warning: {
      main: '#ffc107',
    },
    info: {
      main: '#17a2b8',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { color: '#fff' },
    h2: { color: '#fff' },
    h3: { color: '#fff' },
    h4: { color: '#fff' },
    h5: { color: '#fff' },
    h6: { color: '#fff' },
  },
});

export default theme;
