import './WhereFound.css';

const farmacias = [
  { nome: 'Farmácia Central', cidade: 'Curitiba', estado: 'PR' },
  { nome: 'Drogaria Saúde Total', cidade: 'São Paulo', estado: 'SP' },
  { nome: 'Farmácia Popular', cidade: 'Rio de Janeiro', estado: 'RJ' },
];

function WhereFound() {
  return (
    <div className="where-page">
      <h1>Onde Encontrar</h1>
      <p>Confira alguns pontos de venda parceiros:</p>

      <ul className="pharmacy-list">
        {farmacias.map((farmacia, index) => (
          <li key={index} className="pharmacy-item">
            <strong>{farmacia.nome}</strong>
            <span>{farmacia.cidade} — {farmacia.estado}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhereFound;