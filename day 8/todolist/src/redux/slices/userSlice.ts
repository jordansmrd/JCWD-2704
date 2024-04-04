/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: number;
  name: string;
}

const initialState: IUser = {
  id: 0,
  name: "udin",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      localStorage.setItem("user", String(action.payload.id));
      return (state = action.payload);
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state = initialState;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
