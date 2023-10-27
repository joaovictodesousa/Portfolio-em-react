import React from "react";
import "./index.css";
import siscau1 from "../../../img/siscau1.jpeg";
import siscau2 from "../../../img/siscau2.jpeg";
import siscau3 from "../../../img/siscau3.jpeg";
import siscau4 from "../../../img/siscau4.jpeg";
import siscau5 from "../../../img/siscau5.jpeg";

function Carrosselsis() {
  return (

        <main className="card" id="card_projetosBack">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={siscau1}
                  className="d-block"
                  id="img_carrosel2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={siscau2}
                  className="d-block"
                  id="img_carrosel2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={siscau3}
                  className="d-block"
                  id="img_carrosel2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={siscau4}
                  className="d-block"
                  id="img_carrosel2"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={siscau5}
                  className="d-block"
                  id="img_carrosel2"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                id="mudarcor"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                id="mudarcor"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <br />
          <br />
          <br />
          <div className="card-body">
            <h5 className="card-title" id="SobreTitulo">
              SISCAU
            </h5>
            <p className="card-text" id="paragrafo_card">
              <b>Empresa:</b> Companhia Urbanizadora da Nova Capital do Brasil
              (NOVACAP)
            </p>
            <p className="card_text_siscau">
              Apresento o SISCAU, um sistema de controle financeiro exclusivo,
              desenvolvido por mim.
            </p>
            <p className="card_text_siscau">
              O SISCAU (Sistema de Controle de Calções) é uma aplicação
              personalizada desenvolvida internamente pela Nova Cap para
              simplificar e aprimorar o gerenciamento de calções. Este sistema é
              construído usando a robusta estrutura PHP Laravel e representa uma
              modernização significativa em relação a um sistema anterior que
              foi criado há uma década. Recursos do SISCAU incluem:
            </p>
            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Cadastro de Guias:</b> O SISCAU
              permite o cadastro eficiente de guias de calções, tornando o
              processo simples e organizado.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Filtragem Avançada:</b> Com
              poderosas opções de filtragem, os colaboradores da Nova Cap podem
              localizar rapidamente as guias desejadas com base em critérios
              específicos.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Pesquisa Integrada:</b> Uma
              função de pesquisa facilita a busca de guias de calções com base
              em informações-chave.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Impressão de Guias:</b> O
              sistema oferece a capacidade de imprimir guias de calções para
              referência física ou arquivamento.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Relatórios Personalizados:</b>{" "}
              Os usuários autorizados podem criar relatórios personalizados para
              análise financeira e acompanhamento de calções.
            </p>

            <p className="card_text_siscau">
              <b className="negritos_paragrafo"> Controle Financeiro:</b> O
              SISCAU oferece uma funcionalidade abrangente de controle
              financeiro, permitindo o registro de baixas de calções pagos e não
              pagos.
            </p>

            <p className="card_text_siscau">
              Essa atualização do sistema representa um salto na eficiência e na
              capacidade de análise de dados em comparação com a versão
              anterior. O SISCAU é uma ferramenta valiosa para a Nova Cap,
              simplificando o processo de gerenciamento e melhorando a tomada de
              decisões financeiras, enquanto mantém a privacidade e a segurança
              dos dados internos.
            </p>
            <p className="card_text_siscau" id="paragrafo_card">
              <b>Stacks:</b> PHP, Laravel, JavaScript, HTML, CSS.
            </p>
            <br />
            <p className="card_text_siscau" id="paragrafo_card">
              {" "}
              <a
                className="github-link"
                href="https://github.com/joaovictodesousa/SISCAU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>Ver código
              </a>
            </p>
          </div>
        </main>
  );
}

export default Carrosselsis;
