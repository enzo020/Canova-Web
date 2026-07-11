import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">O Canova</Link>
        <Link to="/onde-encontrar">Onde Encontrar</Link>
        <Link to="/estudos">Estudos e Pesquisas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;