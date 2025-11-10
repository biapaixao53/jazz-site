import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import FormVoluntario from "./pages/FormVoluntario";
import Inquerito from './components/Inquerito';
import RespostaInquerito from "./components/RespostaInquerito";
import ResultadosInquerito from "./components/ResultadosInquerito";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<FormVoluntario />} />
        <Route path="/inquerito" element={<Inquerito />} />
           <Route path="/resposta" element={<RespostaInquerito />} />
        <Route path="/resultados" element={<ResultadosInquerito />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
