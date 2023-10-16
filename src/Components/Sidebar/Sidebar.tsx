// required
import { useNavigate } from "react-router-dom";
// components
import SliderPart2 from "./SliderPart2";
// import logo from "../../images/logo.png";


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="slider-content">
        <div className="slider-content-part1" onClick={() => navigate("/")}>
          {/* <img src={logo} width={100} /> */}
          Prolink
        </div>

        <SliderPart2 />
      </div>
    </div>
  );
};

export default Sidebar;
