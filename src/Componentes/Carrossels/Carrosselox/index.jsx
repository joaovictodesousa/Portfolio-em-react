import React from "react";
import "./index.css";
import ox1 from "../../../img/ox1.png";
import ox2 from "../../../img/ox2.png";
import ox3 from "../../../img/ox3.png";
import ox4 from "../../../img/ox4.png";
import ox5 from "../../../img/ox5.png";

function Carrosselox() {
    return (

        <div className="card" id="card_projetosBack">
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ox1} className="d-block w-100" alt="Imagem 1" />
              </div>
              <div className="carousel-item">
                <img src={ox2} className="d-block w-100" alt="Imagem 2" />
              </div>
              <div className="carousel-item">
                <img src={ox3} className="d-block w-100" alt="Imagem 3" />
              </div>
              <div className="carousel-item">
                <img src={ox4} className="d-block w-100" alt="Imagem 4" />
              </div>
              <div className="carousel-item">
                <img src={ox5} className="d-block w-100" alt="Imagem 5" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </a>
          </div>

          <div className="card-body">
            <h5 className="card-title" id="SobreTitulo">OX</h5>
            <p className="card-text" id="paragrafo_card"><b>Empresa:</b> Projeto Pessoal</p>
            <p className="card-text">O sistema OX foi projetado com alta qualidade para atender às necessidades dos
              fazendeiros de gado leiteiro, oferecendo um completo gerenciamento de rebanho. Com ele, você pode
              cadastrar suas vacas
              e bezerros, registrar datas de inseminações, acompanhar os inseminadores, incluir observações
              importantes,
              identificar
              a raça do touro (pai do bezerro) e gerar relatórios abrangentes sobre o seu rebanho.
              <br /><b>Funcionalidades:</b>
            </p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Cadastro de Vacas e Bezerros:</b> O sistema
              permite
              que você
              registre informações detalhadas sobre suas vacas e bezerros, incluindo dados de identificação, como
              nome,
              número de
              registro, idade, histórico de saúde e qualquer outra informação relevante. Isso facilita o
              acompanhamento
              individual
              de cada animal.</p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Datas de Inseminações:</b> Você pode registrar as
              datas de
              inseminação de suas vacas. Isso é fundamental para o controle do ciclo reprodutivo de seu rebanho e para
              garantir
              uma reprodução eficiente.</p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Inseminadores:</b> O sistema permite que você
              acompanhe
              os inseminadores responsáveis pelo procedimento em cada animal. Isso ajuda a monitorar o desempenho dos
              inseminadores
              e a garantir que a inseminação seja realizada por profissionais qualificados.</p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Observações de Inseminação:</b> Você pode
              adicionar
              observações
              importantes relacionadas à inseminação de cada vaca. Essas observações podem incluir informações sobre o
              procedimento,
              condições especiais, ou qualquer detalhe relevante para o cuidado dos </p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Raça do Touro (Pai do Bezerro):</b> Para um
              melhor
              controle genético, o sistema permite que você identifique a raça do touro que foi utilizado na
              inseminação
              de cada vaca. Isso é fundamental para o melhoramento genético do rebanho.</p>

            <p className="card_text_siscau"><b className="negritos_paragrafo">Relatórios em Geral:</b> O sistema oferece a
              capacidade de gerar relatórios abrangentes sobre o seu rebanho. Esses relatórios podem incluir
              informações
              sobre a produção de leite, reprodução, saúde e outras métricas importantes. Isso ajuda a tomar decisões
              informadas sobre a gestão do seu gado leiteiro.</p>

            <p className="card-text">No geral, o sistema OX foi desenvolvido para simplificar o gerenciamento de gado
              leiteiro, proporcionando uma visão detalhada e organizada de todas as informações relacionadas ao seu
              rebanho. Com essas funcionalidades, você pode melhorar a eficiência da sua fazenda e tomar decisões mais
              embasadas para o sucesso da produção de leite.
            </p>

            <p className="card-text" id="paragrafo_card"><b>Stacks:</b> PHP, Laravel, JavaScript, HTML, CSS.</p>
            <p className="card-text" id="paragrafo_card"> <a className="github-link"
                href="https://github.com/joaovictodesousa/OX-newcodetek" target="_blank"
                rel="noopener noreferrer"><i className="fab fa-github"></i>Ver código</a></p>
          </div>
        </div>
    )
}

export default Carrosselox;