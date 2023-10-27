import React from "react";
import Cabecalho from "../../Componentes/Cabecalho";
import "./index.css";
import fotolider from "../../img/foto.jpeg";
import Rodape from "../../Componentes/Rodape";

function Sobremim() {
  return (
    <main>
      <Cabecalho />
      <section className="apresentacao">
        <section className="apresentacao__conteudo">
          <h1 className="apresentacao__sobre">SOBRE MIM</h1>
          <p className="apresentacao__conteudo__texto_local">
            ° Brasília, Distrito Federal
          </p>
          <p className="apresentacao__conteudo__texto">
            Olá, sou João Victor, desenvolvedor Full Stack com experiência nas
            seguintes tecnologias: HTML, CSS, JavaScript, React.js, PHP,
            Laravel, Git, GitHub, MySQL e PostgreSQL.
          </p>
          <p className="apresentacao__conteudo__texto">
            Minha abordagem para o desenvolvimento de software é centrada na
            qualidade, no cumprimento dos prazos e na colaboração com a equipe.
            Sou apaixonado por aprender novas tecnologias e acompanhar as
            melhores práticas de desenvolvimento.
          </p>

          <p className="apresentacao__conteudo__texto">
            Estou sempre em busca de desafios que me permitam aprimorar minhas
            habilidades e contribuir para projetos inovadores. Tenho facilidade
            de adaptação e sou capaz de trabalhar em equipe, colaborando de
            forma efetiva para alcançar os objetivos do projeto.
          </p>
        </section>
        <img src={fotolider} alt="foto" className="foto_lider" />
      </section>

      <Rodape />
    </main>
  );
}

export default Sobremim;
