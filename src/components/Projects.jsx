export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>

      <div className="project-card">
        <h3>🐾 Animalitos — Plataforma de Adopción de Mascotas</h3>
        <p>
          Aplicación web desarrollada con <strong>ASP.NET Core MVC</strong> y{" "}
          <strong>Entity Framework Core</strong> para gestionar publicaciones de
          adopción de mascotas. Permite crear usuarios, subir publicaciones y
          administrar datos en una base de datos relacional.
        </p>
        <p>
          <strong>Tecnologías:</strong> C#, ASP.NET Core, Entity Framework, HTML,
          CSS, JavaScript
        </p>
        <a
          href="https://github.com/PedroMiguelBeloso/Proyecto-animalitos"
          target="_blank"
        >
          Ver código en GitHub
        </a>
      </div>

      <div className="project-card">
        <h3>🛍️ Tienda React — Consumo de API pública (DummyJSON)</h3>
        <p>
          Aplicación React creada con <strong>Vite</strong> que muestra productos
          obtenidos desde la API DummyJSON. Permite listar, buscar y administrar
          productos, implementando operaciones CRUD.
        </p>
        <p>
          <strong>Tecnologías:</strong> React, Vite, JavaScript, HTML, CSS, API
          DummyJSON
        </p>
        <a
          href="https://github.com/PedroMiguelBeloso/ProyectoFinal-Pagina-web"
          target="_blank"
        >
          Ver código en GitHub
        </a>
      </div>
    </section>
  );
}
