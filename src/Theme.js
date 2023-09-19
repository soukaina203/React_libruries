import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      m: 0,
      t: 640,
      l: 1024,
      d: 1200,
    },
  },
  palette: {
    mode:'light',
    primary: {
      light: '#e3f2fd',
      main: '#90caf9',
      dark: '#42a5f5',
    },
    common: {
      white: '#ffffff',
      customLight: '#E6C3C3',
      customMain: '#D08B8B',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: {
      fontSize: '2rem', // Adjust the size as needed
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem', // Adjust the size as needed
    },
  },
});
