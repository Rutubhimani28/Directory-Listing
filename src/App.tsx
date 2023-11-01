// required
import { Routes, Route } from "react-router-dom";

// pages
import Login from "./Pages/Login/Login";
import Booking from "./Pages/booking/booking";
import BookingId from "./Pages/booking/bookingId";
import MyListing from "./Pages/myListing/myListing";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
// components
import Sidebar from "../src/Components/Sidebar/Sidebar";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/footer/footer";
import { productInputs, userInputs } from "./DataFormNew";

import Event from "./Pages/Event/event";
import Dashboard from "../src/Pages/dashboard/index";
import MyProfile from "./Pages/myProfile";
import SingleListing from "./Pages/myListing/singleListing";

const App = () => {
  return (
    <div>
      <div className="App">
        <div className="App-part1">
          <Sidebar />
        </div>

        <div className="App-part2">
          <Navbar />
          <div className="allRoutes container">
            <Routes>
              <Route path="/">
                <Route index element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="booking">
                  <Route index element={<Booking />} />
                  <Route path=":bookingId" element={<BookingId />} />
                  <Route
                    path="new"
                    element={
                      <New routeName={"Product"} formElements={productInputs} />
                    }
                  />
                </Route>
                <Route path="my-listing">
                  <Route index element={<MyListing />} />
                  <Route path=":singleListing" element={<SingleListing />} />
                  <Route
                    path="new"
                    element={
                      <New routeName={"Product"} formElements={productInputs} />
                    }
                  />
                </Route>
                {/* <Route path="my-listing" element={<MyListing />} /> */}
                <Route path="event" element={<Event />} />
                <Route path="my-profile" element={<MyProfile />} />
                {/* <Route path="singleListing" element={<SingleListing />} /> */}
                <Route path="users">
                  <Route index element={<List />} />
                  <Route path=":userId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New routeName={"User"} formElements={userInputs} />
                    }
                  />
                </Route>
                <Route path="products">
                  <Route index element={<List />} />
                  <Route path=":productId" element={<Single />} />
                  <Route
                    path="new"
                    element={
                      <New routeName={"Product"} formElements={productInputs} />
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
