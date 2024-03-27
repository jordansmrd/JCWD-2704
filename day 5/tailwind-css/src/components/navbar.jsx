/** @format */

function Navbar() {
  return (
    <div
      className=" h-14 px-8 bg-slate-400 flex justify-between items-center sticky top-0
      red text-blue-100 z-10"
    >
      <a href="/">
        <h1>Logo</h1>
      </a>
      <div className="flex gap-3">
        <a href="/chakra">Chakra Page</a>
        <a href="">Products</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
export default Navbar;
