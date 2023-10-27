import React, { useState, useEffect } from "react";
import "./index.css";
import imggit from "../../img/github.png";
import fotolider from "../../img/foto.jpeg";
import imglinkedin from "../../img/linkedin.png";
import imgemail from "../../img/email.png";

function Tituloinicial() {
  const [subtitulo, setSubtitulo] = useState("");
  const texto = "Acesse minhas redes :)";
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador < texto.length) {
      const timer = setTimeout(() => {
        setSubtitulo(subtitulo + texto.charAt(contador));
        setContador(contador + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setSubtitulo(""); // Limpa o conteúdo
        setContador(0); // Reinicia a animação
      }, 2500); // Tempo de pausa após digitar todo o texto
    }
  }, [contador, subtitulo]);

  return (
    <main className="apresentacao">
      <section className="apresentacao__conteudo">
        <h1 className="apresentacao__conteudo__titulo">
          Eleve seu negócio digital a outro nível
          <strong className="titulo-destaque"> com um Full Stack de qualidade!</strong>
        </h1>
        <p className="apresentacao__conteudo__texto">
          Olá! Sou João Victor, desenvolvedor Full Stack com especialidade em HTML | CSS | JavaScript | React.js | PHP | Laravel | Bootstrap | MySQL | PostgreSQL | Git | Github.
        </p>
        <div className="apresentacao__links">
          <h2 className="apresentacao__links__subtitulo">{subtitulo}</h2>
          <a className="apresentacao__links__link" href="https://github.com/joaovictodesousa">
            <img src={imggit} alt="" />
            Github
          </a>
          <a className="apresentacao__links__link" href="https://linkedin.com/in/joão-victor-0960b4243">
            <img src={imglinkedin} alt="" />
            linkedin
          </a>
          <a className="apresentacao__links__link" href="mailto:joaovictorsr26@gmail.com">
            <img src={imgemail} alt="" className="email" />
            Email
          </a>
        </div>
      </section>
      <img src={fotolider} alt="fotolider" className="foto_lider" />
    </main>
  );
}

export default Tituloinicial;
