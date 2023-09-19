import { AppBar, IconButton, Switch,Toolbar, Typography }
 from "@mui/material";
import { useState } from "react";
import { createTheme,ThemeProvider, Container } from '@mui/material';
import { extendTheme } from '@mui/material';

import App from "./App";
import { theme } from './theme';

function Modes() {
  const [mode ,setMode]=useState(true)
  const updatedTheme = extendTheme(theme, {
    palette: {
      mode,
    },
  });
  return (
    <div>
<ThemeProvider theme={updatedTheme}>
      <AppBar>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
          <Switch defaultChecked color="default" sx={{
            position:'absolute',
            right:"10px"

          }} onChange={()=>{
            setMode(mode?false:true)
          }}  />
        </Toolbar>
      </AppBar>
{/*  */}
      </ThemeProvider>
    </div>
  );
}

export default Modes;
