// components
import Sidebar from "../src/Components/Sidebar/Sidebar";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/auth/register/RegisterForm";
import ResetpasswordForm from "./Pages/auth/resetpassword/ResetpasswordForm";
import Forgotpassword from "./Pages/auth/forgotpassword/Forgotpassword";
import LandingPage from "./Pages/LandingPage";
import { AuthProvider } from "./context/authcontext";
import Routing from "./routes";
import { useNavigate } from "react-router-dom";
import AddListing from "./Pages/LandingPage/AddListing";
import Login from "./Pages/auth/Login/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const user = localStorage.getItem("user");
  console.log(user, "userId");
  const notify = () => toast("Wow so easy!");
  useNavigate();
  return (
    <>
      <AuthProvider>
        <div className="App">
          {user ? (
            <>
              <ToastContainer />
              <div className="App-part1">
                <Sidebar />
              </div>

              <div className="App-part2">
                <Navbar />
                <Routing />
                {/* <div className="allRoutes container">
                <Routes>
                  <Route path="/">
                    <Route index element={<Dashboard />} />
                    <Route path="booking">
                      <Route index element={<Booking />} />
                      <Route path=":bookingId" element={<BookingId />} />
                      <Route
                        path="new"
                        element={
                          <New
                            routeName={"Product"}
                            formElements={productInputs}
                          />
                        }
                      />
                    </Route>
                    <Route path="my-listing">
                      <Route index element={<MyListing />} />
                      <Route
                        path=":singleListing"
                        element={<SingleListing />}
                      />
                      <Route
                        path="new"
                        element={
                          <New
                            routeName={"Product"}
                            formElements={productInputs}
                          />
                        }
                      />
                    </Route>
                     <Route path="my-listing" element={<MyListing />} />
                    <Route path="event" element={<Event />} />
                    <Route path="my-profile" element={<MyProfile />} />
                    <Route path="my-favorite" element={<Favorite />} />
                     <Route path="singleListing" element={<SingleListing />} /> 
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
                          <New
                            routeName={"Product"}
                            formElements={productInputs}
                          />
                        }
                      />
                    </Route>
                  </Route>
                </Routes>
              </div> */}
                <Footer />
              </div>
            </>
          ) : (
            <>
              {/* <button onClick={notify}>Notify!</button> */}
              <ToastContainer />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/add-listing" element={<AddListing />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="reset-password" element={<ResetpasswordForm />} />
                <Route path="forgot-password" element={<Forgotpassword />} />
                <Route
                  path="reset-password/:token"
                  element={<ResetpasswordForm />}
                />
              </Routes>
            </>
          )}
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
