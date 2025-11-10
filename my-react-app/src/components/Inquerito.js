import { useState } from "react";
import { useNavigate } from "react-router-dom";
import musicasData from "../data/musicas.json";

export default function Inquerito() {
  // carregar do ficheiro (sem fetch para evitar 404)
  const [musicas] = useState(musicasData);
  const [preferidas, setPreferidas] = useState([]);
  const [horario, setHorario] = useState("");
  const [critica, setCritica] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const togglePreferida = (nome, checked) => {
    setPreferidas(prev =>
      checked ? [...prev, nome] : prev.filter(p => p !== nome)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!preferidas.length || !horario) {
      setErro("Seleciona pelo menos uma música e um horário.");
      return;
    }
    const payload = { preferidas, horario, critica };

    // gravação pedida nas anotações do prof (sessionStorage)
    const antigos = JSON.parse(sessionStorage.getItem("inqueritos") || "[]");
    antigos.push(payload);
    sessionStorage.setItem("inqueritos", JSON.stringify(antigos));
    sessionStorage.setItem("ultimaResposta", JSON.stringify(payload));

    // navega para a página de resposta
    navigate("/resposta");
  };

  return (
    <form onSubmit={handleSubmit} className="inquerito">
      <h2>Inquérito ao Público</h2>

      {erro && <p style={{ color: "crimson" }}>{erro}</p>}

      <h3>Músicas preferidas:</h3>
      {musicas.map((m) => (
        <label key={m.id} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={m.nome}
            checked={preferidas.includes(m.nome)}
            onChange={(e) => togglePreferida(m.nome, e.target.checked)}
          />
          {m.nome}
        </label>
      ))}

      <h3>Horário preferido:</h3>
      <select value={horario} onChange={(e) => setHorario(e.target.value)}>
        <option value="">Escolha...</option>
        <option value="18h">18h</option>
        <option value="21h">21h</option>
      </select>

      <h3>Críticas / Sugestões:</h3>
      <textarea
        value={critica}
        onChange={(e) => setCritica(e.target.value)}
      />

      <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button type="submit">Submeter</button>
        {/* usa router-dom para navegar, tal como no FormVoluntario */}
        <button type="button" onClick={() => navigate("/resultados")}>
          Ver resultados
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Voltar ao menu
        </button>
      </div>
    </form>
  );
}
