import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>O Canova</h1>

      <section className="about-section">
        <h2>Quem somos</h2>
        <p>
          A Canova do Brasil desenvolve produtos imunomoduladores com base em
          décadas de pesquisa, oferecendo suporte ao sistema imunológico de
          forma natural e segura.
        </p>
      </section>

      <section className="about-section">
        <h2>O que é o produto</h2>
        <p>
          Um composto homeopático que atua estimulando as defesas naturais do
          organismo, indicado tanto para uso humano quanto veterinário.
        </p>
      </section>

      <section className="about-section">
        <h2>Como funciona</h2>
        <p>
          O produto age modulando a resposta imunológica, auxiliando o corpo
          a reagir de forma mais equilibrada a agentes externos.
        </p>
      </section>

      <div className="about-lines">
        <div className="line-card">
          <h3>Linha Humana</h3>
          <p>Formulações desenvolvidas para o uso em pessoas de todas as idades.</p>
        </div>
        <div className="line-card">
          <h3>Linha Veterinária</h3>
          <p>Formulações adaptadas para o cuidado imunológico de animais.</p>
        </div>
      </div>
    </div>
  );
}

export default About;