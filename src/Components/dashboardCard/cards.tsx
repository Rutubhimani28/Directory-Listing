// required
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
// types
import { cardData } from "./card";

const Cards = () => {
  // const cardData = [
  //   {
  //     title: "Visits",
  //     p2: {
  //       icon: "up",
  //       span: "+5 %",
  //     },
  //     number: "24,103",
  //     p1: "see all users",
  //     // p2: {
  //     //   class: "wedjet-users",
  //     //   icon: "person",
  //     // },
  //   },
  //   {
  //     title: "Growth",
  //     p2: {
  //       icon: "down",
  //       span: "+2 %",
  //     },
  //     number: "+15%",
  //     p1: "view all orders",
  //     // p2: {
  //     //   class: "wedjet-orders",
  //     //   icon: "cart",
  //     // },
  //   },
  //   {
  //     title: "Bookings",
  //     p2: {
  //       icon: "up",
  //       span: "+12 %",
  //     },
  //     number: "1,443",
  //     p1: "view all earnings",
  //     // p2: {
  //     //   class: "wedjet-earnings",
  //     //   icon: "dollar",
  //     // },
  //   },
  // ];

  return (
    <div className="wedgets">
      {cardData.map((data: any, index: any) => (
        <div className="widget-single" key={index}>
          <div className="wedget-single-line1">
            <p>{data.title}</p>
            <p className="daybox">
              <span>{data.days} </span>
            </p>
          </div>
          <div className="wedget-single-line2">
            <h3>{data.number}</h3>
          </div>
          <div className="wedget-single-line3">
            <p>{data.compare}</p>
            <p
              style={{ display: "flex" }}
              className={data.p2.icon === "up" ? "up" : "down"}
            >
              {data.p2.icon === "up" ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
              <span>{data.p2.span} </span>
            </p>

            {/* <p className={data.line3.p2.class}>
              {data.line3.p2.icon === "person" && <PersonOutlineOutlinedIcon />}
              {data.line3.p2.icon === "cart" && <ShoppingCartOutlinedIcon />}
              {data.line3.p2.icon === "dollar" && (
                <MonetizationOnOutlinedIcon />
              )}
              {data.line3.p2.icon === "details" && (
                <AccountBalanceWalletOutlinedIcon />
              )}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;