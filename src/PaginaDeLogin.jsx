import { useState } from "react";
import { Link } from "react-router-dom"; // << IMPORTAÇÃO QUE FALTAVA PARA NÃO DAR TELA BRANCA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";
import "./StyleLogin.css";
import logo from "./Imagens/Logo.png";

export default function PaginaDeLogin() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);

  function handleEntrar() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    const emailOk = regexEmail.test(email);
    const senhaOk = regexSenha.test(senha);

    setEmailValido(emailOk);
    setSenhaValida(senhaOk);

    if (emailOk && senhaOk) {
      window.location.href = "https://www.google.com/";
    }
  }

  return (
    <>
      {/* Logo */}
      <a href="https://www.google.com/">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      {/* Link Cadastre-se */}
      <Link to="/cadastrar" className="link-cadastro">Cadastre-se agora</Link>

      {/* Textos de login */}
      <h1 className="titulo">Login</h1> {/* Corrigido: Removido o classhtmlfor daqui */}
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
                className={`input-login ${!senhaValida ? "input-erro" : ""}`}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <FontAwesomeIcon
                icon={mostrarSenha ? faEyeSlash : faEye}
                className="icone-olho"
                onClick={() => setMostrarSenha((prev) => !prev)}
              />
            </div>
            {!senhaValida && (
              <span className="mensagem-erro">Senha incorreta.</span>
            )}
          </div>

          {/* HyperLink \"Esqueceu sua senha?\" */}
          <Link to="/recuperar-senha" className="link-esqueceu-senha">
            Esqueceu sua senha?
          </Link>

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