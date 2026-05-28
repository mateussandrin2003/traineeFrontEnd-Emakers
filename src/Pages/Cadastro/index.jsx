import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";

// Injetando o escopo modular do CSS
import styles from "./Cadastro.module.css";
import logo from "../../assets/Imagens/Logo.png"; 

export default function PaginaDeCadastro() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [cpfValido, setCpfValido] = useState(true);
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);
  const [senha, setSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);

  function handleCadastrar() {
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;

    const cpfOk = regexCpf.test(cpf);
    const emailOk = regexEmail.test(email);
    const senhaOk = regexSenha.test(senha);

    setCpfValido(cpfOk);
    setEmailValido(emailOk);
    setSenhaValida(senhaOk);

    if (nome && cpfOk && emailOk && senhaOk) {
      alert("Cadastro realizado com sucesso!");
    }
  }

  return (
    <div className={styles.bodyBackground}>
      
      {/* Logo */}
      <Link to="/plataforma">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      {/* Quadrado do formulário */}
      <div className={styles.quadradoCadastro}>
        <div className={styles.containerCadastro}>
          
          {/* Nome Completo */}
          <div className={styles.grupoCampo}>
            <label htmlFor="nome" className={styles.textoCampo}>Nome Completo</label>
            <input
              type="text"
              id="nome"
              className={styles.inputCadastro}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
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
                A senha deve conter uma Letra Maiúscula, um Número e um Caractere Especial.
              </span>
            )}
          </div>

          {/* Botões Lado a Lado */}
          <div className={styles.botoesContainer}>
            <button className={styles.botaoEnviarEsquerda} onClick={handleCadastrar}>
              Enviar
            </button>
            <Link to="/" className={styles.botaoCancelar}>
              Cancelar
            </Link>
          </div>

        </div>
      </div>

      {/* Ícone flutuante */}
      <div className={styles.circuloMensagem}>
        <FontAwesomeIcon icon={faMessage} className={styles.iconeMensagem} />
      </div>

    </div>
  );
}