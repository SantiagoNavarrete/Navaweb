import '../styles/Navigation.css';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="nav">
    <a href= "#hero" >
       <div className="nav-logo">
        <Logo size="32px" variant="icon" />
      </div>
    </a> 
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
