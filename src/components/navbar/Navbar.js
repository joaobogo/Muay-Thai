import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaUser, FaWhatsapp } from "react-icons/fa";
import "./NavbarStyles.css";
import { Link } from "react-scroll";
import LogoImg from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftside">
        <img classname='mainlogo' src={LogoImg} />
        <a className="title2" href="/">
          Teixeira Fight Club
        </a>
      </div>

      <div className="middleside">
      <a href="/">
          <Link
            activeClass="active"
            to="navbar"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Início
          </Link>
        </a>
        <a href="/">
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Sobre
          </Link>
        </a>
        <a href="/">
          <Link
            activeClass="active"
            to="programas"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Programas
          </Link>
        </a>
        <a href="/">
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Contato
          </Link>
        </a>
      </div>
      <div className="rightside">
        <a className="icon" href="#">
          <FaFacebook />
        </a>
        <a className="icon" href="#">
          <FaInstagram />
        </a>
        <a className="icon" href="#">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
