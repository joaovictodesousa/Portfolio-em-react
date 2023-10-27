import React from "react";
import "./index.css";
import Cabecalho from "../../Componentes/Cabecalho";
import Tituloinicial from "../../Componentes/Tituloinicial";
import Rodape from "../../Componentes/Rodape";

function Inicio() {
  return (
    <main>
        <Cabecalho />
        <Tituloinicial />
        <Rodape />
    </main>
  );
}

export default Inicio;
