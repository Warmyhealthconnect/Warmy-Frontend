import React from "react";
import "../pages/Landing.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Speciality from "../components/Speciality";

function Landing() {
  // Service data array
  const services = [
    {
      id: 1,
      title: "Medicines",
      image: "/wmeds.jpg",
      path: "/med",
    },
    {
      id: 2,
      title: "Lab test Booking",
      image: "/wlab.jpg",
      path: "/lab",
    },
    {
      id: 3,
      title: "Care at Home",
      image: "/wcare.jpg",
      path: "/care",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="landing">
        <div className="text-group">
          <h1 className="title">Healthcare Made Simple for You</h1>
          <p className="subtitle mt-4">
            Warmy is on a mission to make quality healthcare affordable and accessible for over a billion+ Peolpes. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
          </p>
          <button className="btn">Explore Service</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="boxes">
        {services.map((service) => (
          <Link to={service.path} key={service.id} className="feature-box">
            <img src={service.image} alt={service.title} />
            <div className="overlay">{service.title}</div>
          </Link>
        ))}
      </section>

      <Speciality />
    </>
  );
}

export default Landing;
