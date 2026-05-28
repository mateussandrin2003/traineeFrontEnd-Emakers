import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";

import styles from "./Login.module.css";
import logo from "../../assets/Imagens/Logo.png"; 

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
      window.location.href = "/plataforma";
    }
  }

  return (
    <div className={styles.bodyBackground}>
      
      {/* Logo no canto superior esquerdo */}
      <Link to="/plataforma">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      {/* 🌟 NOVO LUGAR: Link de Cadastro no canto superior direito da tela */}
      <Link to="/cadastro" className={styles.botaoCadastrese}>
        Cadastre-se agora
      </Link>

      {/* Título e Subtítulo */}
      <h1 className={styles.tituloDegrade}>Boas-vindas de volta</h1>
      <p className={styles.subtitulo}>Faça o login para acessar seus cursos e continuar aprendendo.</p>

      {/* Caixa de login */}
      <div className={styles.quadradoLogin}>
        <div className={styles.containerLogin}>

          {/* Campo de E-mail */}
          <div className={styles.grupoCampo}>
            <label htmlFor="email" className={styles.textoCampo}>
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              className={`${styles.inputLogin} ${!emailValido ? styles.inputErro : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailValido && (
              <span className={styles.mensagemErro}>E-mail inválido ou inexistente.</span>
            )}
          </div>

          {/* Campo de Senha */}
          <div className={styles.grupoCampo}>
            <label htmlFor="senha" className={styles.textoCampo}>
              Senha
            </label>
            <div className={styles.areaSenha}>
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                className={`${styles.inputLogin} ${!senhaValida ? styles.inputErro : ""}`}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <FontAwesomeIcon
                icon={mostrarSenha ? faEyeSlash : faEye}
                className={styles.iconeOlho}
                onClick={() => setMostrarSenha((prev) => !prev)}
              />
            </div>
            {!senhaValida && (
              <span className={styles.mensagemErro}>Senha incorreta.</span>
            )}
          </div>

          {/* HyperLink */}
          <Link to="/recuperar-senha" className={styles.linkEsqueceuSenha}>
            Esqueceu sua senha?
          </Link>

          {/* Botão Entrar */}
          <button className={styles.botaoEntrar} onClick={handleEntrar}>
            Entrar
          </button>

        </div>
      </div>

      {/* 🌟 NOVO LUGAR: Link de ajuda centralizado perfeitamente logo abaixo do quadrado */}
      <div className={styles.containerBaseLogin}>
        <a href="https://www.google.com/" className={styles.textoAjuda}>
          Precisa de ajuda para entrar?
        </a>
      </div>

      {/* Ícone de mensagem flutuante */}
      <div className={styles.circuloMensagem}>
        <FontAwesomeIcon icon={faMessage} className={styles.iconeMensagem} />
      </div>

    </div>
  );
}