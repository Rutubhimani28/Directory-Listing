import React from "react";
import { useAuth } from "../hooks/auth";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { Routings } from "./route";
import { useNavigate, Navigate } from "react-router-dom";

const Routing = () => {
  const [auth, setAuth] = useAuth();
  useNavigate();
  console.log("authauthauth", Routings);
  return (
    <div className="allRoutes container">
      <Routes>
        {Routings.map((RouteDetails: any,index:any) => (
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
