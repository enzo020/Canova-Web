import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { useReveal } from '../hooks/useReveal';
import ProductCard from '../components/ProductCard';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const heroRef = useReveal();
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

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div>
      <section ref={heroRef} className="reveal">
        <h1>Bem-vindo à Canova do Brasil</h1>
      </section>

      <section ref={produtosRef} className="reveal">
        <span className="eyebrow">Nossos produtos</span>
        <h2>Linha completa de imunomoduladores</h2>

        <div className="product-list">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} product={produto} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;