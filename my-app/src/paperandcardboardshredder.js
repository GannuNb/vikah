import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./tyrecutting.css"
import './Plasticbaler.css'
import shredderpiece1 from "./images/shredderpiece1.jpg"
import shredderpiece2 from "./images/shredderpiece2.jpg"
import shredderpiece3 from "./images/shredderpiece3.jpg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import cardboardimg1 from "./images/cardboardbalerimages3.jpg"
import  paperandcardboardimg2 from "./images/cardboardbalerimages2.jpg"






class Paperandcardboardshredder extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>


<div className="heading-tyrescrap1"> Paper and Card Board</div>
                    <div className="carousel-container-tyrescrap">
                        <Carousel
                            showArrows={true}
                            autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={true}
                            interval={1500}
                        >
                           <div>
                                <img   src={cardboardimg1} alt="First Slide" className="carousel-image" style={{objectFit:"contain"}}/>
                                <p className="legend"> Paper and Card Board</p>
                            </div>
                        </Carousel>
                    </div>
            <div className="card-plastic">
                <div className="card-plastic-body">
                    <h2 className="card-plastic-title"> Paper and Card Board</h2>
                    <p className="card-plastic-text">
                        We Vikah Ecotech manufactures high-quality plastic balers for PET, HDPE, LDPE, etc., to streamline your plastic waste management and promote environmental sustainability. We are committed to providing cutting-edge solutions that meet the evolving needs of the recycling industry. Vikah Ecotech has years of experience in designing and manufacturing state-of-the-art plastic baler machinery. Our team of skilled engineers and professionals works tirelessly to develop innovative solutions that help businesses and organizations efficiently compact and bale plastic waste for recycling and reuse.
                    </p>
                    <div className="card-plastic-contact">
                        For more information about your Plastic Balers requirement please email us at <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a> or call us on <a href="tel:+914049471616.">+914049471616.</a> and we will be happy to assist.
                    </div>
                </div>
            </div>





            </>
        )
    }
}
export default Paperandcardboardshredder