import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo-Canova.png';
import PrescriptionModal from './PrescriptionModal';

function Header() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Canova do Brasil" className="logo" />
          </Link>

          <nav>
            <Link to="/sobre">O Canova</Link>
            <Link to="/onde-encontrar">Onde Encontrar</Link>
            <Link to="/comprovacao-e-certificacao">Comprovação e Certificação</Link>
          </nav>

          <button className="btn btn-dark" onClick={() => setModalAberto(true)}>
            Adquira o Canova
          </button>
        </div>
      </header>

      {modalAberto && <PrescriptionModal onClose={() => setModalAberto(false)} />}
    </>
  );
}

export default Header;