import "./FooterStyles.css";

import React from 'react'

import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div className="city">
                        <p>Curitiba, PR</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +55 41 9206-3723</h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            joaoteixeirak1@gmail.com</h4>
                    </div>

                    <div className="social">
                    <a href="https://m.facebook.com/316184332396152/"><FaFacebook  size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    <a href="https://instagram.com/teixeira.fight.club?igshid=MDM4ZDc5MmU="><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
                </div>
            </div>
    
    )
}

export default Footer