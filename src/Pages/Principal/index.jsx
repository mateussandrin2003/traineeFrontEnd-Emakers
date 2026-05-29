import gifEstudante from "../../assets/Imagens/EstudoPrincipal.gif";
import styles from "./Principal.module.css";
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Chat from "../../components/Chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function PaginaPrincipal() {
  return (
    <div className={styles.bodyBackground}>
      
      <Cabecalho />

      {/* SEÇÃO HERO AGORA VAI TER ALTURA FLUIDA */}
      <section className={styles.heroSection}>
        
        <div className={styles.imagemEstudante}>
          <img src={gifEstudante} alt="Estudante na biblioteca" />
        </div>

        <div className={styles.flexConteudoHome}>
          <h1 className={styles.tituloPrincipalHome}>
            <span className={styles.textoDegrade}>&gt;&gt; </span>
            <span className={styles.destaqueAdquira}>Adquira</span>
            <br />
            <span className={styles.textoDegrade}>
              habilidades práticas e transforme sua carreira com cursos que preparam você para o mercado de trabalho
            </span>
          </h1>

          <p className={styles.subtituloHome}>
            Aprenda hoje, conquiste o amanhã!<br />Invista no seu Sucesso!
          </p>

          <div className={styles.barraPesquisaCursos}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconeLupaCursos} />
            <input 
              type="text" 
              placeholder="Pesquisar por algum curso" 
              className={styles.inputPesquisaCursos}
            />
          </div>
        </div>

      </section>

      {/* 🌟 MUDANÇA: A divisória foi movida para fora da section, colando logo abaixo dela */}
      <div className={styles.divisoria}></div>

      <Chat />
    </div>
  );
}