/** @format */

export default function Navbar() {
  return (
    <nav>
      <span className="flex">
        <a href="#">home</a>
        <a href="#">band</a>
        <a href="#">tour</a>
        <a href="#">contact</a>
        <a href="#">
          more
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </a>
      </span>

      <span className="flex">
        <a href="#" className="red">
          <i className="fa fa-search" style={{ color: "white" }}></i>
        </a>
      </span>
    </nav>
  );
}
