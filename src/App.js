import React from "react";
import Jt from './components/jt/Jt';
import Sobre from './components/sobre/Sobre';
import Navbar from "./components/navbar/Navbar";
import Programas from "./components/programas/Programas";
import Contatos from "./components/contatos/Contatos";
import Footer from "./components/footer/Footer";
import "./index.css";
import WhatsappBtn from "./components/whatsappbtn/WhatsappBtn";
import Benefits from "./components/beneficios/Benefits";
import Ad from "./components/ad/Ad";



function App() {
  return (
    <>
      <Navbar />
      <Jt />
      <Sobre />
      <Benefits/>
      <Ad/>
      <Programas />
      {/* <Contatos /> */}
      <WhatsappBtn/>
       <Footer /> 
    </>
  );
}

export default App;
