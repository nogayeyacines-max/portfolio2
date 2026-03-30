import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Nogaye Yacine Sarr</h2>

      {/* Bouton hamburger */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link to="/apropos" onClick={() => setOpen(false)}>A propos</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/projets" onClick={() => setOpen(false)}>Projets</Link>
      </ul>
    </nav>
  );
}

export default Navbar;