import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './portfolio.css';
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image41 from "../assets/image/image41.jpg";
import image42 from "../assets/image/image42.jpg";
import image43 from "../assets/image/image43.jpg";
import image44 from "../assets/image/image44.jpg";
import image45 from "../assets/image/image45.jpg";
import image46 from "../assets/image/image46.jpg";
import image47 from "../assets/image/image47.jpg";
import image48 from "../assets/image/image48.jpg";
import image49 from "../assets/image/image49.jpg";

const Portfolio4 = () => {
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
                <h1 className="title">Portfolio Commercial Photo & Video</h1>
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
                        <img src={image41} alt="Image 41" onClick={() => handlePhotoClick(image41)} />
                    </div>
                    <div className="photo">
                        <img src={image42} alt="Image 42" onClick={() => handlePhotoClick(image42)} />
                    </div>
                    <div className="photo">
                        <img src={image43} alt="Image 43" onClick={() => handlePhotoClick(image43)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image44} alt="Image 44" onClick={() => handlePhotoClick(image44)} />
                    </div>
                    <div className="photo">
                        <img src={image45} alt="Image 45" onClick={() => handlePhotoClick(image45)} />
                    </div>
                    <div className="photo">
                        <img src={image46} alt="Image 46" onClick={() => handlePhotoClick(image46)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image47} alt="Image 47" onClick={() => handlePhotoClick(image47)} />
                    </div>
                    <div className="photo">
                        <img src={image48} alt="Image 48" onClick={() => handlePhotoClick(image48)} />
                    </div>
                    <div className="photo">
                        <img src={image49} alt="Image 49" onClick={() => handlePhotoClick(image49)} />
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

export default Portfolio4;
