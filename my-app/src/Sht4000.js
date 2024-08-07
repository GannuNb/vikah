import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Shredderimage from './images/shredder.jpg';

import Shredderimage3 from './images/shredderimg3.jpeg';

import Shredderimage2 from './images/shredder.jpg';
import './ProductsPage.css';





const Sht4000 = () => {
    const [mainImage, setMainImage] = useState(Shredderimage);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    const handleImageHover = (image) => {
        setMainImage(image);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const machinery = 'shredder'; 
    const model = 'SHT4000';

    const handleDownload = (fileName) => {
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







    return (
        <>
        <div className='productpagetop'>
            <div className='imagetop'>
                <div className="main-image-container">
                    <img src={mainImage} alt="sht2000" className="sht2000img" />
                </div>
                <div className="additional-images">
                    <div>
                        <img 
                            className='angle1' 
                            src={Shredderimage2} 
                            alt="Angle 1" 
                            onClick={() => handleImageClick(Shredderimage2)} 
                            onMouseEnter={() => handleImageHover(Shredderimage2)} 
                        />
                    </div>
                    <div>
                        <img 
                            className='angle2' 
                            src={Shredderimage3} 
                            alt="Angle 2" 
                            onClick={() => handleImageClick(Shredderimage3)} 
                            onMouseEnter={() => handleImageHover(Shredderimage3)} 
                        />
                    </div>
                    <div>
                        <img 
                            className='angle3' 
                            src={Shredderimage2} 
                            alt="Angle 3" 
                            onClick={() => handleImageClick(Shredderimage2)} 
                            onMouseEnter={() => handleImageHover(Shredderimage2)} 
                        />
                    </div>
                </div>
            </div>
            <div className="productdetails">
                <h1>{model}</h1>
                <div className="reviews">
                    <span className="stars">★★★★★</span>
                    <span>5.0 from 392 Reviews</span>
                </div>
                <p>
                Our SHT-4000 is a high performance tyre shredder model, designed to efficiently process and recycle used/waste tyres with ease.  The robust model is built to handle of tyre sizes and types, from PCR to TBR tyres.  Equipped with powerful cu	ng blades and a durable shredding chamber, this SHT 4000 can effec vely reduce tyres into smaller and more manageable pieces, making them ready for further recycling or disposal. SHT-4000 operates with precision and speed, 
                ensuring quick and efficient processing of large volumes of tyres
                </p>
              
            </div>
        </div>


        <div className='features-container'>
            <h2>FEATURES AND SPECIFICATIONS</h2>
            <div className='features-content'>
                <img src={Shredderimage} alt="Specifications" className="specifications-image" /> 
                <div className='sht200specification'>
           
                    <p>
        ➤ Specially Designed Knives with hard face  <br></br>
        ➤ Service Pla orm For easy to maintenance  <br></br>
        ➤ High Throughput low power consump on drive design  <br></br>
        ➤ Full PLC controlling electric panel  <br></br>
        ➤ Specific Stop/Auto Reversal motors Feature  <br></br>
        ➤ Shaft will be double protected with drive/mechanical mechanism <br></br> to avoid damage by
              In spherical objects <br></br>
                    </p>
                </div>
            </div>
        </div>





    <h1 className="technical-heading">Technical Specifications</h1>

    <div className="featurestable">
        <h3>Electrical System</h3>
        <table>
            <tbody>
                <tr>
                    <td>Power</td>
                    <td>120 - 160 HP</td>
                </tr>
                <tr>
                    <td>No Of Motors</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Voltage</td>
                    <td>As per Clients Requirement</td>
                </tr>
                <tr>
                    <td>Drive</td>
                    <td>Electric</td>
                </tr>
                <tr>
                    <td>Panel</td>
                    <td>MCC (Shall be suitable to 415v, 3 Phase, 50Hz AC Supply Drive)</td>
                </tr>
                <tr>
                    <td>Motor Make</td>
                    <td>Siemens / Crompton</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="cuttingsection">
        <h3>Cutting Section</h3>
        <table>
            <tbody>
                <tr>
                    <td>Cutting Chamber:</td>
                    <td>1600 x 900 mm</td>
                </tr>
                <tr>
                    <td>Blades Thickness</td>
                    <td>35 mm to 45 mm</td>
                </tr>
                
                <tr>
                    <td>Hopper Height</td>
                    <td>1400 mm</td>
                </tr>
                <tr>
                    <td>Discharge Height</td>
                    <td>2550 mm</td>
                </tr>
                <tr>
                    <td>Feeding Mechanism</td>
                    <td>Auto</td>
                </tr>
                
            </tbody>
        </table>
    </div>

    <div className="dimensions">
        <h3>Dimensions and Weight</h3>
        <table>
            <tbody>
                <tr>
                    <td>Equipment Length</td>
                    <td>5000 mm</td>
                </tr>
                <tr>
                    <td>Equipment Width</td>
                    <td>2000 mm</td>
                </tr>
                <tr>
                    <td>Equipment Height</td>
                    <td>4855 mm</td>
                </tr>
                <tr>
                    <td>Transport Height (H)</td>
                    <td>2700 mm</td>
                </tr>
                <tr>
                    <td>Equipment Weight (Approx)</td>
                    <td>22500 Kilogram</td>
                </tr>
            </tbody>
        </table>
    </div>




    <div class="buttons-container">
    <Link to={`/login?machinery=${machinery}&model=${model}`}>
        <button className="login-button">Enquire Us</button>
    </Link>

    <button className="downloadspeci-button" onClick={() => handleDownload('sht4000')}>
        Download Specifications
    </button>
</div>
















</>

    );
};

export default Sht4000;

