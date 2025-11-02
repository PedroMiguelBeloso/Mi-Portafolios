import React, { useEffect, useState } from "react";

import img1 from "../../assets/TheMKT1.jpg";
import img2 from "../../assets/TheMKT2.jpg";
import img3 from "../../assets/TheMKT3.jpg";
import img4 from "../../assets/TheMKT4.jpg";
import img5 from "../../assets/TheMKT5.jpg";
import img6 from "../../assets/TheMKT6.jpg";
import img7 from "../../assets/TheMKT7.jpg";

export default function TheMarketPlace() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section>
      <h1>🛍️ The Market Trail</h1>

      <p>
        The Market Trail es una SPA construida con React y Vite que consume la
        API pública DummyJSON para mostrar un catálogo de productos. Fue
        desarrollada como proyecto final de la materia "Programación en Nuevas
        Tecnologías 2" (ORT) por estudiantes. Permite buscar, filtrar, ver
        detalles y manejar un carrito que persiste en localStorage.
      </p>

      <p>
        <strong>Funciones principales:</strong> listado de productos, búsqueda,
        filtros por categoría/precio, vista de detalle y carrito con persistencia.
      </p>

      <p>
        <strong>Tecnologías:</strong> React, Vite, JavaScript, HTML, CSS
      </p>

      <h3>📸 Capturas</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="market-container">
          <div style={{ textAlign: "center" }}>
            <img
              src={images[index]}
              alt={`The Market Trail - captura ${index + 1}`}
              className="market-main"
            />
          </div>

          <div className="market-thumbs">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`mini ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`market-thumb ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      <h3 style={{ marginTop: 20 }}>🎬 Demo</h3>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/ID_DEL_VIDEO_TIENDA"
          title="Demo The Market Trail"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="card code-card" style={{ marginTop: 20 }}>
        <svg className="code-card-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.58c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="#d8b4ff"/>
        </svg>

        <div className="code-card-body">
          <h3 style={{ margin: 0 }}>Código fuente</h3>
          <p style={{ margin: 4 }}>Repositorio del proyecto <strong>The Market Trail</strong> en GitHub.</p>
        </div>

        <a
          href="https://github.com/PedroMiguelBeloso/The-Market-Trail.git"
          target="_blank"
          rel="noreferrer noopener"
          className="contact-btn"
        >
          Ver en GitHub
        </a>
      </div>
    </section>
  );
}
