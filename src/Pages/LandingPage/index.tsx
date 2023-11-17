import React from "react";
import Header from "./header";
import { useAuth } from "../../hooks/auth";

const LandingPage = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth, "PPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
  return (
    <div>
      <Header />
    </div>
  );
};

export default LandingPage;
