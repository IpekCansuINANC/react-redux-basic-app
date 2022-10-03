import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

// birden fazla counter slice olduğundna
//hepsi için configureStore kullanıyoruz
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

//redux toolkit kullanmadan önce
/////////////////////////////
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   // actiondan gelen amount miktarına göre dynamic arttırdık.
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }

//   return state;
// };
//const store = createStore(counterReducer);

////////////////////////////////////////////////////
