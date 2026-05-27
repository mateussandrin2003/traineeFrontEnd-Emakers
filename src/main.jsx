import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PaginaDeLogin from "./PaginaDeLogin";
import RecuperarSenha from "./RecuperarSenha";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PaginaDeLogin />
  </StrictMode>
);