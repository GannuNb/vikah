import React, { Component } from "react";
import balersimage from "./images/baler.png";
import './bproducts.css'
import fullimg from "./images/baler6.jpg"
import { Link } from "react-router-dom";
import shrederimg from "./images/shredder.jpg"
import shrederimg2 from "./images/shredder2.jpg"
import shredderimg3 from './images/shredderimg3.jpeg'

import enquiryimg from "./images/enquiry.png"


class Shredderproducts extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
            <div className="bproducts-container">
                <img className="baler-image" src={shredderimg3} alt="Baler" />


                <div className="description">
                At Vikah Ecotech, we are dedicated to providing top-of-the-line recycling shredders that are designed to meet the diverse needs of industries and facilities involved in waste management and recycling processes. Our shredders are engineered to efficiently process and reduce various types of recyclable materials, contributing to waste reduction, resource conservation, and environmental sustainability.              <br /><br />
              <b>Features:</b>
              <br /><br />
               Our shredders are built with high-quality materials and advanced technology to ensure durability, reliability, and consistent performance in shredding diverse materials. We manufacture from single-shaft shredders to dual-shaft shredders, our range of machinery offers versatile solutions for shredding materials such as plastics, paper, cardboard, wood, metals, tyres and more.  Our shredders are designed for high efficiency and productivity, with features such as high-speed shredding, adjustable cutting mechanisms, and automated controls to optimize material processing. Our Shredders comes with safety which is a top priority in our design. Our shredders are equipped with safety features such as emergency stop buttons, safety locks, PLC and protective guards to ensure operator safety during operation.  Our shredders are designed for easy maintenance and cleaning, with accessible components and user-friendly interfaces to facilitate routine upkeep and maximize machine lifespan.              <br /><br />
              <br /><br />
              <b>Benefits of Using Our Recycling Shredders:</b><br></br>
              <br></br>

1. Our shredders help organizations reduce waste volume by efficiently shredding materials into smaller, manageable pieces, facilitating easier recycling and disposal processes.

2. By shredding materials into uniform particles, our shredders enable efficient resource recovery and recycling, leading to cost savings and environmental benefits.

3. Efficient shredding and recycling of materials contribute to environmental sustainability by reducing landfill waste, conserving resources, and mitigating environmental impact.

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
             <b> Our Shredders use in variety of Applications such as in:</b>
              <br /><br />
              - Recycling Facilities<br /><br />
- Document Destruction Services<br /><br />
- E-Waste Recycling Centers<br /><br />
- Manufacturing Plants<br /><br />
- Waste-to-Energy Facilities<br /><br />
<br /><br />

</div>

                </div>



                <b className="shredderproducts">Primary Shredder Products</b>

                <div className="shredderproductscontainer">
  <Link to="/tyreshredder">
  <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Baler" src={shrederimg} />
        <div className="shredderproducts-text-appli">Tyre Shredder</div>

    </div>
    </Link>
   <Link to="/metalshredder">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Shredders" src={shrederimg} />
        <div className="shredderproducts-text-appli">Metal Shredder</div>
    </div></Link>
        <Link to="/plasticshredder">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Cutting Equipment" src={shredderimg3} />
        <div className="shredderproducts-text-appli">
            <p>Plastic Shredder</p>
            
        </div>
    </div></Link>
    <Link to="/paperandcardboardshredder">
    <div className="shredderproducts-item-appli">
        <img className="shredderproducts-image-appli" alt="Folding Equipment" src={shrederimg} />
        <div className="shredderproducts-text-appli">
            <p>Paper And Cardboard</p>
            
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

export default Shredderproducts;
