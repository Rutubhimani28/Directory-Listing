import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = (props: any) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userTokenString = localStorage.getItem("user");

    if (userTokenString !== null) {
      const userToken = JSON.parse(userTokenString);
      console.log("userToken -------------------------- ", userToken.role);
      if (
        !userToken.role ||
        userToken.role === "undefined" ||
        userToken.role === null
      ) {
        setIsLoggedIn(false);
        return navigate("/");
      } else {
        setIsLoggedIn(true);
        return navigate("/dashboard");
      }
    } else {
      console.log("No userToken found in localStorage");
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>{isLoggedIn ? <>{props.children}</> : null}</React.Fragment>
  );
};

export default PrivateRoute;
