import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
    navigate("/Services2");
  };

  return (
    <div className="App">
      <div className="title-and-boxes">
        <div className="div-wrapper">
          <div
            className="head1_4 text-center"
            style={{ marginRight: "-100px" }}
          >
            <h1 className="title fw-bold">Design Marketing</h1>
            <h4 style={{ color: "#B8901A" }}>
              (Design Social Media Feed, Story, Logo, etc)
            </h4>
          </div>
          <button className="oval-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p
          className="text-service text-center"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Menciptakan solusi Marketing Design yang efektif dan menarik untuk
          berbagai kebutuhan <br />
          klien dari perencanaan hingga implementasi.
        </p>
        <div className="box-container">
          <div className="box-services">
            <div className="detail">
              <h3 className="head-3" style={{ fontWeight: "600" }}>
                Paket UMKM
              </h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed Marketing</li>
                  <li>Desain Story Marketing</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from :</span>{" "}
                <span className="yellow-text">Rp. 16,000/Item</span>
              </div>
            </div>
            <div className="action">
              <NavLink to="/portfolio" className="custom-button see-product">
                See Product
              </NavLink>
              <NavLink to="/" className="custom-button book-now">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="box-services">
            <div className="detail">
              <h3 className="head-3" style={{ fontWeight: "600" }}>
                Paket Inspire
              </h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed & Story Marketing</li>
                  <li>Desain Cetak (Banner,Spanduk, Dll)</li>
                  <li>Desain Logo</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from :</span>{" "}
                <span className="yellow-text">Rp. 47,000/Item</span>
              </div>
            </div>
            <div className="action">
              <NavLink to="/portfolio" className="custom-button see-product">
                See Product
              </NavLink>
              <NavLink to="/ordering1" className="custom-button book-now">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="box-services">
            <div className="detail">
              <h3 className="head-3" style={{ fontWeight: "600" }}>
                Paket Vision
              </h3>
              <div className="box-content">
                <ul>
                  <li>Desain Feed, Story & Cover Marketing</li>
                  <li>Desain Gambar / Ilustrasi 3D</li>
                  <li>Desain cetak (Banner,Spanduk, Dll)</li>
                </ul>
              </div>
              <div className="price">
                <span>Start from :</span>{" "}
                <span className="yellow-text">Rp. 99,000/Item</span>
              </div>
            </div>
            <div className="action">
              <NavLink to="/portfolio" className="custom-button see-product">
                See Product
              </NavLink>
              <NavLink to="/ordering1" className="custom-button book-now">
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
        {/* REVIEW / ULASAN*/}
        <hr />
        <div className="review-and-ulasan">
          <h2
            className="review-title"
            style={{
              fontWeight: "600",
              marginBottom: "200px",
              marginTop: "50px",
            }}
          >
            Review & Ulasan
          </h2>
          <div className="reviews-container">
            <div className="review">
              <div className="user-profile">
                <div className="user-pp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="profile-icon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="name-user">
                  <h5>Malik Johnson</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @johnsonmalik
                  </span>
                </div>
              </div>
              <div
                className="rating fs-6 text-start"
                style={{ margin: "10px 0 0 60px" }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
              </div>
              <div className="divider"></div>
              <div className="ulasan">
                <p
                  className="text-ulasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya sangat puas dengan pelayanan yang saya dapatkan dari
                  Visioblend. Customer service-nya sangat responsif dan
                  membantu, sehingga saya bisa mendapatkan informasi yang saya
                  butuhkan dengan cepat.
                </p>
              </div>
            </div>
            <div className="review-uniq">
              <div className="user-profile">
                <div className="user-pp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="profile-icon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="name-user">
                  <h5>Mia Santos</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @miaaa01
                  </span>
                </div>
              </div>
              <div
                className="rating fs-6 text-start"
                style={{ margin: "10px 0 0 60px" }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
              </div>
              <div className="divider"></div>
              <div className="ulasan">
                <p
                  className="text-ulasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya sangat merekomendasikan Visioblend kepada siapa saja yang
                  membutuhkan jasa arsitek, fotografer, atau videografer.
                  Visioblend adalah platform yang sangat profesional dan
                  terpercaya.
                </p>
              </div>
            </div>
            <div className="review">
              <div className="user-profile">
                <div className="user-pp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="profile-icon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="name-user">
                  <h5>Lucas Nguyen</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @lucasnguyen
                  </span>
                </div>
              </div>
              <div
                className="rating fs-6 text-start"
                style={{ margin: "10px 0 0 60px" }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#B8901A", marginRight: "5px" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "#E7E9EB", marginRight: "5px" }}
                />
              </div>
              <div className="divider"></div>
              <div className="ulasan">
                <p
                  className="text-ulasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Visioblend adalah platform yang sangat memudahkan saya untuk
                  mencari jasa arsitek, fotografer, dan videografer. Saya bisa
                  menemukan berbagai pilihan jasa dengan mudah dan cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dot-icon">
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "#888484", marginRight: "5px" }}
          />
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "#E3D3A3", marginRight: "5px" }}
          />
          <FontAwesomeIcon icon={faCircle} style={{ color: "#888484" }} />
        </div>
      </div>
    </div>
  );
}

export default Services;
