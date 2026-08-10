import { useState, useEffect } from 'react';
import './BannerCarousel.css';

function BannerCarousel({ slides }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  function irParaSlide(index) {
    setIndiceAtual(index);
  }

  function slideAnterior() {
    setIndiceAtual((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function proximoSlide() {
    setIndiceAtual((prev) => (prev + 1) % slides.length);
  }

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-caption">
              <span className="eyebrow">{slide.eyebrow}</span>
              <h2>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow arrow-left" onClick={slideAnterior} aria-label="Slide anterior">
        ‹
      </button>
      <button className="carousel-arrow arrow-right" onClick={proximoSlide} aria-label="Próximo slide">
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === indiceAtual ? 'dot dot-active' : 'dot'}
            onClick={() => irParaSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerCarousel;