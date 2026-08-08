import { useState, useEffect } from 'react';
import { createProduct, updateProduct, getLines } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import './ProductForm.css';

function ProductForm({ produto, onSalvo, onCancelar }) {
  const [name, setName] = useState(produto?.name || '');
  const [description, setDescription] = useState(produto?.description || '');
  const [lineId, setLineId] = useState('');
  const [lines, setLines] = useState([]);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState(null);

  const { token } = useAuth();
  const isEditing = !!produto;

  useEffect(() => {
    getLines().then(setLines).catch(() => setErro('Erro ao carregar linhas'));
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setSalvando(true);
    setErro(null);

    const dados = { name, description, lineId: Number(lineId) };

    try {
      if (isEditing) {
        await updateProduct(produto.id, dados, token);
      } else {
        await createProduct(dados, token);
      }
      onSalvo();
    } catch (err) {
      setErro(err.message);
    } finally {
      setSalvando(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{isEditing ? 'Editar Produto' : 'Novo Produto'}</h2>

      {erro && <p className="mensagem-erro">{erro}</p>}

      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="description">Descrição</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <label htmlFor="lineId">Linha</label>
      <select
        id="lineId"
        value={lineId}
        onChange={(e) => setLineId(e.target.value)}
        required
      >
        <option value="">Selecione...</option>
        {lines.map((line) => (
          <option key={line.lineId} value={line.lineId}>
            {line.name}
          </option>
        ))}
      </select>

      <div className="form-actions">
        <button type="submit" disabled={salvando}>
          {salvando ? 'Salvando...' : 'Salvar'}
        </button>
        <button type="button" onClick={onCancelar} className="btn-secondary">
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ProductForm;