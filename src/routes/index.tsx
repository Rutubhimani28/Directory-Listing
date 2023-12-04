import React from "react";
import { useAuth } from "../hooks/auth";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { Routings } from "./route";
import { useNavigate, Navigate } from "react-router-dom";
import AddListing from "../Pages/LandingPage/addListing/AddListing";
import Login from "../Pages/auth/Login/Login";

const Routing = () => {
  const user = localStorage.getItem("user");
  const [auth, setAuth] = useAuth();
  useNavigate();
  return (
    <div className="allRoutes container">
      <Routes>
        {Routings.map((RouteDetails: any, index: any) => (
          <Route
            key={index}
            path={RouteDetails.path}
            element={<PrivateRoute>{RouteDetails.component}</PrivateRoute>}
          />
        ))}
        <Route path="/*" element={<Navigate to="/dashboard" />} />
      
      </Routes>
    </div>
  );
};

export default Routing;
