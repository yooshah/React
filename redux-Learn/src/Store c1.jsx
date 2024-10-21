// import { combineReducers, createStore } from "redux";

// //1
// const initialAccountState = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: 0,
// };

// const initialCustomerState = {
//   fullName: "",
//   nationalId: "",
//   createdAt: "",
// };
// // Older Redux
// //2
// function accountReducer(state = initialAccountState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;

//       return {
//         ...state,
//         balance: state.balance + action.payload.amount,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         balance: state.balance - state.loan,
//         loan: 0,
//         loanPurpose: "",
//       };
//     default:
//       return state;
//   }
// }
// function customerReducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/createAccount":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: new Date(),
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// //3
// const rootReducer = combineReducers({
//   customer: customerReducer,
//   account: accountReducer,
// });
// const store = createStore(rootReducer);

// //4
// // store.dispatch({ type: "account/deposit", payload: 5000 });
// // console.log(store.getState());
// // store.dispatch({ type: "account/withdraw", payload: 1000 });
// // console.log(store.getState());
// // store.dispatch({
// //   type: "account/requestLoan",
// //   payload: { amount: 3000, purpose: "For a Trip" },
// // });
// // console.log(store.getState());
// // store.dispatch({ type: "account/deposit", payload: 5000 });
// // console.log(store.getState());
// // store.dispatch({ type: "account/payLoan" });
// // console.log(store.getState());

// //5 creating Action  creator
// function createCustomer(fullName, nationalId) {
//   return { type: "customer/createAccount", payload: { fullName, nationalId } };
// }
// function updateName(updateName) {
//   return { type: "customer/updateName", payload: updateName };
// }

// function deposit(amount) {
//   return { type: "account/deposit", payload: amount };
// }
// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// function payLoan() {
//   return { type: "account/payLoan" };
// }

// store.dispatch(deposit(1000));
// // store.dispatch(withdraw(500));
// // store.dispatch(requestLoan(500, "Kuzhi mandhi"));
// // store.dispatch(payLoan());
// store.dispatch(createCustomer("mohammed yooshah", 9191));
// console.log(store.getState());
