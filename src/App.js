import React from "react";
import Jt from './components/jt/Jt';
import Sobre from './components/sobre/Sobre';
import Navbar from "./components/navbar/Navbar";
import Programas from "./components/programas/Programas";
import Contatos from "./components/contatos/Contatos";
import Footer from "./components/footer/Footer";
import "./index.css";



function App() {
  return (
    <>
      <Navbar />
      <Jt />
      <Sobre />
      <Programas />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
