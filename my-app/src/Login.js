
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./Login.css";
import { useLocation } from 'react-router-dom';







const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialMachinery = (query.get('machinery') || 'baler').toLowerCase();
  const initialModel = query.get('model') || '';

  const [selectedMachinery, setSelectedMachinery] = useState(initialMachinery);
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    message: ''
  });

  const models = {
    baler: ["BLT150", "BLT200", "BLT250"],
    shredder: ["SHT2000", "SHT4000", "SHT8000"],
    "tyre-cutting": ["TCPCR100", "TCTB100", "TCOTR100"],
    "folding-machine": ["TFPCR100", "TFTBR100"],
  };

  useEffect(() => {
    if (models[selectedMachinery] && !models[selectedMachinery].includes(selectedModel)) {
      setSelectedModel(models[selectedMachinery][0]);
    }
  }, [selectedMachinery, selectedModel]);

  const handleMachineryChange = (event) => {
    const machinery = event.target.value.toLowerCase();
    setSelectedMachinery(machinery);
    setSelectedModel(models[machinery] ? models[machinery][0] : '');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://vikah.vercel.app/send-email', {
        ...formData,
        machinery: selectedMachinery,
        model: selectedModel
      });
      alert('Thanks for sending enquiry one of our executive get back to you: ' + response.data);
    } catch (error) {
      alert('Failed to send email: ' + error.message);
    }
  };
  

  return (
    <>
      <div className='enqheadcontainer'>
        <h3 className='enqhead'>
          Please fill in your details to know more about our products and Services. We will get back to you within 48 hours 
        </h3>
      
      <div className='enquiryform'> Enquiry form</div>
      </div>
      <div className="login-container">
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name:</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="machinery">Machinery:</label>
              <select id="machinery" name="machinery" value={selectedMachinery} onChange={handleMachineryChange}>
                <option value="baler">Baler</option>
                <option value="shredder">Shredder</option>
                <option value="tyre-cutting">Tyre Cutting</option>
                <option value="folding-machine">Folding Machine</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="model">Model No:</label>
              <select id="model" name="model" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                {models[selectedMachinery]?.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input type="text" id="website" name="website" value={formData.website} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
            </div>
          </div>
          <div className="form-row">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>


      
    </>
  );
};

export default Login;

