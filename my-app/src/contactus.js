import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



import logo from "./images/logo.png";
import "./contactus.css"
// import "./cu.css"
import india from  "./images/india.png"
import contactimg from "./images/contactus.png"
import view from "./images/view.jpg"
import emailus from "./images/contact1.jpg"
import newzealand from "./images/NewZealand.svg"
import oman from "./images/oman.webp"
import uae from "./images/uae.jpg"
import instapage from "./images/001.PNG"
import twitterpage from "./images/twitterpage.PNG"
import australiaflag from "./images/australia.webp"
import facebookhome from "./images/fbpage.png"





class Contactus extends Component{

  componentDidMount() {
    window.scrollTo(0, 0);
}
    render(){
        return(
            <>
                
                    
                    

                <div className="contacttopheading">please contact us for all your enquires</div>
                
                <div className="carosel">
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    interval={3000}
                >
                    <div>
                        <img style={{objectFit:"cover",width:"100%"}} src={contactimg} alt="Contact Us" />
                        <p className="legend">Contact Us</p>
                    </div>
                    <div>
                        <img style={{objectFit:"cover",width:"100%"}} src={emailus} alt="Email Us" />
                        <p className="legend">Email Us</p>
                    </div>
                    <div>
                        <img style={{objectFit:"cover",width:"100%"}} src={view} alt="Visit our Website" />
                        <p className="legend">Visit our Website</p>
                    </div>
                </Carousel>
            </div>


            



            <div className="contact-cards-container">

            <div className="contact-card top-card">
  <div className="card-content">
    <div className="card-header">
      <b className="head-office">HEAD OFFICE</b>
    </div>
    <div className="card-body">
      <div className="logo-section">
        <img
          className="company-logo"
          alt="Company Logo"
          src={india}
        />
        <b className="india">INDIA</b>
      </div>
      <div className="address-section">
        <div className="address">
          <p> <b>Admin off :</b>#406, 4th Floor, Patel Towers, Above EasyBuy <br></br> Beside Nagole RTO Office, Nagole Hyderabad- 5000001. Telangana, India</p>
          
          <div ><b> Unit</b> :Plot No-9, The indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad,<br></br>Rangareddy, Telangana,500052</div>

        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="contact-info">
        <div className="contact-item">
          <b>Off :</b><span> +914049471616</span><br></br>
          
        </div>
        <div className="contact-item"><b>Mobile:</b> <span>+91 9515162108</span></div>
        <div className="contact-item">
          <b>Email:</b> <span>Info@VikahEcotech.com</span>
        </div>
        <div className="contact-item">
          <b>Website:</b> <span>www.vikhaecotech.com</span>
        </div>
      </div>
    </div>
  </div>
 
</div>

<div className="additional-info">
    For more information about our products and services, please contact your below nearest location or at
    :-<a href="mailto:info@vikahecotech.com"><b>info@vikahecotech.com</b></a> 
    {/* or call us on 
     <b>+914049471616</b>. */}
</div>







        <div className="contact-card">
  <div className="card-content">
    <div className="card-header">
      <b className="head-office">UAE</b>
    </div>
    <div className="card-body">
      <div className="logo-section">
        <img
          className="company-logo"
          alt="Company Logo"
          src={uae}
        />
        <b className="india">LAVA RUBBER FZ LLC</b>
      </div>
      <div className="address-section">
        <div className="address">
          <p> <b>ADD :</b>FDRK4258, COMPASS BUILDING, A1 SHOHADA ROAD, AL HAMRA INDUSTRIAL ZONE – FZ, RAS AL KHAIMAH, UNITED ARAB EMIRATES</p>
          
          <div ><b> Unit</b> :Plot No-9, The indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad,<br></br>Rangareddy, Telangana,500052</div>

        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="contact-info">
        <div className="contact-item">
          <b>Off :</b><span> +971585513239</span><br></br>
          
        </div>
        
        <div className="contact-item">
          <b>Email:</b> <span>Info@VikahEcotech.com</span>
        </div>
        {/* <div className="contact-item">
          <b>Website:</b> <span>www.vikhaecotech.com</span>
        </div> */}
      </div>
    </div>
  </div>
 
</div>

<div className="contact-card">
  <div className="card-content">
    <div className="card-header">
      <b className="head-office">OMAN</b>
    </div>
    <div className="card-body">
      <div className="logo-section">
        <img
          className="company-logo"
          alt="Company Logo"
          src={oman}
        />
        <b className="india"> GLOBAL METAL AND RUBBER RECYLING</b>
      </div>
      <div className="address-section">
        <div className="address">
          <p> <b>ADD :</b>303, 3RD FLOOR, BIN HAM GROUP BUILDING, 
          AL KHUWAIR, MUSCAT, SULTANATE OF OMAN</p>
          
          <div ><b> Unit</b> :Plot No-9, The indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad,<br></br>Rangareddy, Telangana,500052</div>

        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="contact-info">
        <div className="contact-item">
          <b>Off :</b><span> +968 79211933</span><br></br>
          
        </div>
       
        <div className="contact-item">
          <b>Email:</b> <span>Info@VikahEcotech.com</span>
        </div>
        {/* <div className="contact-item">
          <b>Website:</b> <span>www.vikhaecotech.com</span>
        </div> */}
      </div>
    </div>
  </div>

</div>
<div className="contact-cardnewzealand">
  <div className="card-content">
    <div className="card-header">
      <b className="head-office">New Zealand</b>
    </div>
    <div className="card-body">
      <div className="logo-section">
        <img
          className="company-logo"
          alt="Company Logo"
          src={newzealand}
        />
        <b className="india"> LAKSS RECYCLING LIMITED</b>
      </div>
      <div className="address-section">
        <div className="address">
          <p> <b>ADD :</b>Albert Street, New Zealand</p>
          
          <div ><b> Unit</b> :Plot No-9, The indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad,<br></br>Rangareddy, Telangana,500052</div>

        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="contact-info">
        <div className="contact-item">
          <b>Off :</b><span>  +64223136208</span><br></br>
          
        </div>
       
        <div className="contact-item">
          <b>Email:</b> <span>info@lakssrecycling.com</span>
        </div>
        {/* <div className="contact-item">
          <b>Website:</b> <span>www.vikhaecotech.com</span>
        </div> */}
        {/* <div className="contact-item">
          <b>For more information about our products aand services, please enquire us at info@vikahecotech.com or call us on +914049471616</b> 
        </div> */}
      </div>
    </div>
  </div>
 
</div>

{/* <div className="contact-card">
  <div className="card-content">
    <div className="card-header">
      <b className="head-office">Australia</b>
    </div>
    <div className="card-body">
      <div className="logo-section">
        <img
          className="company-logo"
          alt="Company Logo"
          src={australiaflag}
        />
        <b className="india"> LAKSS RECYCLING PTY LTD</b>
      </div>
      <div className="address-section">
        <div className="address">
          <p> <b>ADD :</b>Suite 302/13-15 , Wentworth Avenue , Sydney NSW – 2000</p>
          
          <div ><b> Unit</b> :Plot No-9, The indira Gandhi Co-Operative Housing Society, Gagan Pahad, Hyderabad,<br></br>Rangareddy, Telangana,500052</div>

        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="contact-info">
        <div className="contact-item">
          <b>Off :</b><span> :+914049471616</span><br></br>
          
        </div>
       
        <div className="contact-item">
          <b>Email:</b> <span>Info@VikahEcotech.com</span>
        </div>
    
      </div>
    </div>
  </div>
 
</div> */}
</div>


<div className="socialcontainer">
    <a href="https://www.instagram.com/vikahecotech/">
        <div className="socialcard">
            <div className="socialheader">Instagram</div>
            <div className="socialcontent">
                <img src={instapage} alt="Instagram Page"/>
            </div>
        </div>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61560470207451">
        <div className="socialcard">
            <div className="socialheader">Facebook</div>
            <div className="socialcontent">
                <iframe src={facebookhome} title="Facebook"></iframe>
            </div>
        </div>
    </a>
    <a href="https://x.com/vikahecotech">
        <div className="socialcard">
            <div className="socialheader">Twitter</div>
            <div className="socialcontent">
                <img src={twitterpage} alt="Twitter Page"/>
            </div>
        </div>
    </a>
</div>


                    




                    
                </>    



        )
    }
}
export default Contactus;