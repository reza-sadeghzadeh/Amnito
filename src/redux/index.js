import { combineReducers } from "redux";

const InView = (state = false, action) => {
  if (action.type === "IN_VIEW") {
    return !state;
  }
  return state;
};

const NavBtn = (state = "ورود", action) => {
  switch (action.type) {
    case "IN_LOGIN":
      return (state = "خانه");

    case "IN_HOME":
      return (state = "ورود");

    default:
      return state;
  }
};

export default combineReducers({
  NavBtn,
  InView,
});
