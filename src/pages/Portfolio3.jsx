import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './portfolio.css';
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image31 from "../assets/image/image31.jpg";
import image32 from "../assets/image/image32.jpg";
import image33 from "../assets/image/image33.jpg";
import image34 from "../assets/image/image34.jpg";
import image35 from "../assets/image/image35.jpg";
import image36 from "../assets/image/image36.jpg";
import image37 from "../assets/image/image37.jpg";
import image38 from "../assets/image/image38.jpg";
import image39 from "../assets/image/image39.jpg";

const Portfolio3 = () => {
    const [enlargedPhoto, setEnlargedPhoto] = useState(null);

    const handlePhotoClick = (src) => {
        setEnlargedPhoto(src);
    };

    const closeModal = () => {
        setEnlargedPhoto(null);
    };

    return (
        <div>
            <div className="logo-container">
                <img src={iconPortfolio} alt="Logo" className="logo" />
            </div>
            <div className="Judul">
                <h1 className="title">Portfolio Ceremonial Photo & Video</h1>
            </div>
            <div className="nvbar-container">
                <div className="nvbar">
                    <div className="nvbar-left">
                        <button className="oval-button" onClick={() => window.history.back()}>Back</button>
                    </div>
                    <div className="nvbar-right">
    <NavLink to="/portfolio" activeClassName="active-link"><span>Design Marketing & Architect</span></NavLink>
    <NavLink to="/Portfolio2" activeClassName="active-link"><span>Commercial</span></NavLink>
    <NavLink to="/Portfolio3" activeClassName="active-link"><span>Ceremonial</span></NavLink>
    <NavLink to="/Portfolio4" activeClassName="active-link"><span>Gen-Z</span></NavLink>
</div>
                </div>
            </div>
            <div className="photo-grid">
                <div className="photo-column">
                    <div className="photo">
                        <img src={image31} alt="Image 31" onClick={() => handlePhotoClick(image31)} />
                    </div>
                    <div className="photo">
                        <img src={image32} alt="Image 32" onClick={() => handlePhotoClick(image32)} />
                    </div>
                    <div className="photo">
                        <img src={image33} alt="Image 33" onClick={() => handlePhotoClick(image33)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image34} alt="Image 34" onClick={() => handlePhotoClick(image34)} />
                    </div>
                    <div className="photo">
                        <img src={image35} alt="Image 35" onClick={() => handlePhotoClick(image35)} />
                    </div>
                    <div className="photo">
                        <img src={image36} alt="Image 36" onClick={() => handlePhotoClick(image36)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image37} alt="Image 37" onClick={() => handlePhotoClick(image37)} />
                    </div>
                    <div className="photo">
                        <img src={image38} alt="Image 38" onClick={() => handlePhotoClick(image38)} />
                    </div>
                    <div className="photo">
                        <img src={image39} alt="Image 39" onClick={() => handlePhotoClick(image39)} />
                    </div>
                </div>
            </div>

            {enlargedPhoto && (
                <div className="photo-modal" onClick={closeModal}>
                    <span className="close-modal">&times;</span>
                    <img src={enlargedPhoto} alt="Enlarged" />
                </div>
            )}
        </div>
    );
}

export default Portfolio3; 
