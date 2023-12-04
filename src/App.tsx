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
import AddListing from "./Pages/LandingPage/addListing/AddListing";
import Login from "./Pages/auth/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const user = localStorage.getItem("user");

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

                <Footer />
              </div>
            </>
          ) : (
            <>
              <ToastContainer />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route
                  path="/add-listing"
                  element={<AddListing /> }
                /> */}
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
