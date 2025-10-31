import React from 'react';
import './Contact.css'; // Import the CSS file
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className="contact-page">
            {/* Top Section: Contact Us Header */}
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Need help with our products or services? Contact us and we'll be in touch soon</p>
            </div>

            {/* Drop a Line Section */}
            <div className="drop-a-line-section">
                <h2>Drop a Line :</h2>
                <div className="contact-info-cards">
                    {/* Email Card */}
                    <div className="info-card">
                        <div className="icon-container">
                            {/* Email Icon */}
                            <FaEnvelope />
                        </div>
                        <p className="contact-value">warmy@gmail.com</p>
                        <p className="contact-label">Email</p>
                    </div>

                    {/* Phone Card */}
                    <div className="info-card">
                        <div className="icon-container">
                            {/* Phone Icon */}
                            <FaPhoneAlt />
                        </div>
                        <p className="contact-value">+91 8857694901</p>
                        <p className="contact-label">Phone</p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="contact-form-section">
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder=""></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;