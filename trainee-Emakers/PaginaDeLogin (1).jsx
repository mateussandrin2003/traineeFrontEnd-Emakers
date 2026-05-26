import { useState } from "react";
import "./paginaLogin.css";

export default function PaginaDeLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <>
      {/* Textos de login */}
      <h1 className="titulo">Login</h1>
      <h5 className="subtitulo">
        Digite o endereço de e-mail e a senha da sua conta Mindemy.
      </h5>

      {/* Caixa de login */}
      <div className="quadrado-login">
        <div className="container-login">

          <div className="grupo-campo">
            <label htmlFor="email" className="texto-campo">
              Endereço de e-mail
            </label>
            <input type="email" id="email" className="input-login" />
          </div>

          <div className="grupo-campo">
            <label htmlFor="senha" className="texto-campo">
              Senha
            </label>
            <div className="area-senha">
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                className="input-login"
              />
              <i
                className={`fa-regular ${mostrarSenha ? "fa-eye-slash" : "fa-eye"} icone-olho`}
                onClick={() => setMostrarSenha((prev) => !prev)}
              />
            </div>
          </div>

          {/* Lembrar de trocar o hiperlink */}
          <a href="https://www.google.com/" className="link-esqueceu-senha">
            Esqueceu sua senha?
          </a>

        </div>
      </div>
    </>
  );
}
