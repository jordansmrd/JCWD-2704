/** @format */

import Navbar from "./_components/navbar";

export default function tempe({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-pink-500">
      <Navbar />
      <h1 className=" text-xl text-blue-300">ini template</h1>
      {children}
    </div>
  );
}
