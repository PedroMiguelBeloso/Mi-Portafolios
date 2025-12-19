import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/imageCarousel";


import img1 from "../assets/appdoptame1.jpg";
import img2 from "../assets/appdoptame2.jpg";
import img3 from "../assets/appdoptame3.jpg";
import img4 from "../assets/appdoptame4.jpg";
import img5 from "../assets/appdoptame5.jpg";
import img6 from "../assets/appdoptame6.jpg";
import img7 from "../assets/appdoptame7.jpg";
import img8 from "../assets/appdoptame8.jpg";
import img9 from "../assets/appdoptame9.jpg";

import pp1 from "../assets/P&P1.png";
import pp2 from "../assets/P&P2.png";
import pp3 from "../assets/P&P3.png";
import pp4 from "../assets/P&P4.png";
import pp5 from "../assets/P&P5.png";
import pp6 from "../assets/P&P6.png";
import pp7 from "../assets/P&P7.png";
import pp8 from "../assets/P&P8.png";
import pp9 from "../assets/P&P9.png";

import m1 from "../assets/TheMKT1.jpg";
import m2 from "../assets/TheMKT2.jpg";
import m3 from "../assets/TheMKT3.jpg";
import m4 from "../assets/TheMKT4.jpg";
import m5 from "../assets/TheMKT5.jpg";
import m6 from "../assets/TheMKT6.jpg";
import m7 from "../assets/TheMKT7.jpg";

export default function Projects() {
  const imagesAppdoptame = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
  ];

  const imagesPatitas = [pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9];

  const imagesMarket = [m1, m2, m3, m4, m5, m6, m7];

  return (
    <section>
      <h1>Proyectos</h1>

      <p>
        Bienvenidos, soy Pedro y este es mi portafolio. Aquí podrán ver mis
        proyectos personales y los realizados en la facultad. Cada tarjeta
        tiene un enlace para ver detalles, capturas y el código del proyecto.
      </p>

      <div className="card">
        <h2>Patitas&Corazones — Plataforma de Adopción</h2>
        <p>
          Aplicación para publicar y gestionar adopciones (ASP.NET Core MVC, EF Core).
        </p>
        <p>
          <strong>Tecnologías:</strong> ASP.NET Core MVC, Entity Framework Core, SQL Server, Razor
        </p>

        <div className="mini-carousel">
          <ImageCarousel images={imagesPatitas} interval={2000} />
        </div>

        <Link to="/proyectos/patitas-y-corazones" className="btn">
          Ver detalles
        </Link>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>The Market Trail — Consumo de DummyJSON</h2>
        <p>Front en React (Vite) que consume una API pública (DummyJSON).</p>
        <p>
          <strong>Tecnologías:</strong> React, Vite, JavaScript, HTML, CSS
        </p>

        <div className="mini-carousel">
          <ImageCarousel images={imagesMarket} interval={2000} />
        </div>

        <Link to="/proyectos/the-market-place" className="btn">
          Ver detalles
        </Link>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Appdoptame</h2>
        <p>Aplicación para gestionar adopciones utilizando Node.js y MongoDB.</p>
        <p>
          <strong>Tecnologías:</strong> Node.js, MongoDB, Express, Mongoose, JWT, Nodemailer, Multer
        </p>

        <div className="mini-carousel">
          <ImageCarousel images={imagesAppdoptame} interval={2000} />
        </div>

        <Link to="/proyectos/appdoptame" className="btn">
          Ver detalles
        </Link>
      </div>
    </section>
  );
}
