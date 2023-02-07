import React from 'react'
import './ProgramasStyles.css'

function Programas() {
    return (
        <div name='programas' className='programas'>
            <div className='title'>
                <h1>Programas</h1>
            </div>
            <section>
                <div className='descricao'>
                    <p>
                        Na Teixeira Fighting nós criamos treinos personalizados para cada aluno de acordo com o seu objetivo pessoal. Nossos treinos podem ser feito em domicílio, parques ou na nossa academia.
                        Nossos treinos são muito utilizados na perca de peso de uma forma interativa em diferente em cada aula, evitando ter um aula monótona. Nossos treinos duram ao redor de 1 hora, sendo divididos entre alongamentos, cardio e técnica.
                        Mesmo que nossos treinos são utilizados por muitos para a perca de peso, nós tambem somos altamente qualificados para preparar nossos alunos para lutas amadoras ou até mesmo profissionais.
                        Tendo um treino correto e consistente, nós conseguimos ver um progresso incrível em todos alunos, com melhoras na mobilidade, reflexos, defesa pessoal e sáude em geral.
                    </p>
                </div>
                <div className='precos'>
                    <h3>Preços</h3>
                    <br></br>
                    <p>2 vezes por semana ------ R$440/mês</p>
                    <p>3 vezes por semana ------ R$600/mês</p>
                    <p> 5 vezes por semana ------ R$900/mês</p>
                    
                </div>
            </section>
        </div>
    )
}

export default Programas