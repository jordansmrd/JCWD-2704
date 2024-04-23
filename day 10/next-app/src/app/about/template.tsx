/** @format */

import React from "react";

type Props = {};

export default function template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" bg-purple-500 p-2">{children}</div>;
}
