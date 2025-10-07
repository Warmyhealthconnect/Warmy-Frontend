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
        {/* <h1 className="title">One Tap to Care</h1>
        <p className="subtitle mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text
        </p> */}
        {/* <div className="search-box shadow">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Find your services..." />
        </div> */}
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

      <Speciality/>
    </>
  );
}

export default Landing;
