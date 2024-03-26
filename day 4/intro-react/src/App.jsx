/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import BandList from "./components/band";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* <Navbar />
      <Banner />
      <BandList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
