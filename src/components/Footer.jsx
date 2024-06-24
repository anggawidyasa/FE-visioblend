import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import logo from "./../assets/logoWhite.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px 50px 20px",
            backgroundColor: "#B8901A",
          }}
        >
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
              position: "relative",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80%", cursor: "pointer" }}
            />
            <p
              style={{
                textAlign: "justify",
                fontSize: "12px",
                fontFamily: "Poppins, sans-serif",
                color: "white",
                marginBottom: "20px",
                cursor: "default",
              }}
            >
              VisioBlend adalah platform digital yang bergerak di bidang,
              desain, fotografer, dan videografer profesional dengan klien di
              Provinsi Bali. Kami menawarkan solusi terpadu untuk kebutuhan
              desain, fotografi, dan videografi, dengan fokus pada
              fleksibilitas, kualitas, dan efisiensi.
            </p>

            <div
              style={{
                position: "absolute",
                top: "0",
                right: "-10px",
                width: "1px",
                height: "100%",
                backgroundColor: "white",
              }}
            ></div>
          </div>
          <div
            style={{
              flexBasis: "20%",
              display: "block",
              marginLeft: "5%",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Our Company
            </h6>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Home
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About Us
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Partners & Team
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact Us
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Services
            </h6>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Design Marketing
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Design Architecture
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Photography
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Videography
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              paddingRight: "20px",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Features
            </h6>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Portfolio
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Article
            </a>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Loyalty Rewards
            </a>
          </div>
          <div
            style={{
              flexBasis: "20%",
              color: "white",
              position: "relative",
            }}
          >
            <h6
              style={{
                color: "#FFDC73",
                fontWeight: "bold",
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                margin: "0 0 20px 0",
                cursor: "default",
              }}
            >
              Contact Us
            </h6>
            <p
              style={{
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                href="#"
                style={{ marginRight: "5px", color: "white", fontSize: "24px" }}
              />{" "}
              +62 8964 2365 0698
            </p>
            <p
              style={{
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                href="#"
                style={{ marginRight: "5px", color: "white", fontSize: "20px" }}
              />{" "}
              visioblend@gmail.com
            </p>
            <div
              style={{
                margin: "10% 0 0 12%",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                href="#"
                style={{ margin: "0 5%", color: "white", fontSize: "25px" }}
              />
              <FontAwesomeIcon
                icon={faSquareInstagram}
                href="#"
                style={{ margin: "0 5%", color: "white", fontSize: "28px" }}
              />
              <FontAwesomeIcon
                icon={faGoogle}
                href="#"
                style={{ margin: "0 5%", color: "white", fontSize: "25px" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#846815",
            textAlign: "center",
            color: "white",
            padding: "10px",
            cursor: "default",
          }}
        >
          2024 © VisioBlend X Batavia Guardians | All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
