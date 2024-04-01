/** @format */

import React, { useEffect, useMemo, useState } from "react";

type Props = {};

export default function ComponentMemo({}: Props) {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [isEvenNumber, setIsEvenNumber] = useState<boolean>(true);

  const incrementNumber = () => setNumber(number + 1);
  const incrementCount = () => setCount(count + 1);

  const checkEvenNumber = () => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    // return number % 2 === 0;
    setIsEvenNumber(number % 2 === 0);
  };

  //   useEffect(() => {
  //     checkEvenNumber();
  //   }, [number]);

  const isEvenNumber2 = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}>number : {number}</button>
      <div>{isEvenNumber2 ? "even" : "odd"}</div>

      <button onClick={incrementCount}>count : {count}</button>
    </div>
  );
}
