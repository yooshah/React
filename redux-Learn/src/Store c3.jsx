import { applyMiddleware, createStore } from "redux";
import loggerMiddleWare from "./Middleware/loggerMiddleWare";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "counter/decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer, applyMiddleware(loggerMiddleWare));

export default store;
