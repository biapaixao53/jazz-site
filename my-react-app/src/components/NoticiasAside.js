import React from "react";


const NOTICIAS = [
"Entrada livre.",
"Ensaios técnicos às 16:00 — presença obrigatoria para os voluntários.",
"Briefing de equipa às 17:15 junto à mesa de som.",
];


export default function NoticiasAside() {
return (
<aside aria-labelledby="titulo-aside">
<h2 id="titulo-aside">Notícias & atualizações</h2>
<ul>
{NOTICIAS.map((n, i) => <li key={i}>{n}</li>)}
</ul>
</aside>
);
}