// import React from "react";

// const authContext = React.createContext<any>(null);

// export default authContext;

import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext<any>(null);
const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    role: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  console.log("auth666666666666666666666", auth);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      // Retrieve JSON data from Local Storage
      const jsonDataString = localStorage.getItem("user");

      // Parse the JSON string into an object
      if (jsonDataString) {
        const jsonData = JSON.parse(jsonDataString);
        setAuth({
          ...auth,
          user: jsonData?.user,
          role: jsonData?.role,
        });
      } else {
        console.log("No JSON data found in Local Storage.");
      }
    } else {
      console.log("Local Storage is not supported in this browser.");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={[auth, setAuth, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
