/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { users } from "../App";

export default function LoginPage() {
  const dispatch = useDispatch();

  const [inputHandler, setInputHandler] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const changeHandler = (e: { target: HTMLInputElement }) => {
    const { id, value } = e.target;
    setInputHandler((i) => {
      return { ...i, [id]: value };
    });
  };
  const submitLogin = () => {
    const validate = users.find(
      (u) =>
        u.email == inputHandler.email && u.password == inputHandler.password
    );

    if (validate) {
      dispatch(login(validate));
    }
  };

  return (
    <div className="text-white flex w-full justify-center min-h-screen items-center">
      <div className=" max-w-64 w-full text-center">
        <h1 className=" font-bold text-2xl my-4">Login Page</h1>

        <div className="flex flex-col gap-2 text-black ">
          <input
            type="text"
            placeholder="email"
            className=" p-1 rounded-md"
            id="email"
            onChange={changeHandler}
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className=" p-1 rounded-md"
            onChange={changeHandler}
          />
        </div>

        <button
          className=" bg-[#F87315] w-full p-1 mt-2 rounded-md"
          onClick={submitLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
