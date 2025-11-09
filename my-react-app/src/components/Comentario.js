import React, { useState } from "react";

const INSULTOS = ["idiota", "parvo", "estupido", "burro"];

function normalizar(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function contemInsulto(texto) {
  const t = normalizar(texto);
  return INSULTOS.some((p) => t.includes(p));
}

function Comentario() {
  const [comentario, setComentario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validar = () => {
    if (!comentario.trim()) {
      setMensagem("");
      return;
    }
    if (contemInsulto(comentario)) {
      setComentario("");
      setMensagem("");
    } else {
      setMensagem("comentário aceite");
    }
  };

  return (
    <section>
      <h2>Comentário</h2>
      <label htmlFor="comentario">Escreva o seu comentário:</label>
      <input
        id="comentario"
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button type="button" onClick={validar}>Validar</button>
      <span className="status">{mensagem}</span>
    </section>
  );
}

export default Comentario;
