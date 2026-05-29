import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Logo from "../Logo/Logo"; // Ajuste o caminho se a sua pasta Logo estiver em outro local
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <header className={styles.headerPlataforma}>
      <div className={styles.headerEsquerda}>
        <Logo />
      </div>
      <div className={styles.headerCentro}>
        <span className={styles.logoMindemyTexto}>MINDEMY</span>
      </div>
      <div className={styles.headerDireita}>
        <div className={styles.barraPesquisaHeader}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.iconeLupaHeader} />
          <input type="text" placeholder="Pesquisar..." className={styles.inputPesquisaHeader} />
        </div>
        <Link to="/carrinho" className={styles.linkCarrinho}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.iconeCarrinho} />
        </Link>
        <Link to="/" className={styles.circuloPerfil}>
          <FontAwesomeIcon icon={faCircleUser} className={styles.iconePerfil} />
        </Link>
      </div>
    </header>
  );
}