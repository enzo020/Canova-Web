import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { useReveal } from '../hooks/useReveal';
import BannerCarousel from '../components/BannerCarousel';
import ProductCard from '../components/ProductCard';
import bannerHumana from '../assets/banner-humana.jpg';
import bannerVeterinaria from '../assets/banner-veterinaria.jpg';
import './Home.css';

const slides = [
  {
    image: bannerHumana,
    eyebrow: 'Linha Humana',
    title: 'Fortaleça suas defesas naturais',
  },
  {
    image: bannerVeterinaria,
    eyebrow: 'Linha Veterinária',
    title: 'Cuidado imunológico para o seu animal',
  },
];

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const produtosRef = useReveal();

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  return (
    <div>
      <BannerCarousel slides={slides} />

      <section ref={produtosRef} className="reveal home-products">
        <span className="eyebrow">Nossos produtos</span>
        <h2>Linha completa de imunomoduladores</h2>

        {carregando && <p>Carregando produtos...</p>}
        {erro && <p className="mensagem-erro">Erro: {erro}</p>}

        {!carregando && !erro && (
          <div className="product-list">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;  