/** @format */
"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <div className=" w-full p-2 sticky top-0 bg-green-400 ">
      {/* {!isActive && <h1 className={` text-xl `}>Home</h1>} */}
      <Link href={"/"} className=" p-2 ml-1 bg-blue-500">
        home
      </Link>
      <Link href={"/about"} className=" p-2 ml-1 bg-blue-500">
        about
      </Link>
      <Link href={"/team/ayam/1"} className=" p-2 ml-1 bg-blue-500">
        team 1
      </Link>
      <Link href={"/team/ayam/2"} className=" p-2 ml-1 bg-blue-500">
        team 2
      </Link>
      <Link href={"/team/ayam/3"} className=" p-2 ml-1 bg-blue-500">
        team 3
      </Link>

      {/* <button
        className=" bg-blue-300 p-4"
        onClick={() => setIsActive(!isActive)}
      >
        click me
      </button> */}
    </div>
  );
}
