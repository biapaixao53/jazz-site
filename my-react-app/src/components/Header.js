import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
const [visivel, setVisivel] = useState(true);
return (
<header>
<h1>Trio de Jazz no Iscte</h1>



<nav aria-label="Navegação principal">
<ul>
<li><Link to="/">Início</Link></li>
 <li><Link to="/form">Candidatura a Voluntário</Link></li>
<li><a href="#horario">Horário das Músicas</a></li>
<li><a href="#links">Links associados</a></li>
<li><a href="#contactos">Contactos</a></li>
</ul>
</nav>


<figure>
<a href="https://www.iscte-iul.pt/event/3096/trio-de-jazz-concerto" target="_blank" rel="noreferrer noopener">
<img
src={process.env.PUBLIC_URL + "/imagens/img1.png"}
alt="Imagem ilustrativa de um trio de jazz em palco"
width={900}
style={{ visibility: visivel ? "visible" : "hidden" }}
onMouseEnter={() => setVisivel(false)}
onMouseLeave={() => setVisivel(true)}
/>
</a>
<figcaption>
Clique na imagem para abrir a página oficial do concerto no site do Iscte.
</figcaption>
</figure>
</header>
);
}