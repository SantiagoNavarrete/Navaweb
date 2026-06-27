import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb orb1"></div>
      <div className="hero-orb orb2"></div>
      <div className="hero-bg-n" aria-hidden="true">N</div>
      <div className="hero-content">
        <div className="hero-eyebrow">Desarrollo Web Profesional</div>
        <h1>
          Tu presencia digital,<br />
          <span className="accent">construida para impactar.</span>
        </h1>
        <p className="hero-sub">
          En NavaWeb diseñamos y desarrollamos sitios web que no solo se ven increíbles, 
          sino que convierten visitantes en clientes reales.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">Empezar proyecto</a>
          <a href="#servicios" className="btn-ghost">Ver servicios</a>
        </div>
      </div>
    </section>
  );
}
