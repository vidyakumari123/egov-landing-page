function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand fw-bold text-primary" href="/">
          eGov
        </a>

        {/* TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="/areas">Areas of Work</a></li>
            <li className="nav-item"><a className="nav-link" href="/products">Products & Solutions</a></li>
            <li className="nav-item"><a className="nav-link" href="/platform">Our Platform</a></li>
            <li className="nav-item"><a className="nav-link" href="/ecosystem">Ecosystem</a></li>
            <li className="nav-item"><a className="nav-link" href="/resources">Resources</a></li>
          </ul>

          <div className="d-flex gap-3">
            <a className="nav-link" href="/events">Events</a>
            <a className="nav-link" href="/contact">Contact</a>
            <a className="nav-link fw-bold" href="/">ENG</a>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;