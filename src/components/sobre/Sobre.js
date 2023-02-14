import React from 'react';
import './SobreStyles.css';
import chute from '../../assets/chute.jpeg';
import win from '../../assets/win.jpg'
import soco from '../../assets/soco.jpeg'
import time from '../../assets/time.jpeg'

const Sobre = () => {
    return (

        <div name='sobre' className='corpo'>
            <><div className='title'>
                <h1>Sobre a Teixeira Fighting</h1>
            </div>

                <div className="about">

                    <div className="leftone">
                        <p>
                            Somos uma equipe totalmente voltada a arte marcial. Temos sede própria com aulas em turma, e também a domicílio como personal fight. Nossos Instrutores são capacitados e com histórico nas artes marciais, se mantendo influente na área, seja como instrutor ou em competições como atletas, levando o nome da nossa equipe.
                        </p>
                    </div>

                    <div className="right">

                        <div className="img-container">
                            <div className="imgstack topright">
                                <img src={win} className="img" alt="true" />
                            </div>
                            <div className="imgstack topleft">
                                <img src={time} className="img" alt="true" />
                            </div>
                        </div>

                        <div className="img-container">
                            <div className="imgstack bottomright">
                                <img src={soco} className="img" alt="true" />
                            </div>
                            <div className="imgstack bottomleft">
                                <img src={chute} className="img" alt="true" />
                            </div>
                        </div>



                    </div>
                </div></>
        </div>
    )
}

export default Sobre