import React from "react";


const DADOS = [
{ hora: "18:00", musica: "Autumn Leaves", estilo: "Jazz" },
{ hora: "18:15", musica: "Chega de Saudade", estilo: "Bossa Nova" },
{ hora: "18:30", musica: "Mas que Nada", estilo: "Samba" },
{ hora: "18:45", musica: "So What", estilo: "Modal Jazz" },
{ hora: "19:00", musica: "Blues", estilo: "Latin Jazz" },
];


export default function HorarioTable() {
return (
<section id="horario" aria-labelledby="titulo-horario">
<h2 id="titulo-horario">Horário em que serão tocadas as músicas</h2>
<table className="table">
<caption>Programa previsto (hora, tema e estilo)</caption>
<thead>
<tr>
<th scope="col">Hora</th>
<th scope="col">Música</th>
<th scope="col">Estilo</th>
</tr>
</thead>
<tbody>
{DADOS.map((r, i) => (
<tr key={i}>
<td>{r.hora}</td>
<td>{r.musica}</td>
<td>{r.estilo}</td>
</tr>
))}
</tbody>
</table>
</section>
);
}