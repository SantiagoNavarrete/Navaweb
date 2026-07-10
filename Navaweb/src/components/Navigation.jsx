import '../styles/Navigation.css';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <li><a href="hero"><Logo size="32px" variant="icon" /></a></li>
      </div>
      <ul className="nav-links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <a href="#contacto" className="nav-cta">Hablemos →</a>
    </nav>
  );
}
