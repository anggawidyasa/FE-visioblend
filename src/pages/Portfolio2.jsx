import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './portfolio.css';
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image21 from "../assets/image/image21.jpg";
import image22 from "../assets/image/image22.jpg";
import image23 from "../assets/image/image23.jpg";
import image24 from "../assets/image/image24.jpg";
import image25 from "../assets/image/image25.jpg";
import image26 from "../assets/image/image26.jpg";
import image27 from "../assets/image/image27.jpg";
import image28 from "../assets/image/image28.jpg";
import image29 from "../assets/image/image29.jpg";

const Portfolio2 = () => {
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
                        <img src={image21} alt="Image 21" onClick={() => handlePhotoClick(image21)} />
                    </div>
                    <div className="photo">
                        <img src={image22} alt="Image 22" onClick={() => handlePhotoClick(image22)} />
                    </div>
                    <div className="photo">
                        <img src={image23} alt="Image 23" onClick={() => handlePhotoClick(image23)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image24} alt="Image 24" onClick={() => handlePhotoClick(image24)} />
                    </div>
                    <div className="photo">
                        <img src={image25} alt="Image 25" onClick={() => handlePhotoClick(image25)} />
                    </div>
                    <div className="photo">
                        <img src={image26} alt="Image 26" onClick={() => handlePhotoClick(image26)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image27} alt="Image 27" onClick={() => handlePhotoClick(image27)} />
                    </div>
                    <div className="photo">
                        <img src={image28} alt="Image 28" onClick={() => handlePhotoClick(image28)} />
                    </div>
                    <div className="photo">
                        <img src={image29} alt="Image 29" onClick={() => handlePhotoClick(image29)} />
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

export default Portfolio2;
