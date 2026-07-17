import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

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
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong> — {produto.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;  