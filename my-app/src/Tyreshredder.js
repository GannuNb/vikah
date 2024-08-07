import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./tyrecutting.css"
import './Plasticbaler.css'
import shrederimg from "./images/shredder.jpg"
import shrederimg2 from "./images/shredder2.jpg"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import shredderpiece1 from "./images/shredderpiece1.jpg"
import shredderpiece2 from "./images/shredderpiece2.jpg"
import shredderpiece3 from "./images/shredderpiece3.jpg"
import shredderimg3 from './images/shredderimg3.jpeg'














class Tyreshredder extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
 
 
    render() {
        return (
            <>

<div className="heading-tyrescrap1"> Primary Shredder For Tyres</div>
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
                                <img style={{objectFit:"cover"}} src={shredderpiece3} alt="First Slide" className="carousel-image"/>
                                <p className="legend">Primary Shredder For Tyres</p>
                            </div>
                            <div>
                                <img style={{objectFit:"cover"}} src={shredderpiece2} alt="Second Slide" className="carousel-image" />
                                <p className="legend">Primary Shredder For Tyres</p>
                            </div>
                            <div>
                                <img style={{objectFit:"cover"}} src={shredderpiece1} alt="Third Slide" className="carousel-image"/>
                                <p className="legend">Primary Shredder For Tyres</p>
                            </div>
                        </Carousel>
                    </div>



                <div className="heading-tyrescrap">Model Numbers </div>

                <div className="bot">
                   <Link to="/Sht2000"> <div className="card-container1-cutting-tyrescrap">
                        <div className="card-item-cutting">
                            <img className="card-image-cutting" alt="Baler" src={shrederimg} />
                            <div className="title-cutting">SHT2000</div>
                            <div className="rating-cutting">★★★★★</div>
                            <div className="description1-cutting"> 
                                   <b>Type of Machine:</b> Baler<br></br>

                            <b>Size:</b>1530 mm * 2700 mm * 1200mm<br></br>
                            <b>System:</b> Robust Hydralic System<br></br>
                            <b>User friendly : </b>Our SHT2000 is equipped<br></br> with user friendly controls <br></br> 
                            <b>Result:</b>, operators can easily and safely operate the BLT-150.
                               </div>
                               <button className="download-tyrescrap">Download Specification</button>
                            
                        </div>
                    </div>  </Link>

              <Link to="/Sht4000">        
             <div className="card-container1-cutting-tyrescrap">
                        <div className="card-item-cutting">
                            <img className="card-image-cutting" alt="Baler" src={shredderimg3} />
                            <div className="title-cutting">SHT4000</div>
                            <div className="rating-cutting">★★★★★</div>
                            <div className="description1-cutting">
                            <b>Type of Machine:</b> Shredder<br></br>

<b>Size:</b>1530 mm * 2700 mm * 1200mm<br></br>
<b>System:</b> Robust Hydralic System<br></br>
<b>Function : </b>Our SHT4000 is engineered to efficiently compress   <br></br>
<b>Result:</b>, operators can easily and safely operate the BLT-200.
                            </div>
                            <button className="download-tyrescrap">Download Specification</button>
                            
                        </div>
                      </div></Link>
                      </div>

            </>
        )
    }
}
export default Tyreshredder