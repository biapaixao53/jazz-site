import React from "react";


export default class Musico extends React.Component {
constructor(props) {
super(props);
this.state = { verVideo: false };
}


alternarVideo = () => this.setState({ verVideo: !this.state.verVideo });


render() {
const { nome, imagem, instrumentosestilos, descricao, urlVideo, data } = this.props;
const { verVideo } = this.state;


return (
<article className="musico" aria-labelledby={`titulo-${nome}`}>
<h3 id={`titulo-${nome}`}>{nome}</h3>
<p><strong>Instrumentos/estilos:</strong> {instrumentosestilos}</p>
<p><strong>Entrou no grupo:</strong> {data}</p>
<figure>
<img
src={process.env.PUBLIC_URL + imagem}
alt={`Foto de ${nome}`}
width={280}
onClick={this.alternarVideo}
style={{ cursor: "pointer" }}
/>
<figcaption>Clique na imagem para {verVideo ? "esconder" : "ver"} o vídeo.</figcaption>
</figure>


<p>{descricao}</p>


{}
{verVideo && (
<div className="video-wrapper" aria-label={`Vídeo de ${nome}`}>
<iframe
width="420"
height="236"
src={urlVideo}
title={`YouTube – ${nome}`}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
/>
</div>
)}
</article>
);
}
}