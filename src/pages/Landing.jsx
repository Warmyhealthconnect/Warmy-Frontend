import React from "react";
import "../pages/Landing.css";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Speciality from "../components/Speciality";
import Button from "../components/Button";

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

  const speciality = [
    {
      image: "/assets/logos/gynecology.png",
      title: "Gynecology/Obstetrician",
      sub: "Pregnancy care, childbirth, infertility"
    },
    {
      image: "/assets/logos/nutrition.png",
      title: "Dietitian/ Nutrition",
      sub: "Experts in food and nutrition for better health."
    },
    {
      image: "/assets/logos/physio.png",
      title: "Physiotherapy",
      sub: "Helps restore movement and reduce pain."
    },
    {
      image: "/assets/logos/ortho.png",
      title: "Orthopedist",
      sub: "Orthopedists care for bones, joints, and spine health."
    },
    {
      image: "/assets/logos/general.png",
      title: "General Physician",
      sub: "Helps restore movement and reduce pain."
    },
    {
      image: "/assets/logos/pediatrition.png",
      title: "Pediatrician",
      sub: "Helps restore movement and reduce pain."
    },
    {
      image: "/assets/logos/gastro.png",
      title: "Gastroenterologist",
      sub: "Helps restore movement and reduce pain."
    }
  ]

  const ballcontent = [
    {
      title: "General Health Concerns",
      image: "/assets/landingimage/ball1.png"
    },
    {
      title: " Women’s Health",
      image: "/assets/landingimage/ball2.png"
    },
    {
      title: " Men’s Health",
      image: "/assets/landingimage/ball3.png"
    },
    {
      title: " Child Health",
      image: "/assets/landingimage/ball4.png"
    },
    {
      title: " Mental Health",
      image: "/assets/landingimage/ball5.png"
    },
    {
      title: " Skin & Beauty",
      image: "/assets/landingimage/ball6.png"
    },
    {
      title: "Dental Health",
      image: "/assets/landingimage/ball7.png"
    },
    {
      title: " Lifestyle & Wellness",
      image: "/assets/landingimage/ball8.png"
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="landing">
        <div className="text-group">
          <h1 className="title">Healthcare Made Simple for You</h1>
          <p className="subtitle mt-5">
            Warmy is on a mission to make quality healthcare affordable and accessible for over a billion+ Peolpes. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
          </p>
          <Button title={'Explore Service'} />
        </div>
      </section>

      {/* Services Section */}
      <section className="box-section">
        <div className="box-heading">
          <ul>
            <li>Services</li>
          </ul>
          <h1>One Tap to Care</h1>
        </div>

        <div className="boxes">
          {services.map((service) => (
            <Link to={service.path} key={service.id} className="feature-box">
              <img src={service.image} alt={service.title} />
              <div className="overlay">{service.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="balls-section">
        <div className="balls-heading">
          <h1>Expert Medical Care Just for You </h1>
          <p>Your well-being deserves expert attention.We bring together trusted doctors and modern treatmentsto provide complete care for you and your family.</p>
        </div>

        <div className="balls-container">
          {ballcontent.map((item, index) => (
            <div className="balls" key={index}>
              <img
                src={item.image}
                alt="Health"
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="speciality">

        <div className="speciality-heading">
          <h1>Reserve your consultation slot</h1>
          <p>Connect with trusted doctors across all specialties and get the right care with ease.</p>
        </div>

        <div className="speciality-container">
          {speciality.map((item, index) => (
            <div className="speciality-boxes">
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.sub}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="why-warmy">
        <div className="why-warmy-texts">
          <h1>Why Warmy?</h1>
          <p>Warmy connects you with trusted and experienced doctors across all specialties, making healthcare simple and stress-free. With easy appointment booking and patient-focused care, we ensure you get the right treatment without the hassle.</p>
        </div>
      </section>

    </>
  );
}

export default Landing;
