// required
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
import { useNavigate } from "react-router-dom";

const SliderPart2 = () => {
  const navigate = useNavigate();
  return (
    <div className="slider-content-part2 container">
      <ul>
        <li onClick={() => navigate("/")}>
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
        <li onClick={() => navigate("users")}>
          <MicIcon className="slider-icon" />
          <span>Annousments</span>
        </li>
        <li onClick={() => navigate("event")}>
          <CalendarMonthIcon className="slider-icon" />
          <span>Events</span>
        </li>
        <li onClick={() => navigate("products")}>
          <InsertChartOutlinedIcon className="slider-icon" />
          <span>Coupons</span>
        </li>
        <li>
          <CreditCardIcon className="slider-icon" />
          <span>Menus</span>
        </li>

        <li>
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
        </li>
        <li>
          <StarIcon className="slider-icon" />
          <span>Reviews</span>
        </li>
      </ul>
    </div>
  );
};

export default SliderPart2;
