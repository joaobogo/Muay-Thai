import React from "react";
import WhatsApp from "../../assets/WhatsApp.png";
import "./WhatsappBtnStyles.css";

    function WhatsappBtn() {
      return (
        <div>
          <a href="https://wa.me/554192063723" className="whatsappbtn">
            <img className="imgbutton"  alt="Whatsapp Logo" src={WhatsApp} />
          </a>
        </div>
      );
    }
    
    export default WhatsappBtn;




    