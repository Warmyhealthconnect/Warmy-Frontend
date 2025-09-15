import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #136169;
  padding: 12px 30px;
  height: 90px;
  color: white;

  @media (max-width: 650px) {
    background-color: #1361694D;
    color: white;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;

  span {
    color: white;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 20px;
  width: auto;
`;

const HeaderLink = styled(Link)`
  color: white;
  font-size: 1.4rem;
  cursor: pointer;

  svg {
    font-size: 34px; /* default size */
  }

  @media (max-width: 650px) {
    color: black;

    svg {
      font-size: 24px; /* smaller size on small screens */
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to={"/"}>
        <img src="/Warmy Logo.png" alt="Warmy Logo" height="60px" />
      </Logo>

      <Actions>
        <HeaderLink as="a">
          <FiPhoneCall />
        </HeaderLink>
        <HeaderLink to={"/cart"}>
          <MdOutlineShoppingCart />
        </HeaderLink>
        <HeaderLink as="a">
          <FaWhatsapp />
        </HeaderLink>
      </Actions>
    </HeaderContainer>
  );
};

export default Header;
