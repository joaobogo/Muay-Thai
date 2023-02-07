import React from 'react'
import './ContatosStyles.css'

function Contatos() {
    return (
        <div name='contato' className='contact'>
            
                <div className='top'>
                    <h1>Fale Comigo</h1>
                </div>

                <form>
                    <div>
                        <label>Nome:</label>
                        <input type='text' placeholder='Escreva seu nome' />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='email' placeholder='Escreva seu email' />
                    </div>
                    <div>
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