import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Pedro Miguel Beloso</h1>

        <nav className="navbar">
          <ul>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/sobre-mi">Sobre mí</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
