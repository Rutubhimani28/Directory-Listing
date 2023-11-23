import React from "react";
import { useAuth } from "../hooks/auth";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { Routings } from "./route";

const Routing = () => {
  const [auth, setAuth] = useAuth();

  console.log("authauthauth", Routings);
  return (
    <div className="allRoutes container">
      <Routes>
        {Routings.map((RouteDetails: any) => (
          <Route
            path={RouteDetails.path}
            element={<PrivateRoute>{RouteDetails.component}</PrivateRoute>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Routing;
