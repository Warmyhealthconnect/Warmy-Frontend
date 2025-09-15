import React from 'react'
import '../pages/Medicines.css'
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";


function Medicines() {
    const pharmacies = [
        {
            id: 1,
            image: "https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg",
            name: "Innovfol",
            Segment: "Maintenance of Healthy Pregnancy",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 2,
            image: "https://images.apollo247.in/pub/media/catalog/product/F/E/FER1246_1.jpg",
            name: "Fertilix-OVA",
            Segment: "Female Infertility",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 3,
            image: "https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg",
            name: "Innovfol",
            Segment: "Maintenance of Healthy Pregnancy",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 4,
            image: "https://images.apollo247.in/pub/media/catalog/product/F/E/FER1246_1.jpg",
            name: "Fertilix-OVA",
            Segment: "Female Infertility",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 5,
            image: "https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg",
            name: "Innovfol",
            Segment: "Maintenance of Healthy Pregnancy",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 6,
            image: "https://images.apollo247.in/pub/media/catalog/product/F/E/FER1246_1.jpg",
            name: "Fertilix-OVA",
            Segment: "Female Infertility",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 7,
            image: "https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg",
            name: "Innovfol",
            Segment: "Maintenance of Healthy Pregnancy",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 8,
            image: "https://images.apollo247.in/pub/media/catalog/product/F/E/FER1246_1.jpg",
            name: "Fertilix-OVA",
            Segment: "Female Infertility",
            price: "₹180",
            Link: '/prdts'
        },
        {
            id: 9,
            image: "https://www.innovcare.in/wp-content/uploads/2022/07/Innovfol-D3.jpg",
            name: "Innovfol",
            Segment: "Maintenance of Healthy Pregnancy",
            price: "₹180",
            Link: '/prdts'
        }
    ];

    return (
        <>
            <div className="med-list">
                {pharmacies.map((pharmacy) => (
                    <Link className="med-card" to={pharmacy.Link} key={pharmacy.id}>
                        <div className="med-image">
                            <img src={pharmacy.image} alt={pharmacy.name} />
                        </div>
                        <div className="med-info">
                            <h3 className="med-title">{pharmacy.name}</h3>
                            <p className="med-distance">Segment: {pharmacy.Segment}</p>
                            <div className="med-location">
                                <button className='button'>Buy {pharmacy.price}</button>
                            </div>
                        </div>

                    </Link>
                ))}
            </div>

        </>
    )
}

export default Medicines