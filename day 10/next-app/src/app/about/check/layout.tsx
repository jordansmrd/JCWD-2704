/** @format */

import React from "react";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" bg-red-600 p-2"> {children}</div>;
}
