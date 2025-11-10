import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultadosInquerito() {
  const [dados, setDados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setDados(JSON.parse(sessionStorage.getItem("inqueritos") || "[]"));
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  if (!dados.length) {
    return (
      <section className="resultados">
        <h2>Resultados dos Inquéritos</h2>
        <p>Não há respostas nesta sessão.</p>
        <button type="button" onClick={goHome} className="btn">Voltar ao menu</button>
      </section>
    );
  }

  const contMusicas = {};
  const contHorarios = {};
  const criticas = [];
  dados.forEach(({ preferidas, horario, critica }) => {
    preferidas.forEach((m) => (contMusicas[m] = (contMusicas[m] || 0) + 1));
    contHorarios[horario] = (contHorarios[horario] || 0) + 1;
    if (critica) criticas.push(critica);
  });

  return (
    <section className="resultados">
      <h2>Resultados dos Inquéritos</h2>

      <div className="panel">
        <h3>Músicas preferidas</h3>
        <ul>
          {Object.entries(contMusicas).map(([m, c]) => (
            <li key={m}>{m} — {c}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3>Horários preferidos</h3>
        <ul>
          {Object.entries(contHorarios).map(([h, c]) => (
            <li key={h}>{h} — {c}</li>
          ))}
        </ul>
      </div>

      <div className="panel">
        <h3>Críticas</h3>
        {criticas.length
          ? <ol>{criticas.map((c, i) => <li key={i}>{c}</li>)}</ol>
          : <p>(Sem críticas)</p>}
      </div>

      <div className="actions">
        <button type="button" onClick={goHome} className="btn">Voltar ao menu</button>
      </div>
    </section>
  );
}
