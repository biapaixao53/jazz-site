import React from "react";
import dados from "../data/musicos.json"; // import estático do JSON
import Musico from "./Musico";


export default class MusicosLista extends React.Component {
render() {
return (
<section aria-labelledby="titulo-musicos">
<h2 id="titulo-musicos">Novos músicos do grupo</h2>
<div className="grade-musicos">
{dados.map((m) => (
<Musico key={m.nome} {...m} />
))}
</div>
</section>
);
}
}