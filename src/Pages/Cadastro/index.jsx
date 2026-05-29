import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";

import styles from "./Cadastro.module.css";
import Logo from "../../components/Logo/Logo";
import Chat from "../../Components/Chat/Chat";

export default function PaginaDeCadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfimarSenha, setMostrarConfirmarSenha] = useState(false);
  
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);
  
  // 🌟 NOVOS ESTADOS DA CONFIRMAÇÃO DE SENHA
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [senhasBatem, setSenhasBatem] = useState(true);

  function handleCadastrar() {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    const cpfOk = regexCpf.test(cpf);
    const emailOk = regexEmail.test(email);
    const senhaOk = regexSenha.test(senha);
    const bateu = senha === confirmarSenha;

    setCpfValido(cpfOk);
    setEmailValido(emailOk);
    setSenhaValida(senhaOk);
    setSenhasBatem(bateu);

    if (nome && cpfOk && emailOk && senhaOk && bateu) {
      alert("Cadastro realizado com sucesso!");
    }
  }

  return (
    <div className={styles.bodyBackground}>
      
      {/* Logo no canto superior esquerdo */}
      <Logo />

      {/* 🌟 NOVO: Link de Fazer Login no canto superior direito */}
      <Link to="/" className={styles.botaoFazerLogin}>
        Fazer Login
      </Link>

      {/* 🌟 TÍTULO E SUBTÍTULO INJETADOS */}
      <h1 className={styles.tituloDegrade}>Invista no seu sucesso!</h1>
      <p className={styles.subtitulo}>Crie sua conta agora e tenha acesso a cursos exclusivos, desenvolvidos por especialistas, para você dominar as habilidades mais requisitadas do mercado. Invista no seu futuro e aprenda no seu ritmo, com conteúdo de qualidade e atualizado. Não perca tempo, o futuro da tecnologia espera por você!</p>

      {/* Quadrado do formulário */}
      <div className={styles.quadradoCadastro}>
        <div className={styles.containerCadastro}>
          
          {/* Nome Completo */}
          <div className={styles.grupoCampo}>
            <label htmlFor="nome" className={styles.textoCampo}>Nome do Usuário</label>
            <input
              type="text"
              id="nome"
              className={styles.inputCadastro}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          {/* E-mail */}
          <div className={styles.grupoCampo}>
            <label htmlFor="email" className={styles.textoCampo}>Endereço de e-mail</label>
            <input
              type="email"
              id="email"
              className={`${styles.inputCadastro} ${!emailValido ? styles.inputErro : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailValido && <span className={styles.mensagemErro}>E-mail inválido.</span>}
          </div>

          {/* CPF */}
          <div className={styles.grupoCampo}>
            <label htmlFor="cpf" className={styles.textoCampo}>CPF</label>
            <input
              type="text"
              id="cpf"
              className={`${styles.inputCadastro} ${!cpfValido ? styles.inputErro : ""}`}
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="000.000.000-00"
            />
            {!cpfValido && <span className={styles.mensagemErro}>CPF inválido.</span>}
          </div>

          {/* Senha */}
          <div className={styles.grupoCampo}>
            <label htmlFor="senha" className={styles.textoCampo}>Senha</label>
            <div className={styles.areaSenha}>
              <input
                type={mostrarSenha ? "text" : "password"}
                id="senha"
                className={`${styles.inputCadastro} ${!senhaValida ? styles.inputErro : ""}`}
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
              <span className={styles.mensagemErro}>
                A senha deve conter Letra Maiúscula, Número e Caractere Especial.
              </span>
            )}
          </div>

          {/* Confirmação de Senha */}
          <div className={styles.grupoCampo}>
            <label htmlFor="confirmarSenha" className={styles.textoCampo}>Confirmação de Senha</label>
            <div className={styles.areaSenha}>
              <input
                type={mostrarConfimarSenha ? "text" : "password"}
                id="confirmarSenha"
                className={`${styles.inputCadastro} ${!senhasBatem ? styles.inputErro : ""}`}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <FontAwesomeIcon
                icon={mostrarConfimarSenha ? faEyeSlash : faEye}
                className={styles.iconeOlho}
                onClick={() => setMostrarConfirmarSenha((prev) => !prev)}
              />
            </div>
            {!senhasBatem && (
              <span className={styles.mensagemErro}>As senhas não coincidem.</span>
            )}
          </div>

          {/* Botões Enviar e Cancelar */}
          <div className={styles.botoesContainer}>
            <button className={styles.botaoEnviarEsquerda} onClick={handleCadastrar}>
              Enviar
            </button>
            <Link to="/" className={styles.botaoCancelar}>
              Cancele
            </Link>
          </div>

        </div>
      </div>

      {/* Ícone flutuante */}
      <Chat/> 

    </div>
  );
}