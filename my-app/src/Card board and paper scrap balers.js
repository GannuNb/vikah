import React, { Component } from "react"; 
import fullimg from "./images/baler6.jpg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./tyrecutting.css"
import './Plasticbaler.css'
import paperandcardboardimg1 from "./images/cardboardbalerimages1.jpg"
import  paperandcardboardimg2 from "./images/cardboardbalerimages2.jpg"


class Cbpsb extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
  
    render() {
        return (
            <>


<div className="heading-tyrescrap1">Paper and Cardboard Balers</div>
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
                                <img src={paperandcardboardimg1} alt="First Slide" className="carousel-image" style={{objectFit:"contain"}}/>
                                <p className="legend"> Paper and Cardboard Balers</p>
                            </div>
                            <div>
                                <img src={paperandcardboardimg2} alt="Second Slide" className="carousel-image" style={{objectFit:"contain"}} />
                                <p className="legend">Paper and Cardboard Balers</p>
                            </div>
                            <div>
                                <img src={paperandcardboardimg1} alt="Third Slide" className="carousel-image" style={{objectFit:"contain"}}/>
                                <p className="legend">Paper and Cardboard Balers</p>
                            </div>
                        </Carousel>
                    </div>


            <div className="card-plastic">
                <div className="card-plastic-body">
                    <h2 className="card-plastic-title">Paper and Cardboard Balers </h2>
                    <p className="card-plastic-text">
                    Vikah Ecotech is a premier manufacturer of top quality paper and cardboard baler machinery designed to revolutionize cardboard waste management processes.  We Vikah Ecotech focus on innovation, efficiency and environmentalresponsibility, we are dedicated to providing cutting edge solutions that cater to the diverse needs of the paper and cardboard recyclers. Our team of experienced engineers and professionals is committed to delivering innovative solutions that empower businesses to efficiently bale and recycle paper and cardboard waste with ease.
                    </p>
                    <div className="card-plastic-contact">
                        For more information about your Paper and Cardboard Balers   requirement please email us at <a href="mailto:info@vikahecotech.com">info@vikahecotech.com</a> or call us on <a href="tel:+914049471616.">+914049471616.</a> and we will be happy to assist.
                    </div>
                </div>
            </div>


            {/* <Footer/> */}



            </>
        )
    }
}
export default Cbpsb