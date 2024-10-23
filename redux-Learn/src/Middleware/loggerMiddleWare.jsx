function loggerMiddleWare({ dispatch, getState }) {
  return (next) => {
    return (action) => {
      console.log("Pre State", getState());
      console.log("aaction", action);
      next(action);
      console.log("Next state", getState());
    };
  };
}

export default loggerMiddleWare;
