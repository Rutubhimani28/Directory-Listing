import React from "react";
import "../Home/home.css";
import Banner from "./banner";
import About from "./about";
import Footer from "../footer";
import Review from "./review";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
