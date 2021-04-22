/* eslint-disable default-case */
const loggedReducer = (state = false, action) => {
  console.log("Check Action Type", action);

  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return state;
  }
};

export default loggedReducer;
