import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import "./StylePrincipal.css";
import logo from "./Imagens/Logo.png"; // Garante a importação da logo

export default function PaginaPrincipal() {
  return (
    <div className="pagina-principal-container">
      
      {/* HEADER / RETÂNGULO SUPERIOR */}
      <header className="header-plataforma">
        
        {/* Lado Esquerdo: Agora com a Logo adicionada e linkada */}
        <div className="header-esquerda">
          <Link to="/plataforma">
            <img src={logo} alt="Logo" className="logo" style={{ maxHeight: "50px", width: "auto" }} />
          </Link>
        </div>

        {/* Centro: Título MINDEMY */}
        <div className="header-centro">
          <span className="logo-mindemy-texto">MINDEMY</span>
        </div>

        {/* Lado Direito: Pesquisa, Carrinho e Perfil */}
        <div className="header-direita">
          
          {/* Barra de Pesquisa */}
          <div className="barra-pesquisa">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icone-lupa" />
            <input 
              type="text" 
              placeholder="Pesquisar por qualquer coisa" 
              className="input-pesquisa"
            />
          </div>

          {/* Ícone do Carrinho */}
          <div className="container-carrinho">
            <FontAwesomeIcon icon={faCartShopping} className="icone-carrinho" />
          </div>

          {/* Ícone do Perfil dentro do Círculo (Clica e vai para o Login) */}
          <Link to="/" className="circulo-perfil" title="Ir para o Login">
            <FontAwesomeIcon icon={faCircleUser} className="icone-perfil" />
          </Link>

        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL (Limpado conforme solicitado) */}
      <main className="conteudo-principal">
        {/* O texto antigo de boas-vindas foi removido daqui */}
      </main>

    </div>
  );
}