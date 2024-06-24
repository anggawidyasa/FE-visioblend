import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './portfolio.css';
import iconPortfolio from "./../assets/iconPortfolio.svg";
import image11 from "../assets/image/image11.jpg";
import image12 from "../assets/image/image12.jpg";
import image13 from "../assets/image/image13.jpg";
import image14 from "../assets/image/image14.jpg";
import image15 from "../assets/image/image15.jpg";
import image16 from "../assets/image/image16.jpg";
import image17 from "../assets/image/image17.jpg";
import image18 from "../assets/image/image18.jpg";
import image19 from "../assets/image/image19.jpg";

const Portfolio = () => {
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
                <h1 className="title">Portfolio Design Marketing & Architect</h1>
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
                        <img src={image11} alt="Image 11" onClick={() => handlePhotoClick(image11)} />
                    </div>
                    <div className="photo">
                        <img src={image12} alt="Image 12" onClick={() => handlePhotoClick(image12)} />
                    </div>
                    <div className="photo">
                        <img src={image13} alt="Image 13" onClick={() => handlePhotoClick(image13)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image14} alt="Image 14" onClick={() => handlePhotoClick(image14)} />
                    </div>
                    <div className="photo">
                        <img src={image15} alt="Image 15" onClick={() => handlePhotoClick(image15)} />
                    </div>
                    <div className="photo">
                        <img src={image16} alt="Image 16" onClick={() => handlePhotoClick(image16)} />
                    </div>
                </div>
                <div className="photo-column">
                    <div className="photo">
                        <img src={image17} alt="Image 17" onClick={() => handlePhotoClick(image17)} />
                    </div>
                    <div className="photo">
                        <img src={image18} alt="Image 18" onClick={() => handlePhotoClick(image18)} />
                    </div>
                    <div className="photo">
                        <img src={image19} alt="Image 19" onClick={() => handlePhotoClick(image19)} />
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

export default Portfolio;
