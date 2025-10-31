import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Cart from "../pages/Cart";

function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect route to apply mode
  const headerMode =
    pathname === "/" ? "landing" :
    pathname === "/about" ? "about" :
    "default";

  // Only add scroll effect for landing page
  useEffect(() => {
    if (headerMode !== "landing") return;
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [headerMode]);

  // prevent background scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const logoSrc =
    headerMode === "landing"
      ? scrolled
        ? "/warmy logo phone.png"
        : "/Warmy Logo.png"
      : "/warmy logo phone.png";

  return (
    <>
      <header className={`site-header site-header--${headerMode} ${scrolled ? "scrolled" : ""}`}>
        <div className="header__left">
          <NavLink to="/" className="logo" aria-label="Warmy home">
            <img src={logoSrc} alt="Warmy logo" />
          </NavLink>
        </div>

        {/* Desktop / Tablet nav (kept as-is) */}
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
          <Cart/>
          <button className="btn login-btn" onClick={() => setShowLogin(true)}>Login</button>
          <button className="btn signin-btn" onClick={() => setShowSignup(true)}>Sign up</button>
        </div>

        {/* Mobile hamburger button (visible only on small screens via CSS) */}
        <button
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* Sidebar drawer + overlay (only active on small screens) */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} aria-hidden={!menuOpen}></div>

      <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            <li><NavLink to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/services" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          </ul>

          <div className="mobile-cta">
            <button className="btn login-btn" onClick={() => { setShowLogin(true); setMenuOpen(false); }}>Login</button>
            <button className="btn signin-btn" onClick={() => { setShowSignup(true); setMenuOpen(false); }}>Sign up</button>
          </div>
        </nav>
      </aside>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
}

export default Header;
