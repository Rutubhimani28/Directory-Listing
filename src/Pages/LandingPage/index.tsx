import React from "react";
import Header from "./header";
import { useAuth } from "../../hooks/auth";
import Home from "./Home/home";

const LandingPage = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth, "PPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Home />
    </div>
  );
};

export default LandingPage;
