import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./tyrecutting.css"

import tyrescrap2 from './images/tyre scrap2.jpg'
import tyrescrap3 from "./images/tyre scrap3.jpg"
import tyrescrap4 from "./images/tyre scrap4.jpg"

import Balerimg from "./images/baler.png"
import Baler1 from "./images/baler1.png"
import Baler2 from "./images/baler2.png"
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tyreVideo from './images/whatsup images/balereditvideo.mp4';





class Baler extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
 
    
     handleDownload = (fileName) => {
        // Create a new anchor element
        const link = document.createElement('a');
        // Set the href to the PDF file
        link.href = `${process.env.PUBLIC_URL}/${fileName}.pdf`;
        // Set the download attribute to the desired file name
        link.download = `${fileName}.pdf`;
        // Append the anchor to the body
        document.body.appendChild(link);
        // Programmatically click the anchor
        link.click();
        // Remove the anchor from the body
        document.body.removeChild(link);
    };
  
    render() {
        return (
            <>
         
                    
                <div className="heading-tyrescrap1"> Tyre Scrap Balers</div>
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
                                <img style={{width:"100%",height:"367px",objectFit:"contain"}} src={tyrescrap2} alt="First Slide" className="carousel-image"/>
                                <p className="legend">Tyre scrap image1</p>
                            </div>
                            <div>
                                <img style={{width:"100%",height:"367px",objectFit:"contain"}} src={tyrescrap3} alt="Second Slide" className="carousel-image" />
                                <p className="legend">Tyre scrap image2</p>
                            </div>
                            <div>
                                <img style={{width:"100%",height:"367px",objectFit:"contain"}} src={tyrescrap4} alt="Third Slide" className="carousel-image"/>
                                <p className="legend">Tyre scrap image3</p>
                            </div>

                                                                <div>
                                    <video style={{width:"100%",height:"367px",objectFit:"contain"}} className="carousel-image" controls muted>
                                        <source src={tyreVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <p className="legend">Tyre scrap video</p>
                                    </div>

                        </Carousel>
                    </div>



                <div className="heading-tyrescrap">Model Numbers </div>

                <div className="bot">
                   <Link to="/Blt150"> <div className="card-container1-cutting-tyrescrap">
                        <div className="card-item-cutting">
                            <img className="balersetimg" alt="Baler" src={Balerimg} />
                            <div className="title-cutting">BLT150</div>
                            <div className="rating-cutting">★★★★★</div>
                            <div className="description1-cutting"> 
                                   <b>Type of Machine:</b> Baler<br></br>

                            <b>Size:</b>1530 mm * 2700 mm * 1200mm<br></br>
                            <b>System:</b> Robust Hydralic System<br></br>
                            <b>User friendly : </b>Our BLT-150 is equipped<br></br> with user friendly controls <br></br> 
                            <b>Result:</b>, operators can easily and safely operate the BLT-150.
                               </div>
                               <button className="download-tyrescrap" onClick={() => this.handleDownload('blt150')}>
                                    Download Specification
                                </button>
                            
                        </div>
                    </div>  </Link>

              <Link to="/Blt200">        
             <div className="card-container1-cutting-tyrescrap">
                        <div className="card-item-cutting">
                            <img className="balersetimg" alt="Baler" src={Baler1} />
                            <div className="title-cutting">BLT200</div>
                            <div className="rating-cutting">★★★★★</div>
                            <div className="description1-cutting">
                            <b>Type of Machine:</b> Baler<br></br>

<b>Size:</b>1530 mm * 2700 mm * 1200mm<br></br>
<b>System:</b> Robust Hydralic System<br></br>
<b>Function : </b>Our BLT-200 is engineered to efficiently compress   <br></br>
<b>Result:</b>, operators can easily and safely operate the BLT-200.
                            </div>
                            <button className="download-tyrescrap" onClick={() => this.handleDownload('blt150')}>
                                    Download Specification
                                </button>
                            
                        </div>
                      </div></Link>

                     <Link to="/Blt250"> <div className="card-container1-cutting-tyrescrap">  

                        <div className="card-item-cutting3">
                            <img className="balersetimg" alt="Baler" src={Baler2}  />
                            <div className="title-cutting">BLT250</div>
                            <div className="rating-cutting">★★★★★</div>
                            <div className="description1-cutting">
                            <b>Type of Machine:</b> Baler<br></br>

<b>Size:</b>1530 mm * 2700 mm * 1200mm<br></br>
<b>System:</b> Robust Hydralic System<br></br>
<b>Function : </b>Our BLT-250 is engineered to efficiently compress.<br></br>
<b>Result:</b>, operators can easily and safely operate the BLT-200.
                                
                                </div>
                                <button className="download-tyrescrap" onClick={() => this.handleDownload('blt150')}>
                                    Download Specification
                                </button>
                        </div>

                        </div></Link>

                        </div>



       
    
     
       
        </>
        
             
        )
    }
}
export default Baler