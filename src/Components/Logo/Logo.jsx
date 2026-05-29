import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import imagemLogo from "../../assets/Imagens/Logo.png"; 

export default function Logo() {
  return (
    <Link to="/plataforma">
      <img src={imagemLogo} alt="Logo Mindemy" className={styles.logo} />
    </Link>
  );
}