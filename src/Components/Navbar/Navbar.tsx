// required
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// components
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    setAnchorEl(null);
  };
  const handleProfileRedirect = () => {
    navigate("my-profile");
    setAnchorEl(null);
  };
  return (
    <div className="navbar">
      <div className="container navbar-content">
        <div className="navbar-part1">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="navbar-part1-searchIcon" />
        </div>
        <div className="sadekk">
          <CustomDrawer />
        </div>
        <div className="navbar-part2">
          <IconButton onClick={handleMenu}>
            {" "}
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleProfileRedirect}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
          {/* <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
          /> */}

          {/* <SettingsOutlinedIcon className="navbar-icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
