import React from 'react'

function About() {
    return (
        <>
            <div className='container-fluid d-flex flex-column justify-content-center align-items-center border py-5'>
                <h2>Connecting Patients</h2>
                <h2> with Trusted Care</h2>
            </div>
            <div className="container-fluid row">
                <div className="col-6 d-flex flex-column justify-content-around border p-5">
                    <h1>The vision behind <br />warmy</h1>
                    <h4>At Warmy, we make healthcare simple and accessible, offering pharmacy services, lab tests, and personalized care at home. Our team combines expertise with compassionate service to ensure your well-being. We address diverse healthcare needs with customized solutions that deliver
                        reliable and lasting results. Your health and comfort are always our top priorities.</h4>
                </div>
                <div className="col-6 p-5">
                    <div className='rounded-circle'>
                        <img src="/assets/aboutimgs/banner.png" alt="Banner" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className="row px-5 my-5 py-5 gap-5">
                <div className="col d-flex flex-column align-items-center gap-5 p-5 border rounded-3">
                    <h4>Our Mission  </h4>
                    <h4 style={{textAlign:"center"}}>Warmy is dedicated to bringing trusted healthcare closer to everyone. Our mission is to make medical care simple, reliable, and
                        accessible by connecting patients with the right doctors, medicines, and health services anytime, anywhere.</h4>
                </div>
                <div className="col d-flex flex-column align-items-center gap-5 p-5 border rounded-3">
                    <h4 >Our Vision  </h4>
                    <h4 style={{textAlign:"center"}}>At Warmy, our vision is to create a world where healthcare is simple, accessible, and connected.
                        We aim to bridge the gap between patients and healthcare providers through technology, making quality care just a click away.</h4>

                </div>
            </div>
        </>
    )
}

export default About