import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import "./StyleLogin.css"; 
import logo from "./Imagens/Logo.png";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);

  function handleEnviar() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailOk = regexEmail.test(email);

    setEmailValido(emailOk);

    if (emailOk) {
      alert("Link de redefinição enviado para o e-mail informado!");
      window.location.href = "/";
    }
  }

  return (
    <>
      {/* Logo */}
        <a href="https://www.google.com/">
            <img src={logo} alt="Logo" className="logo" />
        </a>

      {/* Título e Subtítulo */}
      <h1 className="titulo" style={{ width: "auto", textAlign: "center" }}>
        Redefina sua senha
      </h1>
      <h5 className="subtitulo">
        Digite o endereço de e-mail que você usa na Mindemy para enviarmos um link de redefinição de senha.
      </h5>

      {/* Caixa de recuperação */}
      <div className="quadrado-login">
        <div className="container-login">

          {/* Campo de E-mail */}
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

          {/* Botão Enviar*/}
          <div className="botoes-container">
            <button className="botao-enviar-esquerda" onClick={handleEnviar}>
              Enviar
            </button>
            {/* Botão Cancele */}
            <Link to="/" className="botao-cancelar">
              Cancele
            </Link>
          </div>

        </div>
      </div>

      {/* Ícone de mensagem */}
      <div className="circulo-mensagem">
        <FontAwesomeIcon icon={faMessage} className="icone-mensagem" />
      </div>
    </>
  );
}