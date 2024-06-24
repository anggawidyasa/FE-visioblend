import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoicon from "./../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isServicesPage = /^\/Services([1-5]?)$/.test(pathname);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="justify-content-center shadow"
      >
        <div className="container-fluid mx-5 d-flex justify-content-between align-items-center">
          <div className="logo-brand">
            <Navbar.Brand href="/">
              <img
                src={logoicon}
                height="60"
                className="d-inline-block align-top "
                alt="Logo"
              />
            </Navbar.Brand>
          </div>
          <div className="nav-links">
            <Nav style={{ marginRight: "-50px" }}>
              <Nav.Link
                href="/"
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
                href="/Services"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: isServicesPage ? "#B8901A" : "#000",
                  fontWeight: isServicesPage ? "bold" : "",
                }}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="/portfolio"
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
                href="/article" 
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/artikel" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/artikel" ? "bold" : "",
                }}
              >
                Article
              </Nav.Link>
              <Nav.Link
                href="/Loyaltyreward"
                style={{
                  marginRight: "2rem",
                  fontFamily: "Poppins, sans-serif",
                  color: pathname === "/Loyaltyreward" ? "#B8901A" : "#000",
                  fontWeight: pathname === "/Loyaltyreward" ? "bold" : "",
                }}
              >
                Loyalty Rewards
              </Nav.Link>
            </Nav>
          </div>
          <div className="sign-in-sign-up d-flex justify-content-center">
            <Button
              href="/signup"
              variant="outline-primary"
              className="btn btn-primary btn-block p-2 mx-2 rounded-3"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: pathname === "/signup" ? "#B8901A" : "#fff",
                border: "1px solid #B8901A",
                color: pathname === "/signup" ? "#fff" : "#000",
                fontWeight: pathname === "/signup" ? "bold" : "",
              }}
            >
              Sign Up
            </Button>
            <Button
              href="/login"
              variant="primary"
              className="btn btn-primary btn-block p-2 mx-2 rounded-3"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: pathname === "/login" ? "#B8901A" : "#fff",
                border: "1px solid #B8901A",
                width: "80px",
                color: pathname === "/login" ? "#fff" : "#000",
                fontWeight: pathname === "/login" ? "bold" : "",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
