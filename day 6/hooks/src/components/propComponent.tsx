/** @format */

import React, { createContext, useContext, useState } from "react";

type Props = {
  number: number;
};

const NumberContext = createContext();

export default function ParentComponent() {
  const [number, setNumber] = useState<number>(50);
  return (
    <div>
      <NumberContext.Provider value={[number, setNumber]}>
        <ChildrenComponent />
      </NumberContext.Provider>
    </div>
  );
}

export function ChildrenComponent() {
  return (
    <div>
      <GrandChildrenComponent />
    </div>
  );
}

export function GrandChildrenComponent() {
  const [number, setNumber] = useContext(NumberContext);
  return <div>{number}</div>;
}

//app = array of students
//component list = map array of students
//modal create/edit => setListStudents
