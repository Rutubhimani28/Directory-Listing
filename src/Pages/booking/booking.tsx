// required
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import PaymentIcon from "@mui/icons-material/Payment";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./booking.css";
import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      status: "Approved",
      customer: {
        name: "James Anderson",
        mobile: "+214 4455 6521",
        email: "hello@james.com",
      },
      details: {
        title: "Farmis Hotel & Restaurant",
        address: "Address: 40 Journal Square, NG USA",
        date: "Date: 20/05/2023",
        price: "Price: $1500",
        persons: "Persons: 4 Peoples",
        payments: "Payment: Paid",
      },
    },

    {
      id: 2,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/user1.jpg",
      status: "Pending",
      customer: {
        name: "Steven Smith",
        mobile: "+214 4455 6521",
        email: "hello@Steven.com",
      },
      details: {
        title: "The Magician Restaurant",
        address: "Address: 40 Journal Square, NG USA",
        date: "Date: 20/05/2023",
        price: "Price: $1500",
        persons: "Persons: 4 Peoples",
        payments: "Payment: Paid",
      },
    },
    {
      id: 3,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/user2.jpg",
      status: "Approved",
      customer: {
        name: "James Anderson",
        mobile: "+214 4455 6521",
        email: "hello@james.com",
      },
      details: {
        title: "Gym Training Center",
        address: "Address: 40 Journal Square, NG USA",
        date: "Date: 20/05/2023",
        price: "Price: $1500",
        persons: "Persons: 4 Peoples",
        payments: "Payment: Paid",
      },
    },
    {
      id: 4,
      img: "https://angular.envytheme.com/vesax-ng/assets/img/user3.jpg",
      status: "Canceled",
      customer: {
        name: "Alina Smith",
        mobile: "+214 4455 6521",
        email: "hello@Alina.com",
      },
      details: {
        title: "Farmis Hotel & Restaurant",
        address: "Address: 40 Journal Square, NG USA",
        date: "Date: 20/05/2023",
        price: "Price: $1500",
        persons: "Persons: 4 Peoples",
        payments: "Payment: Paid",
      },
    },
  ];
  return (
    <>
      <h3 className="heading">Booking</h3>

      {rows.map((row: any, i: any) => (
        <Card
          className="table-card"
          key={i}
          onClick={() => navigate(`/booking/${row.id}`)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={6}>
              <div className="table-product">
                <div className="d-flex align-items-center">
                  <div>
                    <img src={row.img} alt={row.customer.name} />
                  </div>
                  <div className="booking-user-details ">
                    <h3 className="booking-user-name"> {row.customer.name}</h3>
                    <a href={`tel:${row.customer.mobile}`}>
                      {row.customer.mobile}
                    </a>
                    <div>
                      {" "}
                      <a
                        style={{ textTransform: "lowercase" }}
                        href={`mailto:${row.customer.email}`}
                      >
                        {row.customer.email}
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  style={{ textTransform: "lowercase" }}
                  href={`mailto:${row.customer.email}`}
                >
                  <button className="sendBtn">
                    <MailIcon style={{ paddingRight: "5px" }} /> Send Mail
                  </button>
                </a>
              </div>
            </Grid>
            <Grid item xs={12} lg={5} md={6}>
              <div className="d-flex ">
                <h3 className="booking-user-name">{row.details.title}</h3>
                <div>
                  {row.status === "Approved" ? (
                    <div className="booking-status booking-approved">
                      {row.status}
                    </div>
                  ) : row.status === "Pending" ? (
                    <div className="booking-status booking-pending">
                      {row.status}
                    </div>
                  ) : (
                    <div className="booking-status booking-Canceled">
                      {row.status}
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex align-items-center booking-detailbox">
                <RoomIcon className="bookingicon" />
                {row.details.address}
              </div>
              <div className="booking-detailbox">
                <CalendarMonthIcon className="bookingicon" />
                {row.details.date}
              </div>
              <div className="booking-detailbox">
                <SellIcon className="bookingicon" />
                {row.details.price}
              </div>
              <div className="booking-detailbox">
                <GroupIcon className="bookingicon" />
                {row.details.persons}
              </div>
              <div className="booking-detailbox">
                <PaymentIcon className="bookingicon" />
                {row.details.payments}
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={6}>
              <div className="table-status d-flex  align-items-center">
                <button className="approve-btn">
                  <CheckCircleOutlineIcon />
                  Approve
                </button>
                <button className="reject-btn">
                  <HighlightOffIcon />
                  Reject
                </button>
              </div>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Booking;
