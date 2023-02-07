import React,{useState} from 'react';
import { Link } from 'react-scroll';
import './JtStyles.css'


function Jt() {

    const [nav, setNav] = useState(false)
    const handleClose = () => {
        setNav(!nav)
    }


    return (
        <div name='inicio' className='power'>
            <div className='container'>
                <div className='top'>
                    <h1>Aprenda a arte do Muay Thai e Boxe</h1>
                </div>
                <div className='bottom'>
                 <a href="/"><Link className='btn mainbtn' onClick={handleClose} activeClass="active" to="programas" spy={true} smooth={true} duration={500}>Programas</Link></a>
                    <a href="/"><Link className='btn mainbtn' onClick={handleClose} activeClass="active" to="contato" spy={true} smooth={true} duration={500}>Contato</Link></a>
                
                </div>
            </div>
        </div>
    )
}

export default Jt