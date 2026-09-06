import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/Api';
import { useReveal } from '../hooks/useReveal';
import ProductCard from '../components/ProductCard';
import './Home.css';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const linhasRef = useReveal();
  const comoAdquirirRef = useReveal();

  useEffect(() => {
    getProducts()
      .then((data) => { setProdutos(data); setCarregando(false); })
      .catch(() => setCarregando(false));
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Canova® é um imunomodulador homeopático</h1>
          <p>Fortalecendo as defesas naturais do organismo há décadas, com respaldo científico e certificação.</p>
          <div className="hero-actions">
            <Link to="/sobre" className="btn btn-dark">Conhecer o produto</Link>
            <Link to="/comprovacao-e-certificacao" className="btn btn-outline">Ver certificações</Link>
          </div>
        </div>
      </section>

      <section ref={linhasRef} className="reveal home-lines">
        <span className="eyebrow">Nossas linhas</span>
        <h2>Toda a nossa linha de produtos</h2>
        <p className="section-subtitle">Formulações desenvolvidas para cada necessidade.</p>

        <div className="lines-grid">
          <Link to="/sobre" className="line-card line-card-human">
            <h3>Linha Humana</h3>
            <span>Ver produtos →</span>
          </Link>
          <Link to="/sobre" className="line-card line-card-vet">
            <h3>Linha Veterinária</h3>
            <span>Ver produtos →</span>
          </Link>
        </div>

        {!carregando && produtos.length > 0 && (
          <div className="product-list">
            {produtos.slice(0, 3).map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))}
          </div>
        )}
      </section>

      <section ref={comoAdquirirRef} className="reveal home-how">
        <span className="eyebrow">Como adquirir</span>
        <h2>Como adquirir nossos produtos?</h2>

        <div className="how-steps">
          <div className="how-step">
            <span className="how-step-number">1</span>
            <p>Converse com seu médico ou veterinário sobre o Canova.</p>
          </div>
          <div className="how-step">
            <span className="how-step-number">2</span>
            <p>Encontre uma farmácia parceira mais próxima de você.</p>
          </div>
          <div className="how-step">
            <span className="how-step-number">3</span>
            <p>Ou anexe sua receita e nós entramos em contato.</p>
          </div>
        </div>

        <Link to="/onde-encontrar" className="btn btn-outline">Ver farmácias parceiras</Link>
      </section>
    </div>
  );
}

export default Home;