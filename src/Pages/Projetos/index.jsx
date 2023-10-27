import React from "react";
import "./index.css"
import Cabecalho from "../../Componentes/Cabecalho";
import Carrossels from "../../Componentes/Carrossels"
import Rodape from "../../Componentes/Rodape";
import Tituloprojetosfull from "../../Componentes/Tituloprojetosfull";

function Projetos() {
  return (
    <main>
      <header>
      <Cabecalho />
      </header>
      <div className="container_cardisprimario">
      <Tituloprojetosfull />
      <br /><br />
      <Carrossels />
      </div>
      <Rodape />
    </main>
  );
}

export default Projetos;
