/** @format */

import { useEffect, useRef, useState } from "react";
import "./App.css";
import MyComponent from "./components/myComponent";
import ComponentMemo from "./components/componentMemo";
import ParentComponent from "./components/propComponent";
import UseCallBackComponents from "./components/useCallBackComponents";

function App() {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  const inputRef = useRef<null | HTMLInputElement>(null);
  const renderCount = useRef<number | HTMLInputElement>(null);

  let angka = 20;

  useEffect(() => {
    console.log("hello");

    document.title = `you can clicked ${count} times`;
  }, [count]);

  const a = () => {
    setCount(10); // 1
    setCount2(count); // 0
  };

  // lifecycle method
  // component will mount
  // component did mount = pada saat component terpasang diakan memanggil call back
  // component did update =
  // component will unmount

  return (
    <>
      <div className="App">
        <h2>You Clicked {count} times</h2>
        <h2>ini angka {angka} </h2>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <button onClick={() => setCount2(count2 + 1)}>Click Me count 2</button>

        <div>
          <button
            onClick={() => {
              angka++;
              console.log(angka);
            }}
          >
            tambah angka
          </button>
        </div>

        <div>
          <h2>use ref</h2>
          <input type="file" ref={inputRef} style={{ display: "none" }} />
          <button onClick={() => inputRef.current?.click()}>click</button>
        </div>

        <div>
          <h2>another use ref</h2>
          <MyComponent />
        </div>

        <div>
          <h2>use memo</h2>
          <ComponentMemo />
        </div>

        <div>
          <h2>ini parent component</h2>
          <ParentComponent />
        </div>

        <div>
          <h2>use callback </h2>
          <UseCallBackComponents />
        </div>
      </div>
    </>
  );
}

export default App;
