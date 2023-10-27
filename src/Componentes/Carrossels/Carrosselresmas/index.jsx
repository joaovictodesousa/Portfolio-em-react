import React from "react";
import "./index.css";
import resmas1 from "../../../img/remas1.jpeg";
import resmas2 from "../../../img/resmas2.jpeg";
import resmas3 from "../../../img/resmas3.jpeg";
import resmas4 from "../../../img/resmas4.jpeg";

function Carrosselresmas() {
  return (
    <div className="ContainerProBack2">
      <div className="card" id="card_projetosBack2">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={resmas1}
                id="img_carrossel"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={resmas2}
                id="img_carrossel"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={resmas3}
                id="img_carrossel"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={resmas4}
                id="img_carrossel"
                className="d-block"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <br />
        <br />
        <div className="separatudo">
          <div className="card-body">
            <h5 className="card-title" id="SobreTitulo">
              CONTROLE DE RESMAS
            </h5>
            <p className="card-text" id="paragrafo_card">
              <b>Empresa:</b> Companhia Urbanizadora da Nova Capital do Brasil
              (NOVACAP)
            </p>
            <p className="card-text">
              O sistema de CONTROLE DE RESMAS foi criado com o objetivo de
              reduzir significativamente o consumo de resmas de papel,
              resultando em economia de recursos. <br />
              Recursos do CONTROLE DE RESMAS incluem:
            </p>
            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Filtragem Avançada:</b> Você
              pode filtrar as resmas com base em diversos critérios, como tipo
              de papel, tamanho, marca, data de aquisição, quantidade
              disponível, etc. Isso torna mais fácil encontrar as resmas
              específicas que você precisa sem perder tempo procurando
              manualmente.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Atualização de Dados:</b> A
              capacidade de atualizar as informações sobre as resmas é crucial.
              Você pode modificar dados como a quantidade atual, o fornecedor ou
              o status da resma à medida que ela é usada ou reposicionada.
            </p>
            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Histórico de Uso:</b> O sistema
              mantém um histórico de todas as transações relacionadas às resmas,
              como quando foram usadas, quem as utilizou e para quais projetos.
              Isso ajuda a rastrear o consumo e a alocação de papel ao longo do
              tempo.
            </p>
            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Geração de Relatórios:</b> Essa
              função permite criar relatórios personalizados com base nas
              informações armazenadas. Os relatórios podem incluir dados sobre
              consumo mensal, custos associados, previsões de reposição e até
              mesmo análises de sustentabilidade, mostrando o impacto ambiental
              da utilização de papel.
            </p>

            <br />
            <p className="card-text" id="paragrafo_card">
              <b>Stacks:</b> PHP, Laravel, JavaScript, HTML, CSS.
            </p>
            <p className="card-text" id="paragrafo_card">
              {" "}
              <a
                className="github-link"
                href="https://github.com/joaovictodesousa/Controle-de-resmas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>Ver código
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrosselresmas;
