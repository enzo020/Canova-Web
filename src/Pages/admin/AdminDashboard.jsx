import { useState, useEffect } from 'react';
import { getProducts, deleteProduct, getLeads, deleteLead } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import ProductForm from './ProductForm';
import './AdminDashboard.css';

function AdminDashboard() {
  const [abaAtiva, setAbaAtiva] = useState('produtos');

  const [produtos, setProdutos] = useState([]);
  const [leads, setLeads] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [produtoEmEdicao, setProdutoEmEdicao] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);

  const { token, logout } = useAuth();

  async function carregarProdutos() {
    try {
      setCarregando(true);
      const data = await getProducts();
      setProdutos(data);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  async function carregarLeads() {
    try {
      setCarregando(true);
      const data = await getLeads(token);
      setLeads(data);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (abaAtiva === 'produtos') {
      carregarProdutos();
    } else {
      carregarLeads();
    }
  }, [abaAtiva]);

  async function handleDeleteProduto(id) {
    const confirmar = window.confirm('Tem certeza que deseja excluir este produto?');
    if (!confirmar) return;

    try {
      await deleteProduct(id, token);
      carregarProdutos();
    } catch (err) {
      alert('Erro ao excluir: ' + err.message);
    }
  }

  async function handleDeleteLead(id) {
    const confirmar = window.confirm('Excluir esta mensagem de contato?');
    if (!confirmar) return;

    try {
      await deleteLead(id, token);
      carregarLeads();
    } catch (err) {
      alert('Erro ao excluir: ' + err.message);
    }
  }

  function handleEdit(produto) {
    setProdutoEmEdicao(produto);
    setMostrarForm(true);
  }

  function handleNovoProduto() {
    setProdutoEmEdicao(null);
    setMostrarForm(true);
  }

  function handleFormSalvo() {
    setMostrarForm(false);
    setProdutoEmEdicao(null);
    carregarProdutos();
  }

  function formatarData(dataString) {
    return new Date(dataString).toLocaleString('pt-BR');
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Painel Administrativo</h1>
        <button onClick={logout} className="btn-logout">Sair</button>
      </div>

      <div className="dashboard-tabs">
        <button
          className={abaAtiva === 'produtos' ? 'tab-active' : ''}
          onClick={() => { setAbaAtiva('produtos'); setMostrarForm(false); }}
        >
          Produtos
        </button>
        <button
          className={abaAtiva === 'leads' ? 'tab-active' : ''}
          onClick={() => setAbaAtiva('leads')}
        >
          Mensagens de Contato
        </button>
      </div>

      {erro && <p className="mensagem-erro">{erro}</p>}
      {carregando && <p>Carregando...</p>}

      {!carregando && abaAtiva === 'produtos' && (
        <>
          {!mostrarForm && (
            <button onClick={handleNovoProduto} className="btn-primary">
              + Novo Produto
            </button>
          )}

          {mostrarForm && (
            <ProductForm
              produto={produtoEmEdicao}
              onSalvo={handleFormSalvo}
              onCancelar={() => setMostrarForm(false)}
            />
          )}

          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.id}>
                  <td>{produto.name}</td>
                  <td>{produto.description}</td>
                  <td>
                    <button onClick={() => handleEdit(produto)} className="btn-edit">Editar</button>
                    <button onClick={() => handleDeleteProduto(produto.id)} className="btn-delete">Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {!carregando && abaAtiva === 'leads' && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Contato</th>
              <th>Mensagem</th>
              <th>Recebido em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 && (
              <tr>
                <td colSpan="5">Nenhuma mensagem recebida ainda.</td>
              </tr>
            )}
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.contact}</td>
                <td>{lead.message}</td>
                <td>{formatarData(lead.createdAt)}</td>
                <td>
                  <button onClick={() => handleDeleteLead(lead.id)} className="btn-delete">Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;