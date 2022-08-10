// MUI imports
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

// Routing imports
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <AppBar className="header">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={8} md={10} className="logo_wrapper">
            <NavLink className="logo" exact to="/">
              TableTop Tech
            </NavLink>
          </Grid>
          <Grid item xs={2} md={1}>
            <NavLink className="tabs" exact to="/">
              Home
            </NavLink>
          </Grid>
          <Grid item xs={2} md={1}>
            <NavLink className="tabs" exact to="/add">
              Add
            </NavLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
