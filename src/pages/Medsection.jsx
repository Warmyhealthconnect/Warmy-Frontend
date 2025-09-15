import React from 'react'
import "../pages/Medsection.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import Searchbar from '../components/Searchbar';

function Medsection() {

    const categories = [
        {
            id: 1,
            name: 'Prescription Medicines',
            image: '/wprescription.svg',
            icon: '📋'
        },
        {
            id: 2,
            name: 'Over-the-Counter (OTC) Medicines',
            image: '/wpharmacist.svg',
            icon: '💊'
        },
        {
            id: 3,
            name: 'Wellness & Preventive Care',
            image: '/wfruits.jpg',
            icon: '❤️'
        },
        {
            id: 4,
            name: 'Specialized Clinical Products',
            image: '/wclinic.jpg',
            icon: '🔬'
        },
        {
            id: 5,
            name: 'Personal Care & Hygiene',
            image: '/whygeine.jpg',
            icon: '🧴'
        },
        {
            id: 6,
            name: 'Medical Devices & Equipment',
            image: '/wdevices.jpg',
            icon: '🏥'
        },
        {
            id: 7,
            name: 'Cosmetics & Beauty',
            image: '/wpersonal.jpg',
            icon: '💄'
        },
        {
            id: 8,
            name: 'Daily use Products',
            image: '/wdaily.jpg',
            icon: '🧼'
        }
    ];

    return (
        <>


            {/* <div className="medicine-categories-container">
                <div className="search-container">
                    <Dropdown>
                        <FaMapMarkerAlt className="icon" />

                        <Dropdown.Toggle variant="" className='bropdownbtn' id="dropdown-basic">
                            Kerala Malappuram
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdown-menu'>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="divider"></div>
                    <div className="input-box">
                        <FiSearch className="icon" />
                        <input type="text" className='search-text' placeholder="Find Medicines ...." />
                    </div>
                </div>
            </div> */}

            <Searchbar placeholder='Find Medicines'/>

            <section className="medbox-section">
                {categories.map((categories) => (
                    <Link to={'/medlist'} key={categories.id} className="medboxes">
                        <img src={categories.image} alt={""} />
                        <div className="overlay">{categories.name}</div>
                    </Link>
                ))}
            </section>

        </>
    )
}

export default Medsection