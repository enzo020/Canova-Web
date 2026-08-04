import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

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
      <h1>Bem-vindo à Canova do Brasil</h1>

      <h2>Nossos Produtos</h2>
     <div className="product-list">
  {produtos.map((produto) => (
    <ProductCard key={produto.id} product={produto} />
  ))}
</div>
    </div>
  );
}

export default Home;