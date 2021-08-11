import Nav from "./conponents/navbar/Nav.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="" component={Nav} />
      </Switch>
    </>
  );
}

export default App;
