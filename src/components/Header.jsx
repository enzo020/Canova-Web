import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/2.png';

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Canova do Brasil" className="logo" />
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">O Canova</Link>
          <Link to="/onde-encontrar">Onde Encontrar</Link>
          <Link to="/estudos">Estudos e Pesquisas</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;