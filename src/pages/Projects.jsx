import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section>
      <h1>Proyectos</h1>

      <p>
        Bienvenidos, soy Pedro y este es mi portafolio. Aquí podrán ver mis
        proyectos personales y los realizados en la facultad. Cada tarjeta tiene
        botones: al hacer clic en "Ver detalles" podrán leer más sobre cada
        proyecto (qué se buscaba lograr, tecnologías usadas, capturas funcionales
        ) y ver un video mostrando la aplicación en
        funcionamiento. También encontrarán un enlace al repositorio en GitHub
        para revisar el código completo.
      </p>

      <div className="card">
        <h2>🐾 Patitas&Corazones — Plataforma de Adopción</h2>
        <p>
          Aplicación para publicar y gestionar adopciones (ASP.NET Core MVC, EF
          Core).
        </p>
        <p>
          <strong>Tecnologías:</strong> ASP.NET Core MVC, Entity Framework Core, SQL Server, Razor, Bootstrap, HTML/CSS/JavaScript
        </p>
        <div style={{ marginTop: 8 }}>
          <Link to="/proyectos/patitas-y-corazones" className="btn">
            Ver detalles
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>🛍️ The Market Trail — Consumo de DummyJSON</h2>
        <p>Front en React (Vite) que consume una API pública (DummyJSON).</p>
        <p>
          <strong>Tecnologías:</strong> React, Vite, JavaScript, HTML, CSS
        </p>
        <div style={{ marginTop: 8 }}>
            <Link to="/proyectos/the-market-place" className="btn">
            Ver detalles
          </Link>
        </div>
      </div>
    </section>
  );
}
