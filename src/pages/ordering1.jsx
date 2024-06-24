import React, { useState } from 'react';
import './ordering1.css';
import { VscAccount } from "react-icons/vsc";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Stepper, Button, Group } from '@mantine/core';

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
  return (
    <div className="customer-container">
      <h1>Become a Customer</h1>
      <p>Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p>dan mengembangkan bisnis Anda.</p>
      <div className="customer-app">
        <div className="customer-box-container">
          <div className="customer-box-services">
            {/* <div className="step-indicator">
              {[1, 2, 3, 4].map((num, index) => (
                <React.Fragment key={num}>
                  <div className="step-circle">{num}</div>
                  {index < 3 && <div className="step-connector"></div>}
                </React.Fragment>
              ))}
            </div> */}
                <>
      <Stepper active={active} color="#B8901A" onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
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
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        
        <Stepper.Completed>
          Completed, click back button to get to previous step
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