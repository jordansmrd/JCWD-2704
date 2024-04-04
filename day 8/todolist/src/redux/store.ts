/** @format */

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const reducers = combineReducers({
  auth: userSlice,
});

export const store = configureStore({
  reducer: reducers,
});
