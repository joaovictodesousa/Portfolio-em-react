import React from "react";
import './index.css';

function Cabecalho() {
    return (
        <main>
        <nav class="navbar navbar-expand-lg" id="cabecalho">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="button_menu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home_link_colocarcor"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/sobremim">
                    Sobre mim
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/experiencia">
                    Experiências
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/projetos">
                    Projetos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    )
}

export default Cabecalho;