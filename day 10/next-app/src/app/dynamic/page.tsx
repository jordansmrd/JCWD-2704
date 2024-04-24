/** @format */
"use client";
import React, { useState } from "react";
// import { Component1, Component2, Component3 } from "./_components/components";
import dynamic from "next/dynamic";

type Props = {};

export default function Page({}: Props) {
  const [isActive, setIsActive] = useState<Boolean>(false);
  const Dynamic1 = dynamic(() => import("./_components/components"), {
    ssr: false,
  });
  const Dynamic2 = dynamic(() => import("./_components/component2"), {
    ssr: false,
    loading: () => <div>...loading</div>,
  });
  const Dynamic3 = dynamic(() => import("./_components/component3"));

  //   com1+com2+com3 = 6.4kb
  //dengan menggunakan next dynamic
  // static load com1 + com2 = 5.7
  // pada saat state = true => load sisa componentnya (0.7)

  return (
    <div>
      ini dynamic
      <button
        className=" p-4 bg-blue-400"
        onClick={() => setIsActive(!isActive)}
      >
        {" "}
        click me
      </button>
      <div>
        {/* <Dynamic1 /> */}
        {/* 10 */}
        {isActive && <Dynamic2 />}
        {/* 20 */}
        <Dynamic3 />
        {/* 30 */}
      </div>
    </div>
  );
}
