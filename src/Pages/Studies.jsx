import './Studies.css';

const estudos = [
  {
    titulo: 'Efeitos imunomoduladores em estudo clínico randomizado',
    data: '2024',
  },
  {
    titulo: 'Avaliação da resposta imune em modelo animal',
    data: '2023',
  },
  {
    titulo: 'Revisão sistemática sobre imunomoduladores homeopáticos',
    data: '2022',
  },
];

function Studies() {
  return (
    <div className="studies-page">
      <h1>Estudos e Pesquisas</h1>
      <p>Artigos científicos relacionados ao produto:</p>

      <div className="studies-list">
        {estudos.map((estudo, index) => (
          <div key={index} className="study-card">
            <h3>{estudo.titulo}</h3>
            <span>{estudo.data}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studies;