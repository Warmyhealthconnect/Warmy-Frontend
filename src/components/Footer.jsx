import React from 'react'
import '../components/Footer.css'

function Footer() {
    return (
        <>


            <footer className="warmy-footer">
                <div className="footer-content">
                    {/* Navigation Columns */}
                    <div className="footer-nav">
                        <div className="nav-column">
                            <h3 className="nav-title">About</h3>
                            <ul>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="nav-column">
                            <h3 className="nav-title">For patients</h3>
                            <ul>
                                <li><a href="#">Search for doctors</a></li>
                                <li><a href="#">Search for clinics</a></li>
                                <li><a href="#">Search for hospitals</a></li>
                                <li><a href="#">Warmy Clinics</a></li>
                            </ul>
                        </div>

                        <div className="nav-column">
                            <h3 className="nav-title">For doctors</h3>
                        </div>

                        <div className="nav-column">
                            <h3 className="nav-title">Social</h3>
                        </div>
                    </div>

                    {/* Large "Warmy" Text */}
                    <h1 className="footer-logo">Warmy</h1>

                    {/* Copyright */}
                    <p className="copyright">Copyright &copy; 2025, Warmy. All rights reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Footer