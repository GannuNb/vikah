import { Component, React } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import './home.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Baler from "./images/baler.png"
import ecosustainimg from "./images/ecosustain.png";
import Baler1 from "./images/baler1.png"
import shredder from "./images/shredder.jpg"
import tyrefolding from "./images/tyre folding1.jpg"
import tyrecutting from "./images/tyre folding2.jpg"
import Tyrecuttingimg  from "./images/tyrecutting1.jpg";
import Baler4 from "./images/baler4.png"
import bp3 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp4 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg"
import bp5 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp1 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.51 AM(1).jpeg"




class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                
                <div className="homecontainer">
               
                    <div className="hometopcontainer">
                        <b className="your">Your Partner in Sustainable Recycling</b>
                        <br />
                        <b className="solu">Solutions</b>
                        <div className="at-vikah-ecotech">
                            At Vikah Ecotech, we are dedicated to pioneering innovative solutions in the field of recycling machinery manufacturing. With a commitment to sustainability and environmental stewardship, we design and produce cutting-edge machinery that empowers industries to efficiently process waste materials and contribute to a circular economy.
                        </div>                 
                    </div>

                    <div className="homecarousel">
                        <Carousel showArrows={true} showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                            <div>
                                <img className="homecarouselimg" src={bp5} alt="Slide 1" />
                                <p className="legend">Baler</p>
                            </div>
                            <div>
                                <img  className="homecarouselimg2" src={shredder} alt="Slide 2" />
                                <p className="legend">Shredder</p>
                            </div>
                            <div>
                                <img className="homecarouselimg" src={tyrecutting} alt="Slide 3" />
                                <p className="legend">Tyrecutting</p>
                            </div>
                         
                        </Carousel>
                    </div>

                </div>

                <b className="homeproducts">Our Products</b>

                
                <div className="card-container-home">
                      <Link to ="/bproducts"><div className="card-item-home">
                            <img className="card-image-home" alt="Baler" src={Baler} />
                            <div className="card-text-home">Baler</div>
                        </div></Link>
                        <Link to ="/shredderproducts">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Shredders" src={shredder} />
                            <div className="card-text-home">Shredders</div>
                        </div></Link>
                        <Link to ="/Tyre cutting">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Cutting Equipment" src={Tyrecuttingimg} />
                            <div className="card-text-home">
                                <p>Cutting </p>
                                <p>Equipment</p>
                            </div>
                        </div></Link>
                        <Link to="/Tyre Folding">
                        <div className="card-item-home">
                            <img className="card-image-home" alt="Folding Equipment" src={tyrefolding} />
                            <div className="card-text-home">
                                <p>Folding</p>
                                <p>Equipment</p>
                            </div>
                        </div></Link>
                    </div>



                    <b className="tradeheading">Trade Fairs</b>
                   

                  
                    <div className="containertrade">
  <div className="trade1">
    <img alt="Trade Fair" src={ecosustainimg} />
    <div className="details">
      Eco Sustain Expo &amp; Conference, an exceptional event meticulously crafted by HITEX, Hyderabad that brings together a diverse community of professionals, visionaries, policymakers, researchers, and solution providers, all bound by a resolute dedication to shaping a sustainable future.
    </div>
    <div className="date">
      <span><b>Date of Exhibition:</b> 16, 17, 18 August 2024</span>
    </div>
    <div className="location">
      <span><b>Location:</b> HITEX Exhibition Center, Hyderabad</span>
    </div>
    <div className="booth">
      <span style={{fontSize:"108%"}}><b>Booth No: 4N01 </b></span>
    </div> 
    <a href="https://ecosustainexpo.in/">
      <div className="tradelink">
        <span><b style={{color:"blue",marginLeft:"14%"}}>Know more about Ecosustain Expo 2024</b></span>
      </div>
    </a>

  </div>
</div>




<div className="testimonials">
    <h2 className="testimonialhead">Testimonials</h2>
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={5000}>
        <div className="testimonial">
            <img src={Baler} alt="Testimonial 1" className="testimonial-img" style={{height:"250px"}}/>
            <div className="testimonial-content">
                <h3>EUROPEAN ASIAN METALS LTD (UK)</h3>
                <p>"We recently purchased a Baler machine from Vikah Ecotech and we couldn’t be happier with the product. The quality of the machine is top notch, and it has significantly increased our baling production. The customer service provided by the team at Vikah Ecotech was exceptional. We highly recommend Vikah Ecotech machinery to anyone in the recycling industry."</p>
                <span className="customer-name">- J.Shannu</span>
            </div>
        </div>
        <div className="testimonial">
            <img src={tyrecutting} alt="Testimonial 2" className="testimonial-img" style={{height:"250px"}}/>
            <div className="testimonial-content">
                <h3>LG ENVIRONMENTAL SERVICES LLC (SAUDI ARABIA)</h3>
                <p>"I have been using Vikah Ecotech Tyre Cutting and Folding equipments and I have to say that their machines are built to last. I recently added a shredder line and it has been performing beyond my expectations. The precision and reliability of their shredders are truly impressive. Thank you Vikah Ecotech for providing such high quality machines."</p>
                <span className="customer-name">- Mohammad El Assai</span>
            </div>
        </div>
        <div className="testimonial">
            <img src={Baler1} alt="Testimonial 3" className="testimonial-img" style={{height:"250px"}}/>
            <div className="testimonial-content">
                <h3>MTC (NEW ZEALAND)</h3>
                <p>After extensive research, we decided to purchase a new baler machine from Vikah Ecotech, and it was one of the best decisions we made for our business. The machine has streamlined our baling process, saving us both time and money.  The time at Vikah Ecotech was extremely helpful throughout the purchasing process guiding all customizable solutions and also their after sales support has been fantastic.  We are extremely satisfied with our purchase.</p>
                <span className="customer-name">- Capt Ject</span>
            </div>
        </div>
        <div className="testimonial">
            <img src={Baler4} alt="Testimonial 4" className="testimonial-img" style={{height:"250px"}}/>
            <div className="testimonial-content">
                <h3>VENKATA SIVA SAI INDUSTRIES (INDIA)</h3>
                <p>We recently bought a baler machine for waste tyres and the quality of the machine is exceptionally good with no maintenance. The quality of the structure and the baling force are top quality.  After sales service by the team in Vikah are very helpful and attending all our queries in no time.  Happy with their service.  Keep going Vikah Ecotech.</p>
                <span className="customer-name">- K.Kumar</span>
            </div>
        </div>
    </Carousel>
</div>










            </>
        );
    }
}

export default Home