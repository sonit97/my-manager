import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>Material UI</Toolbar>
      </AppBar>
      <TextField placeholder="Placeholder" label="TextBox" />
      <Checkbox
        value="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}

export default Navbar;
