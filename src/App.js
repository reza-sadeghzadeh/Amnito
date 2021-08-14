import Nav from "./conponents/navbar/Nav.js";
import { Switch, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import HomePage from "./conponents/path/home.js";
import Item from "./conponents/items/Item";
import TwoSide from "./conponents/twoSide/TwoSide";
import Testimonial from "./conponents/Testimonial/Testimonial";
import Scrollbar from "smooth-scrollbar";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="" component={HomePage} />
      </Switch>
      <TwoSide />
      <Item />
      <Testimonial />
    </>
  );
}

export default App;
