import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logo-header.png";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        padding: "20px",
      }}
    >
      <Toolbar>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "200px", height: "auto", marginRight: "20px" }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
