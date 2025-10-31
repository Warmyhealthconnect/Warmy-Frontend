import React from 'react'
import { Link } from 'react-router-dom';
import '../pages/Services.css'

function Services() {

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

            <div className="services-container ">
                <div className="service-heading text-center mt-5 mb-5 w-50">
                    <h1>Care That Reaches You</h1>
                    <p style={{ fontSize: "20px" }}>Whether you need medicines, lab tests, or personal care at home, we make healthcare accessible and convenient. Our trusted team ensures quality service delivered right where you are.</p>
                </div>

                <div className="serviceboxes">
                    <div className="boxes">
                        {services.map((service) => (
                            <Link to={service.path} key={service.id} className="feature-box">
                                <img src={service.image} alt={service.title} />
                                <div className="overlay">{service.title}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services