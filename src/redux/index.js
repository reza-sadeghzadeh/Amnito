const InView = (state = false, action) => {
  if (action.type === "IN_VIEW") {
    return !state;
  }
  return state;
};

export default InView;
