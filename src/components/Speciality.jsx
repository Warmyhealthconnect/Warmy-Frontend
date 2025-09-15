import React from "react";
import "../components/Speciality.css";
// placeholder icons
import { RiToothLine } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { IoNutritionOutline } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LuBone } from "react-icons/lu";
import { FaStethoscope } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiStomach } from "react-icons/gi";


function SpecialistGrid() {

const providers = [
    { id: 1, name: 'Dentist', icon: <RiToothLine size={60}/> },
    { id: 2, name: 'Gynecologist/ Obstetrician', icon: <FaBaby size={60}/> },
    { id: 3, name: 'Dietitian/ Nutrition', icon: <IoNutritionOutline size={60}/> },
    { id: 4, name: 'Physiotherapist', icon: <FaHeartbeat size={60}/> },
    { id: 5, name: 'General surgeon', icon: <FaUserDoctor size={60}/> },
    { id: 6, name: 'Orthopedist', icon: <LuBone size={60}/> },
    { id: 7, name: 'General Physician', icon: <FaStethoscope size={60}/> },
    { id: 8, name: 'Pediatrician', icon: <FaHandsHoldingChild size={60}/> },
    { id: 9, name: 'Gastroenterologist', icon: <GiStomach size={60}/> }
  ];


  return (
    <div className="healthcare-container">
      <div className="speciality-header">
        <h1>Your Care is <span className="highlight">One Tap Away</span></h1>
      </div>
      
      <div className="provider-grid">
        {providers.map((provider) => (
          <div 
            key={provider.id} 
            className="provider-card"
          >
            <div className="icon">
              {provider.icon}
            </div>
            <span className="provider-name">{provider.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SpecialistGrid;
