import Nav from "./components/navbar/Nav.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "./components/form/Form";
import NotFound from "./pages/not-found/NotFound";
import Main from "./pages/main";
import SignUp from "./pages/signUp/SignUp";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route path="/login" component={Form} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/" exact component={Main} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
