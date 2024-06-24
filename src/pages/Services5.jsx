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

function Services5() {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    console.log("Next button clicked!");
    navigate("/Services");
  };
  const handleBackButtonClick = () => {
    console.log("Back button clicked!");
    navigate("/Services4");
  };

  return (
    <div className="App">
      <div className="Service5TitleAndBoxes">
        <div className="wrap-btn-text">
          <button className="oval-button" onClick={handleBackButtonClick}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div>
            <h1 className="Service5Title text-center fw-bold">
              Gen-Z Photography & Videography
            </h1>
            <h4
              className="Service5Subtitle text-center"
              style={{ color: "#B8901A" }}
            >
              (Social Media Content, Vacation Photo, etc)
            </h4>
          </div>
          <button className="oval-button" onClick={handleNextButtonClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <p
          className="Service5TextService text-center"
          style={{ marginTop: "20px", color: "gray" }}
        >
          Menciptakan konten visual yang relevan dan menarik bagi generasi Z,
          menggambarkan gaya hidup, nilai, dan tren terkini <br /> yang dapat
          berkontribusi pada identitas digital dan koneksi dengan audiens mereka
          melalui platform media sosial dan digital.
        </p>
        <div className="Service5BoxContainer">
          <div className="Service5BoxServices">
            <div className="Service5Detail">
              <h3
                className="Service5ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Trendy
              </h3>
              <div className="Service5BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video ( SONY A6000 ) + Lensa Kit</li>
                  <li>Durasi Liputan +- 3 Jam/Hari</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Maks 35 File Foto</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                  <li>1 Kamera (Canon) + Lensa Kit</li>
                </ul>
              </div>
              <div className="Service5Price">
                <span>Total Price :</span>{" "}
                <span className="Service5YellowText">Rp. 200,000-/+</span>
              </div>
            </div>
            <div className="Service5Action">
              <NavLink
                to="/portfolio"
                className="Service5CustomButton Service5SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service5CustomButton Service5BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service5BoxServices">
            <div className="Service5Detail">
              <h3
                className="Service5ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Vlog
              </h3>
              <div className="Service5BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video (SONY A6000) + Lensa Kit</li>
                  <li>Durasi Liputan +- 6 Jam/Hari</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Drone (1x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Maks 50 File Foto</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                  <li>1 Kamera Foto (Canon) + Lensa Kit</li>
                  <li>Drone (1x terbang)</li>
                </ul>
              </div>
              <div className="Service5Price">
                <span>Total Price :</span>{" "}
                <span className="Service5YellowText">Rp. 285,000-/+</span>
              </div>
            </div>
            <div className="Service5Action">
              <NavLink
                to="/portfolio"
                className="Service5CustomButton Service5SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service5CustomButton Service5BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
          <div className="Service5BoxServices">
            <div className="Service5Detail">
              <h3
                className="Service5ServiceTitle"
                style={{ fontWeight: "600" }}
              >
                Paket Cinematic
              </h3>
              <div className="Service5BoxContent">
                <ul>
                  <li className="uniq-li">VIDEO :</li>
                  <li>1 Kamera Video (SONY A6000) + Lensa Kit</li>
                  <li>Durasi Liputan +- 9 Jam/Hari</li>
                  <li>Animasi 1 Bumper Video (Jika dibutuhkan)</li>
                  <li>Lama Finishing (Maks 2 minggu)</li>
                  <li>1 Kameramen Video + 1 Asisten + 1 Editor</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">FOTO :</li>
                  <li>Unlimited Photo</li>
                  <li>1 Kameramen Foto + 1 Asisten + 1 Editor</li>
                  <li>1 Kamera Foto (Canon) + Lensa Kit</li>
                  <li>Drone (2x terbang)</li>
                </ul>
                <ul>
                  <li className="uniq-li">BONUS :</li>
                  <li>100 GB Free Cloud Storage</li>
                </ul>
              </div>
              <div className="Service5Price">
                <span>Total Price :</span>{" "}
                <span className="Service5YellowText">Rp. 350,000-/+</span>
              </div>
            </div>
            <div className="Service5Action">
              <NavLink
                to="/portfolio"
                className="Service5CustomButton Service4SeeProduct"
              >
                See Product
              </NavLink>
              <NavLink to="/" className="Service5CustomButton Service5BookNow">
                Book Now
              </NavLink>
            </div>
          </div>
        </div>
        {/* REVIEW / ULASAN*/}
        <hr />
        <div className="Service5ReviewAndUlasan">
          <h2
            className="Service5ReviewTitle"
            style={{
              fontWeight: "600",
              marginBottom: "200px",
              marginTop: "50px",
            }}
          >
            Review & Ulasan
          </h2>
          <div className="Service5ReviewsContainer">
            <div className="Service5Review">
              <div className="Service5UserProfile">
                <div className="Service5UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service5ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service5NameUser">
                  <h5> Juan Rodriguez</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @juanr
                  </span>
                </div>
              </div>
              <div
                className="Service5Rating fs-6 text-start"
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
              <div className="Service5Divider"></div>
              <div className="Service5Ulasan">
                <p
                  className="Service5TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  VisioBlend tidak hanya mengabadikan momen, tetapi juga
                  menceritakannya dengan gaya yang unik dan modern. Saya sangat
                  terkesan dengan kreativitas dan ketajaman mereka dalam
                  menangkap esensi setiap momen.
                </p>
              </div>
            </div>
            <div className="Service5ReviewUniq">
              <div className="Service5UserProfile">
                <div className="Service5UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service5ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service5NameUser">
                  <h5>Elena Petrov</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @elenap
                  </span>
                </div>
              </div>
              <div
                className="Service5Rating fs-6 text-start"
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
              <div className="Service5Divider"></div>
              <div className="Service5Ulasan">
                <p
                  className="Service5TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  VisioBlend punya pemahaman mendalam tentang selera dan
                  preferensi generasi Z, karyanya selalu menghadirkan daya tarik
                  yang kuat. Profesionalisme mereka dalam mengatur sesi
                  pemotretan juga patut diacungi jempol.
                </p>
              </div>
            </div>
            <div className="Service5Review">
              <div className="Service5UserProfile">
                <div className="Service5UserPp">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="Service5ProfileIcon"
                    style={{
                      fontSize: "40px",
                      color: "lightgray",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="Service5NameUser">
                  <h5>Kevin Lee</h5>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    @kevin_lee
                  </span>
                </div>
              </div>
              <div
                className="Service5Rating fs-6 text-start"
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
              <div className="Service5Divider"></div>
              <div className="Service5Ulasan">
                <p
                  className="Service5TextUlasan"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  VisioBlend tidak hanya ahli dalam teknik fotografi dan
                  videografi, tetapi juga sangat ramah dan mudah bekerjasama.
                  Hasil akhirnya selalu melebihi harapan saya, membuat saya
                  kembali lagi dan lagi untuk menggunakan jasa mereka.
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

export default Services5;
