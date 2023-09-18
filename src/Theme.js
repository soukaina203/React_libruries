import { createTheme } from '@mui/material'

export const theme = createTheme({
    breakpoints: {
      values: {
        m: 0,
        t: 640,
        l: 1024,
        d: 1200,
      },
    },
    palette:{
        primary:{
            light:'#e3f2fd',
            main:'#90caf9',
            dark:'#42a5f5'
        }
    }
  });