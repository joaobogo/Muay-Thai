import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './NavbarStyles.css'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }



    return (
        <div className='navbar'>
            <div className="container">
            <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h3>Teixeira Fight Club</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>


                    <li><a href="/"><Link  onClick={handleClose} activeClass="active" to="inicio" spy={true} smooth={true} duration={500}>Inicio</Link></a></li>
                    <li><a href="/"><Link  onClick={handleClose} activeClass="active" to="sobre" spy={true} smooth={true} duration={500}>Sobre</Link>
                    </a></li>
                    <li><a href="/"><Link  onClick={handleClose} activeClass="active" to="programas" spy={true} smooth={true} duration={500}>Programas</Link>
                    </a></li>
                    <li><a href="/"><Link  onClick={handleClose} activeClass="active" to="contato" spy={true} smooth={true} duration={500}>Contato</Link>
                    </a></li>


                    <div className='mobile-menu'>

                        <div className="social-icons2">
                        <a href="https://m.facebook.com/316184332396152/"><FaFacebook className='icon' /></a>
                        <a href="https://instagram.com/teixeira.fight.club?igshid=MDM4ZDc5MmU="><FaInstagram className='icon' /></a>
                        <a href='https://wa.me/554192063723'><FaWhatsapp className='icon' /></a>
                        </div>
                    </div>

                </ul>

                <div className="hamburger" onClick={handleNav} >
                    {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
                </div>

            </div>
        </div>
    )
}

export default Navbar