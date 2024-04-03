/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counterReducers";
import counterSlice from "./slices/counterSlice";

const reducers = combineReducers({
  counter: counterReducer,
  counter2: counterSlice,
});

export const store = configureStore({
  reducer: reducers,
});
