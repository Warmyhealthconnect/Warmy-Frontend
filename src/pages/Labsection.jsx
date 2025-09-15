import React from "react";
import { MapPin } from "lucide-react";
import "../pages/Labsection.css";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Whatsapp from "../components/Whatsapp";
import Searchbar from "../components/Searchbar";

function Labsection() {
    const pharmacies = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-1197604-2280571.jpg&fm=jpg",
            name: "AB Pharmacy",
            distance: "2.1 km",
            location: "Malappuram",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-1197604-2280571.jpg&fm=jpg",
            name: "AB Pharmacy",
            distance: "2.1 km",
            location: "Malappuram",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-1197604-2280571.jpg&fm=jpg",
            name: "AB Pharmacy",
            distance: "2.1 km",
            location: "Malappuram",
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-1197604-2280571.jpg&fm=jpg",
            name: "AB Pharmacy",
            distance: "2.1 km",
            location: "Malappuram",
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-1197604-2280571.jpg&fm=jpg",
            name: "AB Pharmacy",
            distance: "2.1 km",
            location: "Malappuram",
        },

    ];

    return (
        <>

            <Searchbar placeholder="Find Lab test Booking"
            />

            <div className="pharmacy-list">
                {pharmacies.map((pharmacy) => (
                    <div className="pharmacy-card" key={pharmacy.id}>
                        <div className="pharmacy-image">
                            <img src={pharmacy.image} alt={pharmacy.name} />
                        </div>
                        <div className="pharmacy-info">
                            <h3 className="pharmacy-title">{pharmacy.name}</h3>
                            <p className="pharmacy-distance">Distance: {pharmacy.distance}</p>
                            <div className="pharmacy-location">
                                <MapPin size={16} />
                                <span className="pharmacy-location-text">{pharmacy.location}</span>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <Whatsapp />
        </>
    );
}

export default Labsection;
