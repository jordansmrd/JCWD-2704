/** @format */

import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ChakraPage from "./pages/chakra";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/chakra" element={<ChakraPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
