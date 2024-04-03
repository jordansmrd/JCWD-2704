/** @format */

import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContextCounterComponent from "./component/contextCounter";
import { useSelector } from "react-redux";

//provider => component yg terbuat dari hasil createContext
//value dari provider => useContext

export const CounterContext = createContext(null);

function App() {
  const [count, setCount] = useState(localStorage.getItem("count") || 0);
  const { value } = useSelector((state) => state.counter);
  useEffect(() => {
    localStorage.clear();

    if (count) {
      localStorage.setItem("count", count);
      sessionStorage.setItem("count2", count);
    } else {
      localStorage.removeItem("count");
    }
  }, [count]);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>{value}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <ContextCounterComponent />
      </CounterContext.Provider>
    </>
  );
}

export default App;
