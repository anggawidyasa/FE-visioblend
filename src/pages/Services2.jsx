import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services2() {
  const navigate = useNavigate();
  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
    navigate("/Services3");
  };
  const handleBackButtonClick = () => {
    console.log("Back button clicked!");
    navigate("/Services");
  };

  return (
    <div className="App">
      <div className="Service2TitleAndBoxes">
        <div className="wrap-btn-text">
          <button className="oval-button" onClick={handleBackButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div>
            <h1 className="Service2Title text-center fw-bold">
              Design Architecture
            </h1>
            <h4
              className="Service2Subtitle text-center"
              style={{ color: "#B8901A" }}
            >
              (2D/3D Building Design)
            </h4>
          </div>
          <button className="oval-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p
          className="Service2TextService text-center"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Mencakup proses perencanaan, perancangan, dan pembangunan berbagai
          <br />
          struktur fisik, termasuk bangunan.
        </p>
        <div className="Service2BoxContainer">
          <div className="Service2BoxServices">
            <div className="Service2Detail">
              <h3
                className="Service2ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Produk Blueprint
              </h3>
              <div className="Service2BoxContent">
                <ul>
                  <li>Desain Gambar IMB/ PBG</li>
                  <li>Desain Gambar SLF ber SKA</li>
                  <li>Desain Gambar Perencanaan</li>
                </ul>
              </div>
              <div className="Service2Price">
                <span>Start from :</span>{" "}
                <span className="Service2YellowText">Rp. 16,000/M²</span>
              </div>
            </div>
            <div className="Service2Action">
              <NavLink
                to="/portfolio"
                className="Service2CustomButton Service2SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service2CustomButton Service2BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service2BoxServices">
            <div className="Service2Detail">
              <h3
                className="Service2ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Produk Canvas
              </h3>
              <div className="Service2BoxContent">
                <ul>
                  <li>Laporan Struktur</li>
                  <li>Laporan Sondir</li>
                </ul>
              </div>
              <div className="Service2Price">
                <span>Start from :</span>{" "}
                <span className="Service2YellowText">Rp. 47,000/M²</span>
              </div>
            </div>
            <div className="Service2Action">
              <NavLink
                to="/portfolio"
                className="Service2CustomButton Service2SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service2CustomButton Service2BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service2BoxServices">
            <div className="Service2Detail">
              <h3
                className="Service2ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Produk Arch
              </h3>
              <div className="Service2BoxContent">
                <ul>
                  <li>Desain Gambar IMB/ PBG + Gambar 3D + Video Animasi</li>
                  <li>Desain Gambar SLF ber SKA + Gambar 3D + Video Animasi</li>
                  <li>Desain Gambar Perencanaan + Gambar 3D + Video Animasi</li>
                </ul>
              </div>
              <div className="Service2Price">
                <span>Start from :</span>{" "}
                <span className="Service2YellowText">Rp. 75,000/M²</span>
              </div>
            </div>
            <div className="Service2Action">
              <NavLink
                to="/portfolio"
                className="Service2CustomButton Service2SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service2CustomButton Service2BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
        {/* REVIEW / ULASAN*/}
        <hr />
        <div className="Service2ReviewAndUlasan">
          <h2
            className="Service2ReviewTitle"
            style={{
              fontWeight: "600",
              marginBottom: "200px",
              marginTop: "50px",
            }}
          >
            Review & Ulasan
          </h2>
          <div className="Service2ReviewsContainer">
            <div className="Service2Review">
              <div className="Service2UserProfile">
                <div className="Service2UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service2ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service2NameUser">
                  <h5>Aditya Pratama</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @adityapratama92
                  </span>
                </div>
              </div>
              <div
                className="Service2Rating fs-6 text-start"
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
              <div className="Service2Divider"></div>
              <div className="Service2Ulasan">
                <p
                  className="Service2TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya sangat puas dengan jasa arsitek yang saya dapatkan dari
                  Visioblend. Arsiteknya sangat profesional dan komunikatif.
                </p>
              </div>
            </div>
            <div className="Service2ReviewUniq">
              <div className="Service2UserProfile">
                <div className="Service2UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service2ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service2NameUser">
                  <h5>Rizki Nugroho</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @rizkinugz
                  </span>
                </div>
              </div>
              <div
                className="Service2Rating fs-6 text-start"
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
              <div className="Service2Divider"></div>
              <div className="Service2Ulasan">
                <p
                  className="Service2TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya sangat puas dengan hasil video yang saya dapatkan dari
                  Visioblend. Videografernya sangat profesional dan memiliki
                  kreativitas tinggi.
                </p>
              </div>
            </div>
            <div className="Service2Review">
              <div className="Service2UserProfile">
                <div className="Service2UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service2ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service2NameUser">
                  <h5>Arifin Hidayat</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @arifhidayat21
                  </span>
                </div>
              </div>
              <div
                className="Service2Rating fs-6 text-start"
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
              <div className="Service2Divider"></div>
              <div className="Service2Ulasan">
                <p
                  className="Service2TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Desain yang saya dapatkan selalu sesuai dengan keinginan saya.
                  Selain itu, harga yang ditawarkan juga sangat terjangkau.
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

export default Services2;
