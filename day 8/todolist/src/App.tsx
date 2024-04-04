/** @format */

import { Route, Routes, redirect, useNavigate } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/loginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./redux/slices/userSlice";

export const users = [
  {
    id: 1,
    name: "jordan",
    email: "jordan@mail.com",
    password: "12345",
  },
  {
    id: 2,
    name: "udin",
    email: "udin@mail.com",
    password: "123",
  },
];

function App() {
  const user = useSelector((state) => state.auth);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkId = localStorage.getItem("user"); //1
    const findUser = users.find((u) => u.id == Number(checkId));
    if (findUser && !user.id) {
      dispatch(login(findUser));
    } else if (!user.id) {
      nav("/login");
    } else nav("/");
  }, [user]);
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<LoginPage />} path="/login"></Route>
      </Routes>
    </>
  );
}

export default App;
