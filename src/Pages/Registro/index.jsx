import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

// Importando o CSS Module exclusivo da página de Registro/Recuperação
import styles from "./Registro.module.css";
import Logo from "../../components/Logo/Logo";
import Chat from "../../Components/Chat/Chat";


export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [emailValido, setEmailValido] = useState(true);

  function handleEnviar() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailOk = regexEmail.test(email);

    setEmailValido(emailOk);

    if (emailOk) {
      alert("E-mail de recuperação enviado com sucesso!");
    }
  }

  return (
    <div className={styles.bodyBackground}>
      
      {/* Logo */}
      <Logo />

      {/* Título e Subtítulo */}
      <h1 className={styles.tituloDegrade}>Redefina sua senha</h1>
      <p className={styles.subtitulo}>
        Insira o endereço de e-mail associado à sua conta e enviaremos um link para redefinir sua senha.
      </p>

      {/* Quadrado do Formulário */}
      <div className={styles.quadradoRecuperar}>
        <div className={styles.containerRecuperar}>
          
          {/* Campo de E-mail */}
          <div className={styles.grupoCampo}>
            <label htmlFor="email" className={styles.textoCampo}>
              Endereço de e-mail
            </label>
            <input
              type="email"
              id="email"
              className={`${styles.inputRegistro} ${!emailValido ? styles.inputErro : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailValido && (
              <span className={styles.mensagemErro}>E-mail inválido ou inexistente.</span>
            )}
          </div>

          {/* Botões Enviar e Cancelar */}
          <div className={styles.botoesContainer}>
            <button className={styles.botaoEnviarEsquerda} onClick={handleEnviar}>
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