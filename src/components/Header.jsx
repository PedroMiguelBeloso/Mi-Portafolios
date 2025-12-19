import { Link } from "react-router-dom";
import avatar from "../assets/yo.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={avatar} alt="Pedro Miguel Beloso" className="avatar" />
          <h1 className="logo">Pedro Miguel Beloso</h1>
        </div>

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
