import React from 'react';
import { Link } from 'react-router-dom';
import './ordering4.css';
import { RiCheckLine } from "react-icons/ri";

const Ordering4 = () => {
  return (
    <div className="cont">
      <h1 className="ord-ttl">Become a Customer</h1>
      <p className="ord-sub">Mari kita bekerja sama. Bertemu dengan tim kami untuk melayani kebutuhan digital</p>
      <p className="ord-sub">dan mengembangkan bisnis Anda.</p>

      <div className="app">
        <div className="box-cont">
          <div className="box-svcs">
            <div className="step-ind">
              {[1, 2, 3, 4].map((num, index) => (
                <React.Fragment key={num}>
                  <div className={`step-circ ${num <= 2 ? 'act' : ''}`}>{num}</div>
                  {index < 3 && <div className={`step-conn ${num < 2 ? 'act' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <div className="det">
              <i className="mat-icons"></i>
              <h2 className="txt">Your submission has been successful!</h2>
              <p>Thanks! We have received your submission, and we'll be in touch really soon.</p>
            </div>
            <div className="det-cont">
              <Link to="/" className="box-mini">
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordering4;