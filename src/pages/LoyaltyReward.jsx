import React from 'react';
import {
    FaShoppingBag,
    FaPhone,
    FaGlobe,
    FaFacebookF,
    FaInstagram,
    FaEnvelope,
    FaTwitter,
    FaRegCommentDots,
    FaBirthdayCake,
    FaUserFriends,
    FaPenAlt
} from 'react-icons/fa';
import { FaTruck, FaPercentage, FaTag, FaGift, FaStar } from 'react-icons/fa';
import iconloyalty from '../assets/Loyalty.svg';
import './loyalty.css';

function LoyaltyReward() {
    const pointsData = [
        { icon: <FaShoppingBag className="point-item-icon" />, text: 'Make a purchase', points: '150 points' },
        { icon: <FaPhone className="point-item-icon" />, text: 'Contact Us', points: '100 points' },
        { icon: <FaGlobe className="point-item-icon" />, text: 'Visit Website', points: '25 points' },
        { icon: <FaFacebookF className="point-item-icon" />, text: 'Like us on Facebook', points: '100 points' },
        { icon: <FaInstagram className="point-item-icon" />, text: 'Follow us on Instagram', points: '100 points' },
        { icon: <FaEnvelope className="point-item-icon" />, text: 'Subscribe to our mailing list', points: '100 points' },
        { icon: <FaTwitter className="point-item-icon" />, text: 'Follow us on Twitter', points: '100 points' },
        { icon: <FaRegCommentDots className="point-item-icon" />, text: 'Write a product review', points: '100 points' },
        { icon: <FaBirthdayCake className="point-item-icon" />, text: 'Happy birthday', points: '250 points' },
        { icon: <FaUserFriends className="point-item-icon" />, text: 'Refer a friend', points: '500 points' },
        { icon: <FaPenAlt className="point-item-icon" />, text: 'Write a product review in your Sosmed', points: '150 points' },
    ];

    const rewardsData = [
        { icon: <FaTruck className="point-item-icon" />, text: 'Free shipping', points: '500 points' },
        { icon: <FaPercentage className="point-item-icon" />, text: 'Discount 5%', points: '1000 points' },
        { icon: <FaTag className="point-item-icon" />, text: '10% Discount', points: '2500 points' },
        { icon: <FaGift className="point-item-icon" />, text: 'Free 100GB Cloud Storage', points: '3500 points' },
        { icon: <FaPercentage className="point-item-icon" />, text: '25% Discount', points: '7000 points' },
        { icon: <FaStar className="point-item-icon" />, text: 'Free 1x Services', points: '10000 points' },
    ];

    const tiersData = [
        {
            tier: "Bronze",
            points: "1000 Points",
            benefits: ["Free Shipping Hard Copy Product", "Discount 5%"],
            tierNumber: 1,
        },
        {
            tier: "Silver",
            points: "5000 Points",
            benefits: ["Free Shipping Hard Copy Product", "Discount 15%", "Free 100GB Cloud Storage"],
            tierNumber: 2,
        },
        {
            tier: "Gold",
            points: "10,000 Points",
            benefits: ["Free Shipping Hard Copy Product", "Discount 40%", "Free 100GB Cloud Storage", "Free 1x Services"],
            tierNumber: 3,
        }
    ];

    return (
        <div className='App'>
            <div
                className="Loyaltysection"
                style={{ justifyContent: "center" }}
            >
                <img
                    src={iconloyalty}
                    alt="iconloyalty"
                    className="iconCustom"
                    style={{ height: "80px" }}
                />
                <h1
                    className="titleCustom fw-bold"
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "50px",
                        margin: "20px 0",
                    }}
                >
                    Loyalty Rewards
                </h1>
                <div className="rewardContent">
                    <p className="rewardText">
                        Join Loyalty Rewards and get rewarded while you order.<br />
                        You'll get <span className="highlight">150 points</span> for first order. What are you waiting for?
                    </p>
                    <div className="divider"></div>
                    <button className="shopButton">Shop now</button>
                </div>
            </div>

            <div className="scrollContainer">
                <section className="sectionContainer">
                    <h2 className="sectionTitle fw-bold">Earn Points</h2>
                    <div className="earn-points-container">
                        {pointsData.map((item, index) => (
                            <div key={index} className="point-item">
                                {item.icon}
                                <p className="point-item-text">{item.text}</p>
                                <p className="point-item-points">{item.points}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* <section className="sectionContainer">
                    <h2 className="sectionTitle fw-bold">Earn Points</h2>
                    <div className="gridContainer">
                        {pointsData.map((item, index) => (
                            <div className="gridItem" key={index}>
                                <div className="icon">{item.icon}</div>
                                <p>{item.text}</p>
                                <p>{item.points}</p>
                            </div>
                        ))}
                    </div>
                </section> */}

<section className="sectionContainer">
            <h2 className="sectionTitle fw-bold">Rewards</h2>
            <div className="earn-points-container">
                {rewardsData.map((item, index) => (
                    <div key={index} className="point-item">
                        {item.icon}
                        <p className="point-item-text">{item.text}</p>
                        <p className="point-item-points">{item.points}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="sectionContainer">
            <h2 className="sectionTitle fw-bold">Tiers</h2>
            <div className="tiers-container">
                {tiersData.map((tier, index) => (
                    <div key={index} className={`tier-item tier-${tier.tier.toLowerCase()}`}>
                        <div className="tier-header">
                            <p className="tier-number">{tier.tierNumber}</p>
                            <h3 className="tier-title">{tier.tier}</h3>
                            <p className="tier-points">{tier.points}</p>
                        </div>
                        <div className="tier-benefits">
                            <p className="benefit-label">Benefit :</p>
                            {tier.benefits.map((benefit, i) => (
                                <p key={i} className="benefit">{benefit}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

                <section className="sectionContainer">
                    <h2 className="sectionTitle fw-bold">Claim Your Rewards</h2>
                    <div className='reward-form-container'>
                        <form className="rewardForm">
                            <div className="inputRow">
                                <input type="text" className="halfWidth" placeholder="First Name" />
                                <input type="text" className="halfWidth" placeholder="Last Name" />
                            </div>
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone Number" />
                            <textarea placeholder="Your message"></textarea>
                            <button type="submit" className="submitButton">Claim Your Rewards</button>
                        </form>
                    </div>
                </section>

                <div className='contact-container'>
                    <div className="contact-info-wrap">
                        <h1
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Contact Us{" "}
                            <span
                                className="custom-highlight"
                                style={{
                                    color: "#bf9b30",
                                    fontFamily: "'Outfit', sans-serif",
                                    fontWeight: "bold",
                                }}
                            >
                                Today
                            </span>
                        </h1>
                        <p style={{ marginTop: "20px" }}>
                            We will contact you and draw up requirements for the project and
                            estimate.
                        </p>

                        <div className="text-wrap-contactInfo">
                            <p className="text-contactInfo">
                                {/* <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "} */}
                                <span style={{ fontWeight: "bold" }}>Email</span>
                                <br />
                                <span className="custom-highlight">
                                    visioblendbali@gmail.com
                                </span>
                            </p>
                        </div>
                        <div className="text-wrap-contactInfo">
                            <p className="text-contactInfo">
                                {/* <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "} */}
                                <span style={{ fontWeight: "bold" }}>Phone</span>
                                <br />
                                <span className="custom-highlight">+62 857 3814 4820</span>
                            </p>
                        </div>
                        <div className="text-wrap-contactInfo">
                            <p className="text-contactInfo">
                                {/* <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ color: "#bf9b30", marginRight: "5px" }}
                  />{" "} */}
                                <span style={{ fontWeight: "bold" }}>Address</span>
                                <br />
                                <span className="custom-highlight">
                                    Jl. Kapten Agung No.1, Denpasar
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoyaltyReward;