import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          News
        </Typography>
        <Button color="inherit" sx={{ flexGrow: 1 }} style={{display:"flex",justifyContent:'end'}}>Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default Navbar;
