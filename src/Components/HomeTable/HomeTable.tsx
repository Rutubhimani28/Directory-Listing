// required
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// includes
// import { rows } from './rows';

const HomeTable = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table>
        <TableHead>
          <TableRow className="table-color">
            <TableCell>Tracking ID</TableCell>
            <TableCell align="left">product</TableCell>
            <TableCell align="left">customer</TableCell>
            <TableCell align="left">date</TableCell>
            <TableCell align="left">amount</TableCell>
            <TableCell align="left">Payment method</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="table-color"
            >
              <TableCell component="th" scope="row">
                #{row.id}
              </TableCell>
              <TableCell align="left">
                <div className="table-product">
                  <img src={row.img} alt={row.product} />
                  <span>{row.product}</span>
                </div>
              </TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">$ {row.amount}</TableCell>
              <TableCell align="left">{row.method}</TableCell>
              <TableCell align="left">
                <div className="table-status">
                  {row.status === "Approved" ? (
                    <div className="table-status-approved">{row.status}</div>
                  ) : (
                    <div className="table-status-pending">{row.status}</div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HomeTable;
