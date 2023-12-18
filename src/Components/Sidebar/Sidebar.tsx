import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MicIcon from "@mui/icons-material/Mic";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

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

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLogoutScheduled, setIsLogoutScheduled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  const handleLogout = (message: any) => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    if (message) {
      toast.error(message);
    } else {
      toast.success("Log out Successfully");
    }
    setIsLogoutScheduled(true);
  };
  const storedUser = localStorage.getItem("user");
  const token: string | null = storedUser ? JSON.parse(storedUser).token : null;
  useEffect(() => {
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        if (decodedToken.exp < currentTime) {
          if (!isLogoutScheduled) {
            handleLogout("Token has expired");
          }
        } else {
          // Schedule automatic logout when the token expires
          const timeToExpire = (decodedToken.exp - currentTime) * 1000; // Convert seconds to milliseconds
          setTimeout(() => {
            if (!isLogoutScheduled) {
              handleLogout("Token has expired");
            }
          }, timeToExpire);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [isLogoutScheduled]);
  return (
    <div className="sidebar">
      <div className="slider-content">
        <div className="slider-content-part1" onClick={() => navigate("/")}>
          {/* <img src={require("../../images/logo.png")} width={100} /> */}
          Prolink
        </div>
        <div className="slider-content-part2 container">
          <ul>
            <li onClick={() => navigate("/dashboard")}>
              <DashboardIcon className="slider-icon" />
              <span>Dashboard</span>
            </li>
            <li onClick={() => navigate("booking")}>
              <CalendarTodayIcon className="slider-icon" />
              <span>Booking</span>
            </li>
            <li onClick={() => navigate("my-listing")}>
              <PlaceIcon className="slider-icon" />
              <span>listing</span>
            </li>
            {/* <li onClick={() => navigate("users")}>
              <MicIcon className="slider-icon" />
              <span>Annousments</span>
            </li> */}
            <li onClick={() => navigate("event")}>
              <CalendarMonthIcon className="slider-icon" />
              <span>Events</span>
            </li>
            <li onClick={() => navigate("my-profile")}>
              <AccountCircle className="slider-icon" />
              <span>My Profile</span>
            </li>
            <li onClick={() => navigate("my-favorite")}>
              <FavoriteBorderIcon className="slider-icon" />
              <span>My Favorite</span>
            </li>
            {/* <li onClick={handleLogout}> */}
            <li onClick={handleModalOpen}>
              <LogoutIcon className="slider-icon" />
              <span>Logout</span>
            </li>
            {/* <li onClick={() => navigate("products")}>
              <InsertChartOutlinedIcon className="slider-icon" />
              <span>Coupons</span>
            </li> */}
            {/* <li>
              <CreditCardIcon className="slider-icon" />
              <span>Menus</span>
            </li> */}
            {/* <li>
              <EmailIcon className="slider-icon" />
              <span>Inbox</span>
            </li>
            <li>
              <SettingsIcon className="slider-icon" />
              <span>Invoice</span>
            </li>
            <li>
              <FavoriteIcon className="slider-icon" />
              <span>Saved</span>
            </li>
            <li>
              <MailOutlineIcon className="slider-icon" />
              <span>Ad Campaigns</span>
            </li> */}
            {/* <li>
              <StarIcon className="slider-icon" />
              <span>Reviews</span>
            </li> */}
          </ul>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid
              display="flex"
              justifyContent="space-between"
              margin="0 0 20px 0"
              padding="0 0 10px 0"
              sx={{ borderBottom: "1px solid grey" }}
            >
              <Typography id="modal-modal-title" variant="h6">
                Logout
              </Typography>
              <CloseIcon onClick={handleModalClose} />
            </Grid>
            <Typography id="modal-modal-title" variant="subtitle1">
              Are you Sure Want to logout?
            </Typography>
            <Grid
              display="flex"
              justifyContent="space-between"
              padding="35px 0 0 0 "
            >
              <Button
                size="small"
                className="save-btn"
                variant="contained"
                type="submit"
                onClick={handleModalClose}
              >
                Cancel
              </Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                type="submit"
                onClick={handleLogout}
              >
                Confirm
              </Button>
            </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Sidebar;
