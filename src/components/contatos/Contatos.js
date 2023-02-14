import React from 'react'
import './ContatosStyles.css'

function Contatos() {
    return (
        <div name='contato' className='contact'>
            
                <div className='top'>
                    <h1>Fale Conosco</h1>
                </div>

                <form>
                    <div className='inputlabel'>
                        <label>Nome:</label>
                        <input type='text' placeholder='Escreva seu nome' />
                    </div>
                    <div className='inputlabel'>
                        <label>Email:</label>
                        <input type='email' placeholder='Escreva seu email' />
                    </div>
                    <div className='inputlabel'>
                        <label>Mensagem:</label>
                        <textarea cols='30' rows='5' placeholder='Escreva sua mensagem' />
                    </div>

                    <div className='bottom'>
                        <button className='btn btn-dark'>Enviar</button>
                    </div>
                </form>

            </div>
    
    )
}

export default Contatos