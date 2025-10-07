import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header__left">
        <NavLink to="/" className="logo" aria-label="Warmy home">
          <img src="/Warmy Logo.png" alt="Warmy logo" />
        </NavLink>
      </div>

      <nav className="header__center" aria-label="Main navigation">
        <ul className="nav-list">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>


      <div className="header__right">
        <button className="icon-btn" aria-label="Search"><CiSearch size={20} /></button>
        <button className="icon-btn" aria-label="Cart"><MdOutlineShoppingCart size={20} /></button>
        <button className="btn">Login</button>
        <button className="btn btn--primary">Sign up</button>
      </div>
    </header>
  );
}
