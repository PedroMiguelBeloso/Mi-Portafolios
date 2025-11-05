import { Link } from "react-router-dom";
import yo from "../assets/Yo.jpg"; 

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo-container">
          <img src={yo} alt="Pedro" className="logo-photo" />
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
