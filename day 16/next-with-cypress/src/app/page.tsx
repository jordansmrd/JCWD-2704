/** @format */

import Link from "next/link";

export const fruits = ["banana", "apple", "watermelon"];

export default function Home() {
  return (
    <nav>
      <h1>Home Page</h1>
      <Link href="/about">Aboutpage</Link>
      <div className="fruits">
        {fruits.map((f, key) => (
          <div key={key}>{f} </div>
        ))}
      </div>
    </nav>
  );
}
