import React, { useState } from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  Tab,
  Typography,
  Button,
  ListItem,
  List,
  Modal,
  AppBar,
  Drawer,
  Box,
  Divider,
  IconButton,
  CssBaseline,
  Toolbar,
  Grid,
} from "@mui/material";

function DrawerAppBar(props: any) {
  const { window } = props;
  const navigate = useNavigate();
  const handleLoginOpen = () => {
    navigate("/login");
  };

  const handleAddlisting = () => {
    navigate("/add-listing");
  };

  function CustomTabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "#fff", color: "#3e98c7" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="loginOpen drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <img src={require("../../../src/images/logo.png")} width={50} />
          </IconButton>
          <Typography
            variant="h4"
            className="slider-content-part1"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Prolink
          </Typography>
          <Box>
            <Button
              sx={{ color: "#3e98c7", marginRight: "10px", fontWeight: "600" }}
              onClick={handleLoginOpen}
            >
              <PersonOutlineOutlinedIcon />
              Signin
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#3e98c7", fontWeight: "700", padding: "5px 5px 5px 0px" }}
              onClick={handleAddlisting}
            >
              <AddOutlinedIcon />
              Add Listing
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
      <Box style={{ width: "100%" }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
