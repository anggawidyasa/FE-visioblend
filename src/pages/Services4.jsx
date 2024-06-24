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

function Services4() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
    navigate("/Services5");
  };
  const handleBackButtonClick = () => {
    console.log("Back button clicked!");
    navigate("/Services3");
  };

  return (
    <div className="App">
      <div className="Service4TitleAndBoxes">
        <div className="wrap-btn-text">
          <button className="oval-button" onClick={handleBackButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div>
            <h1 className="Service4Title text-center fw-bold">
              Commercial Photography & Videography
            </h1>
            <h4
              className="Service4Subtitle text-center"
              style={{ color: "#B8901A" }}
            >
              (E-commerce Product, Company Profile, etc)
            </h4>
          </div>
          <button className="oval-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p
          className="Service4TextService text-center"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Mempromosikan produk atau layanan, membangun identitas merek,
          menyajikan produk secara menarik di e-commerce, <br />
          dan menciptakan konten visual yang kuat untuk media sosial dan
          komunikasi perusahaan.
        </p>
        <div className="Service4BoxContainer">
          <div className="Service4BoxServices">
            <div className="Service4Detail">
              <h3
                className="Service4ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Inflame
              </h3>
              <div className="Service4BoxContent">
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
                  <li>1 Kamera Canon + 1 Kameramen + 1 Editor</li>
                </ul>
              </div>
              <div className="Service4Price">
                <span>Total Price :</span>{" "}
                <span className="Service4YellowText">Rp. 250,000-/+</span>
              </div>
            </div>
            <div className="Service4Action">
              <NavLink
                to="/portfolio"
                className="Service4CustomButton Service4SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service4CustomButton Service4BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service4BoxServices">
            <div className="Service3Detail">
              <h3
                className="Service4ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Impress
              </h3>
              <div className="Service4BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video (SONY) + Lensa Kit</li>
                  <li>Durasi Liputan +- 6 Jam/Hari</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (1x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Maks 50 File Foto</li>
                  <li>1 Kamera Canon + 1 Kameramen + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (1x terbang)</li>
                </ul>
              </div>
              <div className="Service4Price">
                <span>Total Price :</span>{" "}
                <span className="Service4YellowText">Rp. 325,000-/+</span>
              </div>
            </div>
            <div className="Service4Action">
              <NavLink
                to="/portfolio"
                className="Service4CustomButton Service4SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service4CustomButton Service4BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service4BoxServices">
            <div className="Service4Detail">
              <h3
                className="Service4ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Visualize
              </h3>
              <div className="Service4BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>2 Kamera Video (SONY) + Lensa Kit</li>
                  <li>Durasi Liputan +- 9 Jam/Hari</li>
                  <li>Animasi 1 Bumper Video (Jika dibutuhkan)</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Unlimited Photo</li>
                  <li>1 Kamera Canon + 1 Kameramen + 1 Editor</li>
                  <li>Lighting Termasuk (Pilihan terbatas)</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">BONUS :</li>
                  <li>100 GB Free Cloud Storage</li>
                </ul>
              </div>
              <div className="Service4Price">
                <span>Total Price :</span>{" "}
                <span className="Service4YellowText">Rp. 450,000-/+</span>
              </div>
            </div>
            <div className="Service4Action">
              <NavLink
                to="/portfolio"
                className="Service4CustomButton Service4SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service4CustomButton Service4BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
        {/* REVIEW / ULASAN*/}
        <hr />
        <div className="Service4ReviewAndUlasan">
          <h2
            className="Service4ReviewTitle"
            style={{
              fontWeight: "600",
              marginBottom: "200px",
              marginTop: "50px",
            }}
          >
            Review & Ulasan
          </h2>
          <div className="Service4ReviewsContainer">
            <div className="Service4Review">
              <div className="Service4UserProfile">
                <div className="Service4UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service4ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service4NameUser">
                  <h5>Maya Indah</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @mayaindah22
                  </span>
                </div>
              </div>
              <div
                className="Service4Rating fs-6 text-start"
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
              <div className="Service4Divider"></div>
              <div className="Service4Ulasan">
                <p
                  className="Service4TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  VisioBlend bawa konsep yang fresh dan kreatif buat produk aku.
                  Hasilnya? Luar biasa! Bener-bener bikin produk aku keliatan
                  jauh lebih menarik. Bakalan rekomen terus!
                </p>
              </div>
            </div>
            <div className="Service4ReviewUniq">
              <div className="Service4UserProfile">
                <div className="Service4UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service4ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service4NameUser">
                  <h5>Bima Pratama</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @bimapratama99
                  </span>
                </div>
              </div>
              <div
                className="Service4Rating fs-6 text-start"
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
              <div className="Service4Divider"></div>
              <div className="Service4Ulasan">
                <p
                  className="Service4TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya udah beberapa kali kerja sama dengan VisioBlend dan belum
                  pernah mengecewakan! Kualitas fotonya selalu tinggi dan
                  videonya bikin produk gue keliatan profesional banget. Selain
                  itu, timnya juga friendly dan responsif. Pokoknya, pelayanan
                  mereka top banget!
                </p>
              </div>
            </div>
            <div className="Service4Review">
              <div className="Service4UserProfile">
                <div className="Service4UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service4ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service4NameUser">
                  <h5>Siti Nurul</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @siti_nurul78
                  </span>
                </div>
              </div>
              <div
                className="Service4Rating fs-6 text-start"
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
              <div className="Service4Divider"></div>
              <div className="Service4Ulasan">
                <p
                  className="Service4TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  Saya seneng banget kerja sama dengan VisioBlend karena mereka
                  bener-bener ngerti bisnis saya. Mereka bisa bawa konsep yang
                  pas banget dengan brand, jadi hasilnya tuh sesuai banget sama
                  yang kita harapin.
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

export default Services4;
