import './Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>© {anoAtual} Canova do Brasil. Todos os direitos reservados.</p>
      <p>Contato: (41) 99999-9999</p>
    </footer>
  );
}

export default Footer;