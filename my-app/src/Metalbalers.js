import React, { Component } from "react"; 
import fullimg from "./images/baler6.jpg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./tyrecutting.css"
import './Plasticbaler.css'

import metalshredderimg1 from "./images/metalbalerimages1.jpg"
import metalshredderimg2 from "./images/metalbalerimages2jpg.jpg"
import metalshredderimg3 from "./images/metalbalerimages3jpg.jpg"





class Metalbalers extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

  
    render() {
        return (
            <>
                    <div className="heading-tyrescrap1"> Metal Balers</div>
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
                                <img src={metalshredderimg1} alt="First Slide" className="carousel-image" style={{objectFit:"cover"}}/>
                                <p className="legend"> Metal Balers</p>
                            </div>
                            <div>
                                <img src={metalshredderimg2} alt="Second Slide" className="carousel-image" style={{objectFit:"cover"}} />
                                <p className="legend">Metal Balers</p>
                            </div>
                            <div>
                                <img src={metalshredderimg3} alt="Third Slide" className="carousel-image" style={{objectFit:"cover"}}/>
                                <p className="legend">Metal Balers</p>
                            </div>
                        </Carousel>
                    </div>
            <div className="card-plastic">
                <div className="card-plastic-body">
                    <h2 className="card-plastic-title">Metal Balers  </h2>
                    <p className="card-plastic-text">
                    Vikah Ecotech is your trusted manufacturer of high performance metal scrap baler machinery designed to streamline your metal waste such as light ferrour metals and non ferrous metals ie, Aluminum, Copper, Brass etc. With a strong focus on innovation, efficiency and reliability
                     we are dedicated to providing cutting edge solutions that meet the diverse needs of metal scrap recycling industry.
                    </p>
                    <div className="card-plastic-contact">
                        For more information about your Metal Balers   requirement please email us at <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a> or call us on <a href="tel:+914049471616.">+914049471616.</a> and we will be happy to assist.
                    </div>
                </div>
            </div>


        





{/* <Footer/> */}







            </>
        )
    }
}
export default Metalbalers