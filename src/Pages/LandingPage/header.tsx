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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "../auth/Login";
import Register from "../auth/register/RegisterForm";
import Home from "./Home/home";
const drawerWidth = 240;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

function DrawerAppBar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => {
    navigate("/login");
    // setLoginOpen(true);
  };
  const handleLoginClose = () => setLoginOpen(false);
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
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

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={require("../../../src/images/logo.png")} width={80} />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}></ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: "#fff", color: "#3e98c7" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="loginOpen drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            className="slider-content-part1"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Prolink
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#3e98c7", marginRight: "10px", fontWeight: "600" }}
              onClick={handleLoginOpen}
            >
              <PersonOutlineOutlinedIcon />
              Signin
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#3e98c7", fontWeight: "700" }}
              onClick={handleAddlisting}
            >
              <AddOutlinedIcon />
              Add Listing
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
