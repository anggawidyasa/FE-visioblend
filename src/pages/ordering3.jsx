import React, { useState } from 'react';
import './ordering3.css';
import { NavLink } from 'react-router-dom';

const Ordering3 = () => {
  const [selSvc, setSelSvc] = useState('');

  const handleSvcClick = (svc) => {
    setSelSvc(svc === selSvc ? '' : svc);
  };

  return (
    <div className="cont">
      <h1 className="ttl">Become a Customer</h1>
      <p className="sub">Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p className="sub">dan mengembangkan bisnis Anda.</p>
      <div className="ord-app-cont">
        <div className="ord-box-cont">
          <div className="ord-svcs-box">
          <div className="step-ind">
              {[1, 2, 3, 4].map((num, index) => (
                <React.Fragment key={num}>
                  <div className={`step-circ ${num <= 2 ? 'act' : ''}`}>{num}</div>
                  {index < 3 && <div className={`step-conn ${num < 2 ? 'act' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>
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
          </div>
          <NavLink to="/ordering4" className="ord-next-btn">Next Step</NavLink>
          <NavLink to="/ordering2" className="ord-back-btn">Previous step</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Ordering3;