// import customerReducer from "./features/customer/customerSlice";
// import accountReducer from "./features/accounts/AccountSlice";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     account: accountReducer,
//     customer: customerReducer,
//   },
// });

// export default store;

import todoSlice from "./TodoList/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
