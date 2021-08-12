import Nav from "./conponents/navbar/Nav.js";
import { Switch, Route } from "react-router-dom";
import HomePage from "./conponents/path/home.js";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
