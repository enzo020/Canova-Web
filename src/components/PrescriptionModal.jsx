import { useState } from 'react';
import './PrescriptionModal.css';

function PrescriptionModal({ onClose }) {
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [arquivo, setArquivo] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setEnviando(true);

    // TODO: próximo passo — enviar (nome, contato, arquivo) para o back-end,
    // que disparará um e-mail com o anexo.

    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
    }, 800);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>

        {sucesso ? (
          <div className="modal-success">
            <h2>Recebemos sua receita!</h2>
            <p>Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Adquira o Canova</h2>
            <p className="modal-subtitle">Anexe sua receita e entraremos em contato.</p>

            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />

            <label htmlFor="contato">E-mail ou telefone</label>
            <input id="contato" type="text" value={contato} onChange={(e) => setContato(e.target.value)} required />

            <label htmlFor="arquivo">Receita (imagem ou PDF)</label>
            <input
              id="arquivo"
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setArquivo(e.target.files[0])}
              required
            />

            <button type="submit" className="btn btn-dark" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar receita'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default PrescriptionModal;