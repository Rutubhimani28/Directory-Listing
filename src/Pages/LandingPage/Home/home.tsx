import React from "react";
import "../Home/home.css";
import Banner from "./banner";
import About from "./about";
import Footer from "../footer";
import Review from "./review";
import Counter from "./counter";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Counter />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
