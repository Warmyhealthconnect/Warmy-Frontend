import React from 'react'
import "../pages/Careathome.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Searchbar from '../components/Searchbar';


function Careathomesection() {
    const categories = [
        {
            id: 1,
            name: 'Doctor at Home',
            image: '/wdoctor.jpg',
            icon: '📋'
        },
        {
            id: 2,
            name: 'Nurse at Home',
            image: '/wdoctorhome.jpg',
            icon: '💊'
        },
        {
            id: 3,
            name: 'Physiotherapy at Home',
            image: '/wphysio.jpg',
            icon: '❤️'
        },
        {
            id: 4,
            name: 'Elderly & Paliative Care',
            image: '/welderlycare.jpg',
            icon: '🔬'
        },
        {
            id: 5,
            name: 'Mother & Child Care',
            image: '/wchildcare.webp',
            icon: '🧴'
        },
        {
            id: 6,
            name: 'Diagnostic at Home',
            image: '/whomecare.png',
            icon: '🏥'
        }
    ];

    return (
        <>
            <Searchbar
            placeholder='Find Care at Home'/>

            <section className="care-section">
                {categories.map((categories) => (
                    <Link to={''} key={categories.id} className="careboxes">
                        <img src={categories.image} alt={""} />
                        <div className="overlay">{categories.name}</div>
                    </Link>
                ))}
            </section>
        </>

    )
}

export default Careathomesection