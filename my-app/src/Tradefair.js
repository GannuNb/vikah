import React from "react";
import { Component } from "react";
import ecosustainimg from "./images/ecosustain.png";
import './Tradefair.css'





class Trade extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <>
            
            <b className="tradefairtradeheading">Trade Fairs</b>
                   

                  
                   <div className="tradefaircontainertrade">
 <div className="tradefairtrade1">
   <img alt="Trade Fair" src={ecosustainimg} />
   <div className="details">
   Eco Sustain Expo &amp; Conference, an exceptional event
                            meticulously crafted by HITEX, Hyderabad that brings together a
                            diverse community of professionals, visionaries, policymakers,
                            researchers, and solution providers, all bound by a resolute
                            dedication to shaping a sustainable future.In a world grappling
                             with pressing global challenges like climate change, our event serves
                              as a pivotal platform to drive transformative change in waste management practices,
                               inspire innovative solutions, and ignite a cleaner, greener world. Be part of this
                                impactful movement with HITEX and let’s create a positive ripple effect for our planet.
                                Eco Sustain Expo is a gathering of waste management professionals, industry leaders, policymakers, 
                                researchers, and solution providers from around the world. With a focus on sustainability and innovation,
                                 this event aims to drive positive change in waste management practices and shape a cleaner,greener future.   </div>
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
       <span><b style={{color:"blue",marginLeft:"0%"}}>Know more about Ecosustain Expo 2024</b></span>
     </div>
   </a>

 </div>
</div>
                    

                


                    


            
                
            
            </>
        )
    }
}

export default Trade



