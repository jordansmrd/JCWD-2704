/** @format */

import React, { useEffect, useRef, useState } from "react";

type Props = {};

export default function MyComponent({}: Props) {
  const [name, setName] = useState<string>("");
  const renderCount = useRef<number | HTMLInputElement>(0);

  useEffect(() => {
    console.log("haihai");
  }, []);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>Your Name : {name}</div>
      <div>render count : {renderCount.current} times</div>
    </div>
  );
}
