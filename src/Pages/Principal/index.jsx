import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faMessage } from "@fortawesome/free-regular-svg-icons";

// Injetando o escopo modular CSS da Página Principal
import styles from "./Principal.module.css";
import logo from "../../assets/Imagens/Logo.png"; 

export default function PaginaPrincipal() {
  return (
    <div className={styles.bodyBackground}>
      
      {/* HEADER / RETÂNGULO SUPERIOR */}
      <header className={styles.headerPlataforma}>
        
        {/* Lado Esquerdo: Container da Logo */}
        <div className={styles.headerEsquerda}>
          <Link to="/plataforma">
            <img src={logo} alt="Logo" className={styles.logoPlataforma} />
          </Link>
        </div>

        {/* Centro: Título MINDEMY */}
        <div className={styles.headerCentro}>
          <span className={styles.logoMindemyTexto}>MINDEMY</span>
        </div>

        {/* Lado Direito: Pesquisa, Carrinho e Perfil */}
        <div className={styles.headerDireita}>
          
          {/* Barra de Pesquisa Geral do Header */}
          <div className={styles.barraPesquisaHeader}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconeLupaHeader} />
            <input 
              type="text" 
              placeholder="Pesquisar por qualquer coisa" 
              className={styles.inputPesquisaHeader}
            />
          </div>

          {/* Ícone do Carrinho */}
          <div className={styles.containerCarrinho}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.iconeCarrinho} />
          </div>

          {/* Ícone do Perfil dentro do Círculo */}
          <Link to="/" className={styles.circuloPerfil} title="Ir para o Login">
            <FontAwesomeIcon icon={faCircleUser} className={styles.iconePerfil} />
          </Link>

        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL RESPONSIVO */}
      <main className={styles.conteudoPrincipal}>
        <div className={styles.flexConteudoHome}>

          {/* Título Principal com Setas e "Adquira" corrigidos */}
          <h1 className={styles.tituloPrincipalHome}>
            <span className={styles.textoDegrade}>&gt;&gt; </span>
            <span className={styles.destaqueAdquira}>Adquira</span>
            <br />
            <span className={styles.textoDegrade}>
              habilidades práticas e transforme sua carreira com cursos que preparam você para o mercado de trabalho
            </span>
          </h1>

          {/* Subtítulo */}
          <p className={styles.subtituloHome}>
            Aprenda hoje, conquiste o amanhã!
            <br />
            Invista no seu Sucesso!
          </p>

          {/* Caixa de Pesquisa de Cursos específica */}
          <div className={styles.barraPesquisaCursos}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconeLupaCursos} />
            <input 
              type="text" 
              placeholder="Pesquisar por algum curso" 
              className={styles.inputPesquisaCursos}
            />
          </div>

        </div>
      </main>

      {/* Ícone de mensagem flutuante de ajuda */}
      <div className={styles.circuloMensagem}>
        <FontAwesomeIcon icon={faMessage} className={styles.iconeMensagem} />
      </div>

    </div>
  );
}