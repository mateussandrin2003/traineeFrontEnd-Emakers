import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import styles from "./Chat.module.css";

export default function Chat() {
  return (
    <div className={styles.circuloMensagem}>
      <FontAwesomeIcon icon={faMessage} className={styles.iconeMensagem} />
    </div>
  );
}