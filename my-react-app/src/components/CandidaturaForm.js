import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Lista base (podes estender/ajustar à tua do 2.º exercício)
const INSULTOS = [
  "abécula","abentesma","achavascado","alimária","cacóstomo","cuarra",
  "estólido","estroso","estultilóquio","nefelibata","néscio","pechenga",
  "sevandija","somítico","tatibitate","cheché","xexelento"
];

// função simples que verifica se algum termo proibido aparece no texto
function contemInsulto(texto) {
  const t = (texto || "").toLowerCase();
  return INSULTOS.some((p) => t.includes(p.toLowerCase()));
}

export default function CandidaturaForm() {
  const navigate = useNavigate();

  // state dos campos (ponto 6 do enunciado)
  const [nome, setNome] = useState("");
  const [contacto, setContacto] = useState("");
  const [dia, setDia] = useState("");
  const [comentario, setComentario] = useState("");

  // validação “ao escrever” (ponto 7 do enunciado)
  const temProibidas = useMemo(() => contemInsulto(comentario), [comentario]);

  // submit com popup (ponto 8 do enunciado)
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado ${nome} pela sua inscrição, em breve será contactado pela banda.`);
    // limpa e volta à homepage
    setNome(""); setContacto(""); setDia(""); setComentario("");
    navigate("/");
  };

  const reset = () => {
    setNome(""); setContacto(""); setDia(""); setComentario("");
  };

  return (
    <main role="main" className="container">
      <section id="candidatura" aria-labelledby="h-candidatura">
        <h1 id="h-candidatura">Formulário de Voluntário</h1>

        <form onSubmit={onSubmit}>
          <fieldset>
            <legend>Dados do voluntário</legend>

            <div className="campo">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="contacto">Contacto</label>
              <input
                id="contacto"
                name="contacto"
                type="tel"
                placeholder="+351 9xx xxx xxx"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="dia">Disponibilidade (dia/horário)</label>
              <input
                list="opcoes-dia"
                id="dia"
                name="dia"
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                placeholder="Ex.: 18 dezembro às 20:30"
                required
              />
              <datalist id="opcoes-dia">
                <option value="18 dezembro às 15 00" />
                <option value="17 dezembro ás 19 30" />
                <option value="18 dezembro às 20 30" />
              </datalist>
            </div>
          </fieldset>

          <fieldset>
            <legend>Comentário</legend>
            <div className="campo">
              <label htmlFor="comentario">Mensagem</label>
              <textarea
                id="comentario"
                name="comentario"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                rows={5}
                placeholder="Escreve aqui…"
              />
              {comentario && temProibidas && (
                <p role="alert" style={{ color: "crimson", marginTop: 8 }}>
                  O comentário contém palavras proibidas. Por favor, remove-as.
                </p>
              )}
              {comentario && !temProibidas && (
                <p style={{ color: "seagreen", marginTop: 8 }}>comentário aceite</p>
              )}
            </div>
          </fieldset>

          <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button type="submit" disabled={temProibidas}>
              Submeter candidatura
            </button>
            <button type="button" onClick={reset}>
              Limpar
            </button>
            <button type="button" onClick={() => navigate("/")}>
              Voltar à homepage
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}
