import { useState } from 'react';
import { createLead } from '../services/api';
import './Contacts.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setEnviando(true);
    setErro(null);

    try {
      await createLead(formData);
      setSucesso(true);
      setFormData({ name: '', contact: '', message: '' });
    } catch (err) {
      setErro(err.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="contact-page">
      <h1>Contato</h1>
      <p>Preencha o formulário abaixo e entraremos em contato.</p>

      {sucesso && <p className="mensagem-sucesso">Mensagem enviada com sucesso!</p>}
      {erro && <p className="mensagem-erro">Erro: {erro}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="contact">E-mail ou telefone</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      </form>
    </div>
  );
}

export default Contacts;