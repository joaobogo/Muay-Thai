import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div name='footer' className="footer">
      <div className="footerlogo">
        <img src={logo} />
      </div>
      <div className="footercontact">
        <h4>Contatos</h4>
        <p>
          <FaPhone></FaPhone>     +55 41 9206-3723
        </p>
        <p>
          <FaMailBulk></FaMailBulk>     joaoteixeirak1@gmail.com
        </p>

        <div className="media">
          <a href="www.facebook.com">
            <FaFacebook></FaFacebook>
          </a>
          <a href="www.instagram.com">
            <FaInstagram></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
