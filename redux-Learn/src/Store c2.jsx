import { combineReducers, createStore, applyMiddleware } from "redux";
import customerReducer from "./features/customer/customerSlice";
import accountReducer from "./features/accounts/AccountSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//1

//3
const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//4

export default store;
