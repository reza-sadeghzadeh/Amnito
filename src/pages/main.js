import React from "react";
// import moduleName from "../components";
import HomePage from "../components/path/home.js";
import Item from "../components/items/Item";
import TwoSide from "../components/twoSide/TwoSide";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";
const Main = () => {
  return (
    <div>
      <HomePage />
      <TwoSide />
      <Item />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Main;
