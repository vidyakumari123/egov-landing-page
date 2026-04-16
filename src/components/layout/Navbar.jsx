import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          eGov
        </a>

        {/* MOBILE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

          {/* CENTER MENU */}
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Areas of Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Products & Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Our Platform</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Ecosystem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Resources</a>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">
            <a href="/" className="nav-link">Events</a>
            <a href="/" className="nav-link">Contact</a>
            <span className="fw-semibold">ENG</span>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;