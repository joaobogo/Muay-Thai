import React from "react";
import "./BenefitsStyles.css";

const Benefits = () => {
  return (
    <div className="benefits">
      <h2>Benefícios do Muay Thai</h2>
      <div className="mainbenefits">
        <div className="circle"> <p>Melhora do Condicionamento Físico</p></div>
        <div className="circle"> <p>Contribui para a perca de peso</p></div>
        <div className="circle"> <p>Desenvolver disciplina, concentração e autoestima</p></div>
        <div className="circle"> <p>Ajuda a amenizar o estresse e a ansiedade</p></div>
        <div className="circle"> <p>Contribui para o bom funcionamento do sistema imunológico</p></div>
      </div>
    </div>
  );
};

export default Benefits;
