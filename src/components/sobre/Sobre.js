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
                        Sou João Teixeira. Treino Muay Thai à mais de 10 anos, sou nivel ponta azul escura, e competidor atualmente de mma.
                        Sou da equipe CM System, uma das maiores e melhores do Brasil.
                        Busco aprimorar sempre meu estilo de luta, coloco em prática também outros estilos como jiu-jítsu onde sou blue belt, e wrestling para me tornar um destaque no mma.
                        Dou aulas para manter meus treinos e também por que amo o esporte.
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