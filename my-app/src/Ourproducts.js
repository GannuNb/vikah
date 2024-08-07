import React from "react";
import { Component } from "react";
import "./Ourproducts.css"
import { Link } from "react-router-dom";
import Baler from "./images/baler.png"
import ecosustainimg from "./images/ecosustain.png";
import Baler1 from "./images/baler1.png"
import shredder from "./images/shredder.jpg"
import tyrefolding from "./images/tyre folding1.jpg"
import tyrecutting from "./images/tyre folding2.jpg"
import Tyrecuttingimg  from "./images/tyrecutting1.jpg";
import Baler4 from "./images/baler4.png"



class Ourproducts extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <>

<b className="ourproductsheading">Our Products</b>

                
<div className="ourproductscard-container-home">
      <Link to ="/bproducts">
      <div className="ourproductscard-item-home">
            <img className="ourproductscard-image-home" alt="Baler" src={Baler} />
            <div className="ourproductscard-text-home">Baler</div>
        </div></Link>
        <Link to ="/shredderproducts">
        <div className="ourproductscard-item-home">
            <img className="ourproductscard-image-home" alt="Shredders" src={shredder} />
            <div className="ourproductscard-text-home">Shredders</div>
        </div></Link>
        <Link to ="/Tyre cutting">
        <div className="ourproductscard-item-home">
            <img className="ourproductscard-image-home" alt="Cutting Equipment" src={Tyrecuttingimg} />
            <div className="ourproductscard-text-home">
                <p>Cutting </p>
                <p>Equipment</p>
            </div>
        </div></Link>
        <Link to="/Tyre Folding">
        <div className="ourproductscard-item-home">
            <img className="ourproductscard-image-home" alt="Folding Equipment" src={tyrefolding} />
            <div className="ourproductscard-text-home">
                <p>Folding</p>
                <p>Equipment</p>
            </div>
        </div></Link>
    </div>



            </>
        )
    }
}
export default Ourproducts