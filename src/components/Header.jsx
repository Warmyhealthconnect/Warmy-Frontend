import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import './Header.css'

function Header() {
  return (
    <>
    <div className="header-container">
      <div className="logo">
        <img src="/Warmy Logo.png" height={'40px'} alt="" />
      </div>
      <div className="navs">B</div>
      <div className="login">
        <CiSearch size={34}/>  
        <MdOutlineShoppingCart size={34}/>
        <button className="login-button">Login</button>
      </div>
    </div>
    </>
  )
}

export default Header