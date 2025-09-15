import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Dropdown from "react-bootstrap/Dropdown";

const SearchContainer = styled.div`
  display: flex;
  max-width: 50%;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 30px auto;

  @media (max-width: 650px){
  border-radius:50px;
  max-width:90%;
  padding: 10px 15px;
  } 
`;

const LocationDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* space between icon and dropdown */
`;

const Divider = styled.div`
  width: 1px;
  height: 28px;
  background: #ccc;
  margin: 0 15px;
`;

const InputBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
  }
`;

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  &:focus,
  &:active {
    box-shadow: none !important;
    outline: none !important;
  }
`;

const StyledDropdownMenu = styled(Dropdown.Menu)`
  margin-top: 20px;
`;

const Searchbar = ({ locations = [], placeholder = "Find Care at Home ...." }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0] || "");

  return (
    <SearchContainer>
      <Dropdown>
        <LocationDropdown>
          <FaMapMarkerAlt />
          <StyledDropdownToggle variant="" id="dropdown-basic">
            {selectedLocation || "Select Location"}
          </StyledDropdownToggle>
        </LocationDropdown>

        <StyledDropdownMenu>
          {locations.map((loc, index) => (
            <Dropdown.Item key={index} onClick={() => setSelectedLocation(loc)}>
              {loc}
            </Dropdown.Item>
          ))}
        </StyledDropdownMenu>
      </Dropdown>

      <Divider />

      <InputBox>
        <FiSearch />
        <input type="text" placeholder={placeholder} />
      </InputBox>
    </SearchContainer>
  );
};

export default Searchbar;
