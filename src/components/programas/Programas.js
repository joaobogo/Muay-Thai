import React from "react";
import "./ProgramasStyles.css";
import soco from "../../assets/soco.jpeg";
import time from "../../assets/time.jpeg";

const Programas = () => {
  return (
    <div className="programas">
      <h2>Nossos Programas</h2>
      <div className="main">
        <p>
          Nosso estilo compreende o seu objetivo pessoal. Trabalhamos de uma
          forma com que você possa alcançar aquilo que busca na prática da arte
          marcial, seja preparação física, emagrecimento, tonificação muscular,
          coordenação motora, domínio técnico, competição etc. treinos sempre
          bem preparados para que você tenha um ótima experiência, sem ter algo
          monótono e desinteressante. Nossos treinos tem um período tem o
          período de 1hr. Qualificando assim os praticantes e também nossos
          atletas, tendo um treino correto e consistente, conseguimos ver o
          progresso em todos os nossos alunos, com melhoras na mobilidade,
          reflexos, defesa pessoal, técnica e saúde em geral.
        </p>
        <div className="images">
        <img src={time}></img>
        <img className="mobileimg" src={soco}></img>
        </div>
        
      </div>
    </div>
  );
};

export default Programas;
