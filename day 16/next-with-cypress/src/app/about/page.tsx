/** @format */

import Link from "next/link";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <nav>
      <h1>About Page</h1>
      <Link href="/">Homepage</Link>
    </nav>
  );
}
