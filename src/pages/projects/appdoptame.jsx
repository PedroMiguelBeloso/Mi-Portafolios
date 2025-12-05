import React, { useEffect, useState } from "react";

import img1 from "../../assets/appdoptame1.jpg";
import img2 from "../../assets/appdoptame2.jpg";
import img3 from "../../assets/appdoptame3.jpg";
import img4 from "../../assets/appdoptame4.jpg";
import img5 from "../../assets/appdoptame5.jpg";
import img6 from "../../assets/appdoptame6.jpg";
import img7 from "../../assets/appdoptame7.jpg";
import img8 from "../../assets/appdoptame8.jpg";  
import img9 from "../../assets/appdoptame9.jpg";  

export default function Appdoptame() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(t);
  }, []);

  return (
    <section> 
      <h1>AppDoptame — API RESTfull para Adopciones</h1>

      <p>
        AppDoptame es una API RESTfull desarrollada con Node.js, Express y MongoDB.
        Permite realizar publicaciones de animales en adopción y gestionar usuarios.
        Fue creada como proyecto final de la materia "Programación en Nuevas Tecnologías 2" (ORT) por estudiantes.
        La misma integra APIs como Nodemailer para envíos de correos electrónicos cada vez que un animal es cargado.
        También se implementó Multer para la carga de imágenes.
        La app cuenta con un front-end básico que permite interactuar con la API, evitando el uso de Postman u otras herramientas similares.
        Tambien, dentro del proyecto se implementaron 2 tests, uno de integración y otro unitario, para asegurar el correcto funcionamiento de la API,
        utilizando Jest y Supertest, El unitario verifica la implementacion de verificacion de edad de los animales, la cual esta estimada entre los 0 a 20 años, mientras que el de integracion 
        chequea la conexion a la base de datos de MongoDB, realiza un get de las mascotas registradas validando que la respuesta sea correcta estatus 200 
        tambien carga usuarios de prueba y devuelve estatus 201 al crear un nuevo usuario.
      </p>

      <p>
        <strong>Funciones principales:</strong> gestión de animales en adopción,
        registro de usuarios, autenticación, carga de imágenes y envío de correos
        electrónicos.
      </p>

      <p>
        <strong>Tecnologías:</strong> Node.js, Express, MongoDB, Mongoose, JWT, REST API, Nodemailer, Multer
      </p>

      <h3>Capturas</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="market-container">
          <div style={{ textAlign: "center" }}>
            <img
              src={images[index]}
              alt={`AppDoptame - captura ${index + 1}`}
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

      <h3 style={{ marginTop: 20 }}>Demo</h3>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/XXXXXXXX"
          title="Demo AppDoptame"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="card code-card" style={{ marginTop: 20 }}>
        <svg
          className="code-card-icon"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 018 4.58c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            fill="#d8b4ff"
          />
        </svg>

        <div className="code-card-body">
          <h3>Código fuente</h3>
          <p>
            Repositorio del proyecto <strong>AppDoptame</strong> en GitHub.
          </p>
        </div>

        <a
          href="https://github.com/PedroMiguelBeloso/TP2-Trabajo-Practico-final.git"
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