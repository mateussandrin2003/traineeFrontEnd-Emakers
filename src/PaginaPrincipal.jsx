import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import "./StylePrincipal.css";
import logo from "./Imagens/Logo.png"; 

export default function PaginaPrincipal() {
  return (
    <div className="pagina-principal-container">
      
      {/* HEADER / RETÂNGULO SUPERIOR */}
      <header className="header-plataforma">
        
        {/* Lado Esquerdo: Container da Logo */}
        <div className="header-esquerda">
          <Link to="/plataforma">
            <img src={logo} alt="Logo" className="logo-plataforma" />
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

          {/* Ícone do Perfil dentro do Círculo */}
          <Link to="/" className="circulo-perfil" title="Ir para o Login">
            <FontAwesomeIcon icon={faCircleUser} className="icone-perfil" />
          </Link>

        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL RESPONSIVO */}
    <main className="conteudo-principal">
        <div className="flex-conteudo-home">

    {/* Título Principal */}
            <h1 className="titulo-principal-home">
                <span className="texto-degrade">&gt;&gt; </span>
                <span className="destaque-adquira">Adquira</span>
                <br />
                <span className="texto-degrade">
                    habilidades práticas e transforme sua carreira com cursos que preparam você para o mercado de trabalho
                </span>
            </h1>

    {/* Subtítulo */}
            <p className="subtitulo-home">
                Aprenda hoje, conquiste o amanhã!
                <br />
                Invista no seu Sucesso!
            </p>

    {/* Nova Caixa de Pesquisa de Cursos */}
            <div className="barra-pesquisa-cursos">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="icone-lupa-cursos" />
                <input 
                type="text" 
                placeholder="Pesquisar por algum curso" 
                className="input-pesquisa-cursos"
                />
            </div>

        </div>
    </main>

    </div>
  );
}