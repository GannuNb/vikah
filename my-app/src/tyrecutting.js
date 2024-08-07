import React, { Component } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./tyrecutting.css"
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import tyrecimage from "./images/tyrecutting1.jpg"
import tyrecimage2 from "./images/tyrecutting2.webp"
import tyrecimage3 from "./images/tyrecutting3.jpg"
import enquiryimg from "./images/enquiry.png"

class Tyrecutting extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>

                
            <div className="heading-tyrescrap1"> Tyre Cutting Machine</div>



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
                                <img   src={tyrecimage} alt="First Slide" className="carousel-image"/>
                                <p className="legend">Tyre Cutting Machine</p>
                            </div>
                            <div>
                                <img src={tyrecimage2} alt="Second Slide" className="carousel-image" />
                                <p className="legend">Tyre Cutting Machine</p>
                            </div>
                            <div>
                                <img src={tyrecimage} alt="Third Slide" className="carousel-image"/>
                                <p className="legend">Tyre Cutting Machine</p>
                            </div>
                        </Carousel>
                    </div>

                    <div className="heading-tyrescrap">Model Numbers </div> 


                    <div className="bot">
    <Link to="/Tcpcr100">
        <div className="card-container1-cutting-tyrescrap">
            <div className="card-item-cutting">
                <img className="card-image-cutting" alt="Baler" src={tyrecimage} />
                <div className="title-cutting">TCPCR100</div>
                <div className="rating-cutting">★★★★★</div>
                <div className="description1-cutting">
                    <b>Type of Machine:</b> Tyre cutting<br />
                    <b>Size:</b> 1530 mm * 2700 mm * 1200mm<br />
                    <b>Power Range:</b> 20 HP,960 RPM, 50HZ, 3 Phase+2phase<br />
                    <b>Pressure:</b> 3000 PSI<br />
                    <b>Panel:</b> 415v, 3 phase,50Hz
                </div>
                <button className="download-tyrescrap">Download Specification</button>
            </div>
        </div>
    </Link>

    <Link to="/Tctb100">
        <div className="card-container1-cutting-tyrescrap">
            <div className="card-item-cutting">
                <img className="card-image-cutting" alt="Baler" src={tyrecimage2} />
                <div className="title-cutting">TCTB100</div>
                <div className="rating-cutting">★★★★★</div>
                <div className="description1-cutting">
                    <b>Type of Machine:</b> Tyre cutting<br />
                    <b>Size:</b> 1530 mm * 2700 mm * 1200mm<br />
                    <b>Power Range:</b> 20 HP,960 RPM, 50HZ, 3 Phase+2phase<br />
                    <b>Pressure:</b> 3000 PSI<br />
                    <b>Panel:</b> 415v, 3 phase,50Hz
                </div>
                <button className="download-tyrescrap">Download Specification</button>
            </div>
        </div>
    </Link>

    <Link to="/Tcotr100">
        <div className="card-container1-cutting-tyrescrap">
            <div className="card-item-cutting3">
                <img className="card-image-cutting" alt="Baler" src={tyrecimage3} />
                <div className="title-cutting">TCOTR100</div>
                <div className="rating-cutting">★★★★★</div>
                <div className="description1-cutting">
                    <b>Type of Machine:</b> Tyre cutting<br />
                    <b>Size:</b> 1530 mm * 2700 mm * 1200mm<br />
                    <b>Power Range:</b> 20 HP,960 RPM, 50HZ, 3 Phase+2phase<br />
                    <b>Pressure:</b> 3000 PSI<br />
                    <b>Panel:</b> 415v, 3 phase,50Hz
                </div>
                <button className="download-tyrescrap">Download Specification</button>
            </div>
        </div>
    </Link>
</div>



        
        {/* <button className="download1-tyrescrap">Download Specifications</button>
       
        <button className="download2-tyrescrap">Download Specifications</button> */}



 
<div className='enquiry-balerapp-container'>
                    <img className="enq-balerapp" src={enquiryimg} alt="Enquiry"/>
                    <div className='enquiry-balerapp'> 
                    For more information about your Tyre cuttting requirement please enquire us at <a href="mailto:info@vikahecotech@gmail.com"> info@vikahecotech.com</a> 
                    </div>
                    </div>






            </>
        )
    }
}
export default Tyrecutting