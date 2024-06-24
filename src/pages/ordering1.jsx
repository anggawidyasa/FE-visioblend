import React, { useState } from 'react';
import './ordering1.css';
import { VscAccount } from "react-icons/vsc";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Ordering1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const regex = /^\+62[0-9]*$/; 
      if (value === '' || regex.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    const [progress, setProgress] = useState(1);

    const handleNext = () => {
      if (progress < 4) setProgress(progress + 1);
    };
  
    const handleBack = () => {
      if (progress > 1) setProgress(progress - 1);
    };  
  };

  return (
    <div className="customer-container">
      <h1>Become a Customer</h1>
      <p>Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p>dan mengembangkan bisnis Anda.</p>
      <div className="customer-app">
        <div className="customer-box-container">
          <div className="customer-box-services">
            <div className="step-indicator">
              {[1, 2, 3, 4].map((num, index) => (
                <React.Fragment key={num}>
                  <div className="step-circle">{num}</div>
                  {index < 3 && <div className="step-connector"></div>}
                </React.Fragment>
              ))}
            </div>
            <div className="customer-detail">
              <div className="customer-box-content">
                <div className="customer-line"></div>
                <h2>Contact details</h2>
                <p>Please fill your information so we can get in touch with you.</p>
              </div>
            </div>

            <div className="customer-detail-container">
              <div className="customer-detail">
                <h3 className="customer-h3">Name</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Carter"
                    className="input-field"
                  />
                  <VscAccount className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Email</h3>
                <div className="customer-box-mini">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="input-field"
                  />
                  <MdEmail className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Phone Number</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+62"
                    className="input-field"
                    pattern="^\+62[0-9]*$"
                  />
                  <FaMobileAlt className="icon" />
                </div>
              </div>
              <div className="customer-detail">
                <h3 className="customer-h3">Company</h3>
                <div className="customer-box-mini">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="input-field"
                  />
                  <FaBuilding className="icon" />
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/ordering2" className="next-button-clik">
            Next Step
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Ordering1;