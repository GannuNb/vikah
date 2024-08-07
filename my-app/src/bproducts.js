import React, { Component } from "react";
import balersimage from "./images/baler.png";
import './bproducts.css'
import fullimg from "./images/baler6.jpg"
import { Link } from "react-router-dom";
import baler1img from "./images/baler1.png"
import baler2img from "./images/baler2.png"
import baler3img from "./images/baler3.png"
import enquiryimg from "./images/enquiry.png"
import bp3 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"
import bp4 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.49 AM(1).jpeg"
import bp5 from "./images/whatsup images/WhatsApp Image 2024-07-11 at 11.56.50 AM.jpeg"




class Bproducts extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
            <div className="bproducts-container">
                <img className="baler-image" src={fullimg} alt="Baler" />
                {/* <video className="responsive-video baler-image" controls>
        <source src={`${process.env.PUBLIC_URL}/WhatsApp Video 2024-07-11 at 11.56.47 AM.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}


                <div className="description">
                At Vikah Ecotech, we specialize in designing and manufacturing high-quality recycling balers machinery that is tailored to meet the diverse needs of industries and facilities involved in waste management and recycling processes. Our balers are engineered to streamline waste handling, increase operational efficiency, and promote sustainable practices.
              <br /><br />
              <b>Features:</b>
              <br /><br />
              1. Durable Construction: Our balers are built using robust materials and cutting-edge technology to ensure durability and long-term performance in various operating conditions.
              <br /><br />
              2. Versatile Design: From vertical balers to horizontal balers, our range of machinery offers versatile solutions for compacting and baling different types of recyclable materials such as for OCC, Paper, Plastic, Waste Tyres, Light Metals Scrap and more.
              <br /><br />
              3. Efficiency and Productivity: Our balers are designed for high efficiency and productivity, helping facilities optimize waste management processes, reduce labor costs, and maximize throughput.
              <br /><br />
              4. Safety Features: Safety is paramount in our design. Our balers are equipped with advanced safety features to protect operators and ensure smooth and secure operation.
              <br /><br />
              5. User-Friendly Interface: Intuitive controls and user-friendly interfaces make operating our balers simple and hassle-free, enabling operators to focus on maximizing efficiency.
              <br /><br />
              6. Cost Savings: By reducing waste volume, our balers can lower waste disposal costs and generate additional revenue from the sale of compacted materials.
              <br /><br />
              7. Environmental Sustainability: Efficient waste compaction and recycling contribute to environmental sustainability by reducing landfill waste and promoting resource conservation.
              <br /><br />
              8. Compliance and Regulations: Our balers are designed to meet industry standards and regulations, ensuring that your operations align with environmental and safety requirements.
              <br /><br />
              Our Balers can be used in different Applications such as in :
              <br /><br />
              - Recycling Centers
              <br />
              - Manufacturing Facilities
              <br />
              - Distribution Centers
              <br />
              - Retail Stores
              <br />
              - Hospitality Industry
              <br />
              - And more
                </div>
                
                </div>



                <b className="shredderproducts">Baler Applications</b>

                <div className="shredderproductscontainer">
  <Link to="/Baler">
  <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Baler" src={bp5} />
        <div className="shredderproducts-text-appli">Tyre Scrap Balers</div>

    </div>
    </Link>
   <Link to="/Plasticbalers">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Shredders" src={balersimage} />
        <div className="shredderproducts-text-appli">Plastic Balers</div>
    </div></Link>
        <Link to="/cbpsb">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Cutting Equipment" src={bp3} />
        <div className="shredderproducts-text-appli">
            <p>Card Board</p>
            
        </div>
    </div></Link>
    <Link to="/metalbalers">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Folding Equipment" src={bp4} />
        <div className="shredderproducts-text-appli">
            <p>Metal Balers</p>
            
        </div>
    </div></Link>
</div>



            <div className='enquiry-balerapp-container'>
                    <img className="enq-balerapp" src={enquiryimg} alt="Enquiry"/>
                    <div className='enquiry-balerapp'> 
                    For more information about your  balers requirement please enquire us at <a href="mailto:info@vikahecotech@gmail.com"> info@vikahecotech.com</a> 
                    </div>
                    </div>

                




            </>
        );
    }
}

export default Bproducts;
