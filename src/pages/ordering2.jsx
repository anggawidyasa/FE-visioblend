import React, { useState } from 'react';
import './ordering2.css';
import { NavLink } from 'react-router-dom';
import { PiBuildingsFill } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiParty } from "react-icons/bi";
import { PiBicycle } from "react-icons/pi";

const Ordering2 = () => {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="ordering-container">
      <h1 className="ordering-title">Become a Customer</h1>
      <p className="ordering-subtitle">Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p className="ordering-subtitle">dan mengembangkan bisnis Anda.</p>
      <div className="ordering-app-container">
        <div className="ordering-box-container">
          <div className="ordering-services-box">
            <div className="step-indicator">
              {[1, 2, 3, 4].map((num, index) => (
                <React.Fragment key={num}>
                  <div className={`step-circle ${num <= 2 ? 'active' : ''}`}>{num}</div>
                  {index < 3 && <div className={`step-connector ${num < 2 ? 'active' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>

            <div className="ordering-detail">
              <div className="ordering-box-content">
                <div className="ordering-line"></div>
                <h2>Our Services</h2>
                <p>Please select which service you are interested in.</p>
              </div>
            </div>
            <div className="ordering-detail-container">
              <div 
                className={`ordering-detail ${selectedService === 'Design Marketing & Architect' ? 'selected' : ''}`}
                onClick={() => handleServiceClick('Design Marketing & Architect')}
              >
                <div className="ordering-mini-box">
                  <div className="icon-circle">
                    <PiBuildingsFill className="ordering-icon" />
                  </div>
                  <h6 className="ordering-label">Design Marketing & Architect</h6>
                </div>
              </div>
              <div 
                className={`ordering-detail ${selectedService === 'Ceremonial Photo & Video' ? 'selected' : ''}`}
                onClick={() => handleServiceClick('Ceremonial Photo & Video')}
              >
                <div className="ordering-mini-box">
                  <div className="icon-circle">
                    <MdOutlineOndemandVideo className="ordering-icon" />
                  </div>
                  <h6 className="ordering-label">Ceremonial Photo & Video</h6>
                </div>
              </div>
              <div 
                className={`ordering-detail ${selectedService === 'Commercial Photo & Video' ? 'selected' : ''}`}
                onClick={() => handleServiceClick('Commercial Photo & Video')}
              >
                <div className="ordering-mini-box">
                  <div className="icon-circle">
                    <BiParty className="ordering-icon" />
                  </div>
                  <h6 className="ordering-label">Commercial Photo & Video</h6>
                </div>
              </div>
              <div 
                className={`ordering-detail ${selectedService === 'Gen - Z Photo & Video' ? 'selected' : ''}`}
                onClick={() => handleServiceClick('Gen - Z Photo & Video')}
              >
                <div className="ordering-mini-box">
                  <div className="icon-circle">
                    <PiBicycle className="ordering-icon" />
                  </div>
                  <h6 className="ordering-label">Gen - Z Photo & Video</h6>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/ordering3" className="ordering-next-button">Next Step</NavLink>
          <NavLink to="/ordering1" className="ordering-back-button">Previous step</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Ordering2;