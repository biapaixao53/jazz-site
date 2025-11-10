import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RespostaInquerito() {
  const [resposta, setResposta] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = sessionStorage.getItem("ultimaResposta");
    if (stored) setResposta(JSON.parse(stored));
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const novoInquerito = (e) => {
    e.preventDefault();
    navigate("/inquerito");
  };

  if (!resposta) {
    return (
      <section className="resposta">
        <h2>Obrigado pelo seu feedback!</h2>
        <p>Não há resposta guardada nesta sessão.</p>
        <div className="actions">
          <button type="button" onClick={novoInquerito} className="btn btn-primary">
            Preencher inquérito
          </button>
          <button type="button" onClick={goHome} className="btn">
            Voltar ao menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="resposta">
      <h2>Obrigado pelo seu feedback!</h2>
      <p><strong>Músicas preferidas:</strong> {resposta.preferidas.join(", ")}</p>
      <p><strong>Horário preferido:</strong> {resposta.horario}</p>
      <p><strong>Crítica:</strong> {resposta.critica || "(nenhuma)"}</p>

      <div className="actions">
        <button type="button" onClick={novoInquerito} className="btn btn-primary">
          Novo inquérito
        </button>
        <button type="button" onClick={goHome} className="btn">
          Voltar ao menu
        </button>
      </div>
    </section>
  );
}
