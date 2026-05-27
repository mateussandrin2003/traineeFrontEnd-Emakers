import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaDeLogin from "./PaginaDeLogin";
import RecuperarSenha from "./RecuperarSenha";
import PaginaDeCadastro from "./PaginaDeCadastro";
import PaginaPrincipal from "./PaginaPrincipal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaDeLogin />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/cadastrar" element={<PaginaDeCadastro />} />
        <Route path="/plataforma" element={<PaginaPrincipal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);