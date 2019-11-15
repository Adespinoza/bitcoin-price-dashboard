import Link from "next/link";

const Navbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img
          src="https://bankballer.com/wp-content/uploads/2018/06/2000px-Bitcoin_logo.svg_-740x154.png"
          width="112"
          height="28"
        />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>

        <a className="navbar-item" href="/about">
          About
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
