import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './AboutUsPage.css'; 
import Baler4 from "./images/baler4.png"
import shredder from "./images/shredder.jpg"
import lion from "./images/Lion.png"
import face from "./images/face.png"
import ins from "./images/ins.png"
import yo from "./images/yo.png"
import twi from "./images/twi.png"
import { Link } from 'react-router-dom';
import enquiryimg from "./images/enquiry.png"






const AboutUsPage = () => {
    useEffect(() => {
        const aboutBox = document.querySelector('.about-box');
        const aboutBox1 = document.querySelector('.about-box1');

        setTimeout(() => {
            aboutBox.classList.add('visible');
            aboutBox1.classList.add('visible');
        }, 1000);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        
        
       <>
            <div className="carousel-container">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    <div className="carousel-slide">
                        <img src={Baler4} alt="About 1"   />
                    </div>
                    <div className="carousel-slide">
                        <img src={shredder} alt="About 2"   />
                    </div>
                </Carousel>
            </div>
            <div className="about-box">
                <h2>About Us</h2>
                <p>
                Vikah Ecotech is an leading manufacturer of innovative and sustainable recycling machinery solutions. 
                 With a deep commitment to environmental sustainability and technological advancement,
                  we strive to provide high quality machinery that helps businesses and communities effectively manage the waste and contribute to a cleaner, greener future.
                </p>
            </div>
            <div className="carousel-container1">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
                    <div className="carousel-slide">
                        <img src={Baler4} alt="About 1"  />
                    </div>
                    <div className="carousel-slide">
                        <img src={shredder} alt="About 2"   />
                    </div>
                </Carousel>
            </div>
            <div className="about-box1">
                <h2>Our Mission</h2>
                <p>
                    Vikah Ecotech provides industry-leading recycling machinery solutions that drive efficiency, reduce waste, and promote environmental conservation on a global scale.
                    With a handful of years of experience in the industry, our team of engineers and technicians possess unparalleled expertise in designing and manufacturing high-quality recycling machinery.
                </p>
            </div>


            <div className='enquiry-container'>
      <img className="enq" src={enquiryimg} alt="Enquiry"/>
      <div className='enquiry'> 
        For more information about our products and services, please visit our products range or enquire us at  <a href="mailto:info@vikahecotech@gmail.com">info@vikahecotech.com</a>
      </div>
      
    </div>


    












    </>
      
       
    );
};

export default AboutUsPage;