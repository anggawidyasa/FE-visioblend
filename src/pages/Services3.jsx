import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services345.css";
import "./services.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Services3() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
    navigate("/Services4");
  };
  const handleBackButtonClick = () => {
    console.log("Back button clicked!");
    navigate("/Services2");
  };

  return (
    <div className="App">
      <div className="Service3TitleAndBoxes">
        <div className="wrap-btn-text">
          <button className="oval-button" onClick={handleBackButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div>
            <h1 className="Service3Title text-center fw-bold">
              Ceremonial Photography & Videography
            </h1>
            <h4
              className="Service3Subtitle text-center"
              style={{ color: "#B8901A" }}
            >
              (Wedding Ceremony, Graduation, etc)
            </h4>
          </div>
          <button className="oval-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p
          className="Service3TextService text-center"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Mengabadikan momen-momen istimewa dalam acara-acara seperti
          pernikahan, <br />
          upacara kelulusan, dan perayaan lainnya.
        </p>
        <div className="Service3BoxContainer">
          <div className="Service3BoxServices">
            <div className="Service3Detail">
              <h3
                className="Service3ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Envision
              </h3>
              <div className="Service3BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video ( SONY ) + Lensa Kit</li>
                  <li>Durasi Liputan +- 3 Jam/Hari</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Maks 35 File Foto</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                </ul>
              </div>
              <div className="Service3Price">
                <span>Total Price :</span>{" "}
                <span className="Service3YellowText">Rp. 250,000-/+</span>
              </div>
            </div>
            <div className="Service3Action">
              <NavLink
                to="/portfolio"
                className="Service3CustomButton Service3SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service3CustomButton Service3BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service3BoxServices">
            <div className="Service3Detail">
              <h3
                className="Service3ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Illusion
              </h3>
              <div className="Service3BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video (SONY) + Lensa Kit</li>
                  <li>Durasi Liputan +- 7 Jam/Hari</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (1x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Maks 50 File Foto</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                  <li>Drone (1x Terbang)</li>
                </ul>
              </div>
              <div className="Service3Price">
                <span>Total Price :</span>{" "}
                <span className="Service3YellowText">Rp. 355,000-/+</span>
              </div>
            </div>
            <div className="Service3Action">
              <NavLink
                to="/portfolio"
                className="Service3CustomButton Service3SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service3CustomButton Service3BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service3BoxServices">
            <div className="Service3Detail">
              <h3
                className="Service3ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Dreamscape
              </h3>
              <div className="Service3BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>2 Kamera Video (SONY) + Lensa Kit</li>
                  <li>Durasi Liputan +- 10 Jam/Hari</li>
                  <li>Animasi 1 Bumper Video (Jika dibutuhkan)</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>2 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Unlimited Photo</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">BONUS :</li>
                  <li>100 GB Free Cloud Storage</li>
                </ul>
              </div>
              <div className="Service3Price">
                <span>Total Price :</span>{" "}
                <span className="Service3YellowText">Rp. 550,000-/+</span>
              </div>
            </div>
            <div className="Service3Action">
              <NavLink
                to="/portfolio"
                className="Service3CustomButton Service3SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service3CustomButton Service3BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
        {/* REVIEW / ULASAN*/}
        <hr />
        <div className="Service3ReviewAndUlasan">
          <h2
            className="Service3ReviewTitle"
            style={{
              fontWeight: "600",
              marginBottom: "200px",
              marginTop: "50px",
            }}
          >
            Review & Ulasan
          </h2>
          <div className="Service3ReviewsContainer">
            <div className="Service3Review">
              <div className="Service3UserProfile">
                <div className="Service3UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service3ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service3NameUser">
                  <h5>Ahmad Abdullah</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @ahmad_a
                  </span>
                </div>
              </div>
              <div
                className="Service3Rating fs-6 text-start"
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
              <div className="Service3Divider"></div>
              <div className="Service3Ulasan">
                <p
                  className="Service3TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya sampe kaget sendiri sama hasilnya! Layanan bener-bener
                  oke. Hasil fotonya top banget lah! Tiap momen penting
                  ke-capture dengan natural dan indah.
                </p>
              </div>
            </div>
            <div className="Service3ReviewUniq">
              <div className="Service3UserProfile">
                <div className="Service3UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service3ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service3NameUser">
                  <h5>Maria Garcia</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @mariag
                  </span>
                </div>
              </div>
              <div
                className="Service3Rating fs-6 text-start"
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
              <div className="Service3Divider"></div>
              <div className="Service3Ulasan">
                <p
                  className="Service3TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya dan teman - teman suka banget sama hasilnya. Fotonya
                  bikin kita flashback ke saat-saat seru pas acara. Videonya
                  juga keren banget, editingnya kreatif abis! Pokoknya, bikin
                  kita terus pengen nonton lagi dan lagi.
                </p>
              </div>
            </div>
            <div className="Service3Review">
              <div className="Service3UserProfile">
                <div className="Service3UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service3ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service3NameUser">
                  <h5>Fatimah Ibrahim</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @fatimahi
                  </span>
                </div>
              </div>
              <div
                className="Service3Rating fs-6 text-start"
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
              <div className="Service3Divider"></div>
              <div className="Service3Ulasan">
                <p
                  className="Service3TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Fotonya, videonya, semua serius bagus banget! Pas liat
                  hasilnya, gue dan keluarga langsung senyum lebar. Gak nyangka
                  bisa dapetin kenangan sebagus ini!
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

export default Services3;
