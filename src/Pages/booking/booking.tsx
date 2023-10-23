// required
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import PaymentIcon from "@mui/icons-material/Payment";
import GroupIcon from "@mui/icons-material/Group";
import SellIcon from "@mui/icons-material/Sell";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./booking.css";

const booking = () => {
  const rows = [
    {
      id: 1143155,
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
      id: 1143155,
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
      id: 1143155,
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
      id: 1143155,
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
    <div>
      {" "}
      <TableContainer component={Paper} className="table">
        <Table>
          <TableHead>
            <TableRow className="tabletitle">
              <h3>Booking Requests</h3>
            </TableRow>
            <TableRow className="table-color">
              <TableCell align="left">
                <h3 className="fw-semibold">Customer</h3>
              </TableCell>
              <TableCell align="left">
                <h3 className="fw-semibold">Details</h3>
              </TableCell>
              <TableCell align="left">
                <h3 className="fw-semibold">Action</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className="table-color"
              >
                <TableCell align="left">
                  <div className="table-product">
                    <div className="d-flex align-items-center">
                      <div>
                        <img src={row.img} alt={row.customer.name} />
                      </div>
                      <div className="booking-user-details ">
                        <h3 className="booking-user-name">
                          {" "}
                          {row.customer.name}
                        </h3>
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
                </TableCell>
                <TableCell align="left">
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
                  <div className="d-flex align-items-center">
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
                </TableCell>
                <TableCell align="left">
                  <div className="table-status d-flex  align-items-center">
                    <button className=" approve-btn">
                      <CheckCircleOutlineIcon />
                      Approve
                    </button>
                    <button className=" reject-btn">
                      <HighlightOffIcon />
                      Reject
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default booking;
