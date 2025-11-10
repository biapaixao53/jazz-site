import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Horario from "../components/Horario";
import Links from "../components/Links";
import NoticiasAside from "../components/NoticiasAside";
import Slideshow from "../components/Slideshow";
import MusicosLista from "../components/MusicosLista";
import Inquerito from "../components/Inquerito";
import RespostaInquerito from "../components/RespostaInquerito";
import ResultadosInquerito from "../components/ResultadosInquerito";


export default function App() {
  const navigate = useNavigate();
  const [verAutores, setVerAutores] = useState(false);
return (
<>
<a id="inicio" />
<Header />
<main>
<article>
<header>
<h2>Sobre o concerto</h2>
</header>
<section aria-labelledby="info-geral">
<h3 id="info-geral">Informações gerais</h3>
<p><strong>Data:</strong> 16 de dezembro de 2025</p>
<p><strong>Local:</strong> Auditório JJ Langinha no ISCTE</p>
<p><strong>Artistas:</strong> Trio de Jazz (bateria, trompete, guitarra)</p>
<p>Estamos a reunir <em>voluntários</em> para apoiar a produção: receção aos músicos, apoio técnico simples e logística.</p>
  {}
            <p>
              <button onClick={() => navigate("/form")}>
                Abrir formulário de voluntário
              </button>
            </p>
</section>


<Horario />
<Links />
<Slideshow />
<MusicosLista />
</article>
<NoticiasAside />

</main>


 <footer
        id="contactos"
        style={{ cursor: "pointer" }}
        onClick={() => setVerAutores((v) => !v)}
        title="Clique para alternar contactos/autores"
      >
        {verAutores ? (
          <>
            <h2>Autores</h2>
            <p>Beatriz Paixão (112064)</p>
            <p>— Interfaces Web para a Gestão de Dados —</p>
            <small>(Clique novamente para voltar aos contactos)</small>
          </>
        ) : (
          <>
            <h2>Contactos da organização</h2>
            <address>
              Produção Iscte — Gestão de Eventos
              <br />
              Email:{" "}
              <a href="mailto:producao.concerto@iscte.pt">
                producao.concerto@iscte.pt
              </a>
              <br />
              Telefone: <a href="tel:+351211734555">+351 211 734 555</a>
            </address>
            <small>(Clique no footer para ver os autores)</small>
          </>
        )}
      </footer>
</>
);
}