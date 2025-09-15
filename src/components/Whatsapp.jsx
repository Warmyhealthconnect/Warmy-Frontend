import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WhatsappContainer = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: #136169C9;
  border-radius: 50%;
  width: 70px;
  height: 70px;

  @media (max-width: 650px) {
    display: flex;
    justify-content: center; /* center horizontally */
    align-items: center;     /* center vertically */
    position: fixed;
    bottom: 90px;
    right: 20px;
    z-index: 1000;
  }
`

function Whatsapp() {
  return (
    <WhatsappContainer>
      <Link
        to="#"
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaWhatsapp size={50} color="#14e260ff" />
      </Link>
    </WhatsappContainer>
  )
}

export default Whatsapp
