import React, { useState } from 'react';
import './ordering1.css';
import { VscAccount } from "react-icons/vsc";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { Stepper, Button, Group } from '@mantine/core';
import { PiBuildingsFill } from "react-icons/pi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { BiParty } from "react-icons/bi";
import { PiBicycle } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";

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
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const [selSvc, setSelSvc] = useState('');

  const handleSvcClick = (svc) => {
    setSelSvc(svc === selSvc ? '' : svc);
  };

  const SubmissionSuccessMessage = () => {
  };

  return (
    <div className="customer-container">
      <h1>Become a Customer</h1>
      <p>Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p>dan mengembangkan bisnis Anda.</p>
      <div className="customer-app">
        <div className="customer-box-container">
          <div className="customer-box-services">
                <>
      <Stepper active={active} color="#B8901A" onStepClick={setActive}>
        <Stepper.Step label="First step" description="">
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
        </Stepper.Step>
        <Stepper.Step label="Second step" description="">
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
        </Stepper.Step>
        <Stepper.Step label="Final step" description="">
        <div className="ord-box-cont">
            <div className="ord-line"></div>
             <div className="ord-content">
              <h2>What's your target marketing?</h2>
               <p>Please select the target marketing you have in mind.</p>
            </div>
              </div>
            <div className="ord-det-cont">
              {['Commercial', 'Ceremonial', 'Gen-Z', 'All'].map((svc) => (
                <div 
                  key={svc}
                  className={`ord-det ${selSvc === svc ? 'sel' : ''}`}
                  onClick={() => handleSvcClick(svc)}
                >
                  <div className="ord-mini-box">
                    <div className={`bul-inner ${selSvc === svc ? 'sel' : ''}`}></div>
                    <h6 className="ord-lbl">{svc}</h6>
                  </div>
                </div>
              ))}
            </div>
        </Stepper.Step>
        
        <Stepper.Completed>
        <>
        <div className="det">
          <div className="success-icon">
            <FaCheck />
          </div>
          <h3 className="txt">Your submission has been successful!</h3>
          <p>Thanks! We have received your submission, and we'll be in touch really soon.</p>
        </div>
      </>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button  style={{ backgroundColor: '#B8901A', color: '#fff' }}onClick={nextStep}>Next step</Button>
      </Group>
    </>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Ordering1;