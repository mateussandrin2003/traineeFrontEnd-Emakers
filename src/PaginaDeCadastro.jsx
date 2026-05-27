import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faMessage } from "@fortawesome/free-regular-svg-icons";
import "./StyleLogin.css";
import logo from "./Imagens/Logo.png";

export default function PaginaDeCadastro() {
  // Estados dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Estados de visualização de senha
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  // Estados de validação
  const [emailValido, setEmailValido] = useState(true);
  const [cpfValido, setCpfValido] = useState(true);
  const [senhaValida, setSenhaValida] = useState(true);
  const [senhasIguais, setSenhasIguais] = useState(true);

  // Função para aplicar a máscara de CPF (000.000.000-00) enquanto o usuário digita
  function handleCpfChange(e) {
    let valor = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    
    if (valor.length <= 11) {
      if (valor.length > 9) {
        valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
      } else if (valor.length > 6) {
        valor = valor.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
      } else if (valor.length > 3) {
        valor = valor.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
      }
      setCpf(valor);
    }
  }

  function handleCadastrar() {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Padrão da tela de login: Letra maiúscula, número e caractere especial
    const regexSenha = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
    
    // Remove pontos e traço para validar se tem exatamente 11 números
    const apenasNumerosCpf = cpf.replace(/\D/g, "");

    const emailOk = regexEmail.test(email);
    const cpfOk = apenasNumerosCpf.length === 11;
    const senhaOk = regexSenha.test(senha);
    const correspondenciaOk = senha === confirmarSenha;

    setEmailValido(emailOk);
    setCpfValido(cpfOk);
    setSenhaValida(senhaOk);
    setSenhasIguais(correspondenciaOk);

    if (emailOk && cpfOk && senhaOk && correspondenciaOk) {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/"; // Redireciona para a página de login
    }
  }

  return (
    <>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      {/* Link Fazer Login no topo direito */}
      <Link to="/" className="link-cadastro">Fazer Login</Link>

      {/* Título e Subtítulo alterados */}
      <h1 className="titulo" style={{ width: "auto", textAlign: "center" }}>
        Invista no seu sucesso!
      </h1>
      <h5 className="subtitulo">
        Crie sua conta agora e tenha acesso a cursos exclusivos, desenvolvidos por especialistas, para você dominar as habilidades mais requisitadas do mercado. Invista no seu futuro e aprenda no seu ritmo, com conteúdo de qualidade e atualizado. Não perca tempo, o futuro da tecnologia espera por você!
      </h5>

      {/* Caixa de Cadastro (Ajustamos a altura inline para caber os 5 campos) */}
      <div className="quadrado-login" style={{ height: "auto", padding: "30px 0" }}>
        <div className="container-login">

          {/* 1. Nome do Usuário */}
          <div className="grupo-campo">
            <label htmlFor="nome" className="texto-campo">Nome do usuário</label>
            <input
              type="text"
              id="nome"
              className="input-login"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          {/* 2. Endereço de E-mail */}
          <div className="grupo-campo">
            <label htmlFor="email" className="texto-campo">Endereço de e-mail</label>
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

          {/* 3. CPF com máscara */}
          <div className="grupo-campo">
            <label htmlFor="cpf" className="texto-campo">CPF</label>
            <input
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              className={`input-login ${!cpfValido ? "input-erro" : ""}`}
              value={cpf}
              onChange={handleCpfChange}
            />
            {!cpfValido && (
              <span className="mensagem-erro">O CPF deve conter 11 dígitos.</span>
            )}
          </div>

          {/* 4. Senha */}
          <div className="grupo-campo">
            <label htmlFor="senha" className="texto-campo">Senha</label>
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
                onClick={() => setMostrarSenha(!mostrarSenha)}
              />
            </div>
            {!senhaValida && (
              <span className="mensagem-erro">A senha deve conter uma letra maiúscula, um número e um caractere especial.</span>
            )}
          </div>

          {/* 5. Confirmação de Senha */}
          <div className="grupo-campo">
            <label htmlFor="confirmarSenha" className="texto-campo">Confirmação de Senha</label>
            <div className="area-senha">
              <input
                type={mostrarConfirmarSenha ? "text" : "password"}
                id="confirmarSenha"
                className={`input-login ${!senhasIguais ? "input-erro" : ""}`}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              <FontAwesomeIcon
                icon={mostrarConfirmarSenha ? faEyeSlash : faEye}
                className="icone-olho"
                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
              />
            </div>
            {!senhasIguais && (
              <span className="mensagem-erro">As senhas informadas não coincidem.</span>
            )}
          </div>

          {/* Botões Lado a Lado Alinhados */}
          <div className="botoes-container">
            <button className="botao-enviar-esquerda" onClick={handleCadastrar}>
              Cadastrar
            </button>
            <Link to="/" className="botao-cancelar">
              Cancele
            </Link>
          </div>

        </div>
      </div>

      {/* Ícone de mensagem de ajuda */}
      <div className="circulo-mensagem">
        <FontAwesomeIcon icon={faMessage} className="icone-mensagem" />
      </div>
    </>
  );
}