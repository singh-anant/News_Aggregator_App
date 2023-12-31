import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="error" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            sx={{ flexGrow: 1 }}
          >
            Welcome to Hacker News 📄📄
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
