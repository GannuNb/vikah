import React, { Component } from "react";
import { Link } from "react-router-dom";
import lion from "./images/Lion.png";
import face from "./images/face.png";
import ins from "./images/ins.png";
import yo from "./images/yo.png";
import twi from "./images/twi.png";
import './footer.css';

class Footer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    return (
      <div className="footer">

        <div className="footer-left">

          <img className="logo" alt="Lion Logo" src={lion} />

          <div className="footer-contactus-icons">

          <a href="https://www.facebook.com/share/1Mxsd16XWYMsvCyi/?mibextid=qi2Omg">
            <img className="icon" style={{width:"80%"}} alt="Facebook" src={face} />
            </a>
            <a href="https://www.youtube.com/@vikahecotech" >
            <img className="icon" style={{width:"80%"}} alt="YouTube" src={yo} />
            </a>
            <a href="https://www.instagram.com/vikahecotech/">
            <img className="icon" style={{width:"80%"}} alt="Instagram" src={ins} />
            </a>

            <a href="https://x.com/vikahecotech">
            <img className="icon" style={{width:"80%"}} alt="Twitter" src={twi} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/"><div>Home</div></Link>
          <Link to="/AboutUsPage"><div>About Us</div></Link>
          <Link to="/ourproducts"><div>Products</div></Link>
          <Link to="/Trade"><div>Trade Fairs</div></Link>
          <Link to="/Login"> <div>Enquire Us</div></Link>
          <Link to="/contact"> <div>Contact Us</div></Link>
    
          
          
        </div>

        <div className="footer-contact">
          <div className="footerdivision"><b>Contact Us</b></div>
          <div className="footerdivision"><b>Admin Off:</b> #406, 4th Floor, Patel Towers,<br/>Above EasyBuy Beside Nagole RTO Office,<br/>Nagole Hyderabad, Telangana-500035</div>
          <div className="footerdivision"><b>Unit Add:</b> Plot No-9, The Indira Gandhi Co-Operative<br/>Housing Society, Gagan Pahad, Hyderabad,<br/>Rangareddy, Telangana, 500052</div>
          <div className="footerdivision"><b>Off:</b> +914049471616</div>
          <div className="footerdivision"><b>Email:</b> Info@vikahecotech.com</div>
        </div>

        <div className="footer-text">
          <div>Copyright 2023 Vikah-Ecotech | All rights reserved</div>
        </div>
      </div>
    );
  }
}

export default Footer;
