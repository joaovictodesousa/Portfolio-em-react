import React from "react";
import "./index.css";
import Cabecalho from "../../Componentes/Cabecalho";
import Rodape from "../../Componentes/Rodape";
import imgcap from "../../img/Logo_transparente.png";

function Experiencia() {
  return (
    <main>
      <Cabecalho />
      <section className="animation_chegada">
        <h1 className="titulo_MinhasExperiencias">Minhas experiências</h1>
        <div className="card" id="card">
            <p className="DataDeTrabalho">Set/2022 a Set/2023</p>
            <img src={imgcap} alt="logonovacpexperiencia" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title" id="SobreTitulo_card">Estagiário em desenvolvimento web</h5>

                <p className="card-text">Desenvolvia software inteiramente, desde a concepção até a
                    implementação, de forma independente, e também realizava a manutenção de código legado.
                </p>

                <p className="card-text" id="paragrafo_card"><b>Stacks:</b> PHP, Laravel, JavaScript, HTML, CSS, Bootstrap,
                    MySQL, PostgreSQL
                </p>

            </div>
        </div>
    </section>

    <section className="animation_chegada">
        <div className="container_conhecimento">
            <h1 className="titulo_conhecimentos">Conhecimentos</h1>
            <div className="abilidades">
                <ul className="ListaAbilidade">
                    <li className="ListaDeAbilidade">PHP</li>
                    <li className="ListaDeAbilidade">Laravel</li>
                    <li className="ListaDeAbilidade">HTML</li>
                    <li className="ListaDeAbilidade">CSS</li>
                </ul>
                <ul className="ListaAbilidade">
                    <li className="ListaDeAbilidade">JavaScript</li>
                    <li className="ListaDeAbilidade">React.js</li>
                    <li className="ListaDeAbilidade">Git</li>
                    <li className="ListaDeAbilidade">Github</li>
                </ul>
                <ul className="ListaAbilidade">
                    <li className="ListaDeAbilidade">Bootstrap</li>
                    <li className="ListaDeAbilidade">MySQL</li>
                    <li className="ListaDeAbilidade">PostgreSQL</li>
                </ul>
            </div>
        </div>
    </section>


    <div className="container_conhecimento_celular">
        <h1 className="titulo_conhecimentos">Conhecimentos</h1>
        <div className="abilidades_celular">
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">PHP</li>
                <li className="ListaDeAbilidade_celular">Laravel</li>
            </ul>
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">HTML</li>
                <li className="ListaDeAbilidade_celular">CSS</li>
            </ul>
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">JavaScript</li>
                <li className="ListaDeAbilidade_celular">React.js</li>
            </ul>
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">Git</li>
                <li className="ListaDeAbilidade_celular">Github</li>
            </ul>
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">Bootstrap</li>
                <li className="ListaDeAbilidade_celular">MySQL</li>
            </ul>
            <ul className="ul_celular">
                <li className="ListaDeAbilidade_celular">PostgreSQL</li>
            </ul>
        </div>
    </div>
      <Rodape />
    </main>
  );
}

export default Experiencia;
