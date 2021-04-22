export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const isLoggin = () => {
  return {
    type: "SIGN_IN",
  };
};

export const isLoggedOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
