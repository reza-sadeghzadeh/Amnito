import Nav from "./components/navbar/Nav.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "./components/form/Form";
import NotFound from "./pages/not-found/NotFound";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/login" component={Form} />
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/" exact component={Main} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
