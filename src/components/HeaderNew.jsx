import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaUser, FaEdit, FaSignOutAlt } from "react-icons/fa"; // Corrected import
import "bootstrap/dist/css/bootstrap.min.css";
import logoicon from "./assets/logo.png";
import { useLocation } from "react-router-dom";

const HeaderNew = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="custom-header justify-content-center shadow"
      >
        <div className="container-fluid mx-5 d-flex justify-content-between align-items-center">
          <div className="custom-logo-brand">
            <Navbar.Brand href="/">
              <img
                src={logoicon}
                height="60"
                className="d-inline-block align-top "
                alt="Logo"
              />
            </Navbar.Brand>
          </div>
          <div className="custom-nav-links">
            <Nav style={{ marginRight: "-50px" }}>
              <Nav.Link
                href="/"
                className="custom-nav-link"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/" ? "bold" : "",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/services"
                className="custom-nav-link"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/services" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/services" ? "bold" : "",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
                className="custom-nav-link"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/portfolio" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/portfolio" ? "bold" : "",
                }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="#"
                className="custom-nav-link"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: "black",
                }}
              >
                Article
              </Nav.Link>
              <Nav.Link
                href="#"
                className="custom-nav-link"
                style={{ fontFamily: "Poppins, sans-serif", color: "black" }}
              >
                Loyalty Rewards
              </Nav.Link>
            </Nav>
          </div>
          <div className="custom-sign-in-sign-up d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <FaUser
                size={20}
                style={{ marginRight: "15px", color: "#B8901A" }}
              />
              <div>
                <div
                  className="wrap-text"
                  style={{
                    lineHeight: "20px",
                    padding: "0 20px 0 0",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  <div>Welcome Back!</div>
                  <div className="uniq" style={{ color: "#B8901A" }}>
                    Minju
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaEdit
                size={25}
                style={{
                  marginRight: "20px",
                  background: "#B8901A",
                  color: "white",
                  borderRadius: "2px",
                  padding: "4px",
                }}
              />
              <FaSignOutAlt
                size={25}
                style={{
                  marginRight: "20px",
                  background: "#B8901A",
                  color: "white",
                  borderRadius: "2px",
                  padding: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default HeaderNew;
