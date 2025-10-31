import React from 'react';
import '../pages/About.css';

function About() {
    return (
        <>
            {/* --- HERO SECTION --- */}
            <div className='about-hero container-fluid d-flex flex-column justify-content-center align-items-center border py-5'>
                <h2>Connecting Patients</h2>
                <h2> with Trusted Care</h2>
            </div>

            {/* --- VISION SECTION --- */}
            <div className="about-vision container-fluid row">
                <div className="about-vision-text col-6 d-flex flex-column justify-content-around border p-5">
                    <h1>The vision behind <br />warmy</h1>
                    <h4>At Warmy, we make healthcare simple and accessible, offering pharmacy services, lab tests, and personalized care at home. Our team combines expertise with compassionate service to ensure your well-being. We address diverse healthcare needs with customized solutions that deliver
                        reliable and lasting results. Your health and comfort are always our top priorities.</h4>
                </div>
                <div className="about-vision-image col-6 p-5">
                    <div className='rounded-circle'>
                        <img src="/assets/aboutimgs/banner.png" alt="Banner" className='img-fluid' />
                    </div>
                </div>
            </div>

            {/* --- MISSION + VISION BOXES --- */}
            <div className="about-mission-vision row px-5 my-5 py-5 gap-5">
                <div className="about-mission col d-flex flex-column align-items-center gap-5 p-5 border rounded-3">
                    <h4>Our Mission</h4>
                    <h4 className="text-center">
                        Warmy is dedicated to bringing trusted healthcare closer to everyone. Our mission is to make medical care simple, reliable, and
                        accessible by connecting patients with the right doctors, medicines, and health services anytime, anywhere.
                    </h4>
                </div>
                <div className="about-vision-box col d-flex flex-column align-items-center gap-5 p-5 border rounded-3">
                    <h4>Our Vision</h4>
                    <h4 className="text-center">
                        At Warmy, our vision is to create a world where healthcare is simple, accessible, and connected.
                        We aim to bridge the gap between patients and healthcare providers through technology, making quality care just a click away.
                    </h4>
                </div>
            </div>

            {/* --- CORE VALUES SECTION --- */}
            <div className="about-core-values d-flex justify-content-center px-5 mb-5 w-100">
                <div className="about-core-card row">
                    <div className="about-core-text col-md-6">
                        <h2>Core Values of Warmy</h2>
                        <p>
                            At Warmy, we put <strong>compassion, trust, and transparency</strong> at the heart of healthcare. Through innovation, we make care simple and accessible, empowering patients and building a connected community for better outcomes.
                        </p>
                    </div>

                    <div className="about-core-image col-md-6 d-flex justify-content-center align-items-center">
                        <img
                            src="/aboutimg2.png"
                            alt="A nurse attending to an elderly patient on a couch"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>

            {/* --- DOCTORS REVIEW --- */}
            <div className="about-review-section">
                <h1>What doctors say about us</h1>

                <div className="about-review-card">
                    <h1>Dr Mahesh Sharma</h1>
                    <span>
                        <img src="/stars.png" alt="Stars" width={"30%"} />
                    </span>
                    <p>
                        Doctors love Warmy for helping them connect with the right patients, grow their practice, and focus on care instead of paperwork — making healthcare simpler and more effective.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
