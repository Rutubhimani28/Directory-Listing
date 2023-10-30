// required
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
// pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Booking from "./Pages/booking/booking";
import MyListing from "./Pages/myListing/myListing";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
// components
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer/footer";
import { productInputs, userInputs } from "./DataFormNew";
import Event from "./Pages/Event/event";
// import { DarkContext } from "./Context/DarkContext";

const App = () => {
  // const { isDark, setIsDark } = useContext(DarkContext);

  return (
    <div>
      <div className="App">
        <div className="App-part1">
          <Sidebar
          // setIsDark={setIsDark}
          />
        </div>

        <div className="App-part2">
          <Navbar
          // setIsDark={setIsDark} isDark={isDark}
          />
          <div className="allRoutes container">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="booking" element={<Booking />} />
                <Route path="my-listing" element={<MyListing />} />
                  <Route path="event" element={<Event/>} />
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
