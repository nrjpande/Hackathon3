import React from "react";
import "../CSS/header.css";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <Menu />
        </IconButton>
        ;
        <div className="navbar-brand">
          <div className="logo">Movie DB</div>
        </div>
        <div className="nav-links">
          <a href="/" className="nav-link" >
            New Releases
          </a>
          <a href="/popular" className="nav-link">
            What's Hot
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
