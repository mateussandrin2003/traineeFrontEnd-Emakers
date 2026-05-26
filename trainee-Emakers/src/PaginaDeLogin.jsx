import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";
import "./StyleLogin.css";
import logo from "./Imagens/Logo.png";

export default function PaginaDeLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);

  function handleEntrar() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValido(regex.test(email));
  }

  return (
    <>
      {/* Logo */}
      <a href="https://www.google.com/">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      {/* Link Cadastre-se */}
      <a href="https://www.google.com/" className="link-cadastro">Cadastre-se agora</a>

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
            <input
              type="email"
              id="email"
              className={`input-login ${!emailValido ? "input-erro" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailValido && (
              <span className="mensagem-erro">E-mail inválido ou inexistente.</span>
            )}
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
              <FontAwesomeIcon
                icon={mostrarSenha ? faEyeSlash : faEye}
                className="icone-olho"
                onClick={() => setMostrarSenha((prev) => !prev)}
              />
            </div>
          </div>

          {/* Lembrar de trocar o hiperlink */}
          <a href="https://www.google.com/" className="link-esqueceu-senha">
            Esqueceu sua senha?
          </a>

          {/* Botão Entrar */}
          <button className="botao-entrar" onClick={handleEntrar}>Entrar</button>

        </div>
      </div>

      {/* Texto de ajuda */}
      <a href="https://www.google.com/" className="texto-ajuda">Precisa de ajuda para entrar?</a>

      {/* Ícone de mensagem */}
      <div className="circulo-mensagem">
        <FontAwesomeIcon icon={faMessage} className="icone-mensagem" />
      </div>
    </>
  );
}