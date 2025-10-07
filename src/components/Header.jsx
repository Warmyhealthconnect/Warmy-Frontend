import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Header.css';

export default function Header() {
  const { pathname } = useLocation();

  // map routes to a mode name (landing / about / default / whatever)
  const headerMode =
    pathname === "/" ? "landing" :
    pathname === "/about" ? "about" :
    "default";

  return (
    <header className={`site-header site-header--${headerMode}`}>
      <div className="header__left">
        <Link to="/" className="logo" aria-label="Warmy home">
          <img src="/Warmy Logo.png" alt="Warmy logo" />
        </Link>
      </div>

      <nav className="header__center" aria-label="Main navigation">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link active">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>

      <div className="header__right">
        <button className="icon-btn" aria-label="Search"><CiSearch size={20} /></button>
        <button className="icon-btn" aria-label="Cart"><MdOutlineShoppingCart size={20} /></button>
        <button className="btn login-btn">Login</button>
        <button className="btn signin-btn">Sign up</button>
      </div>
    </header>
  );
}
