import '../styles/Portfolio.css';
import screenshot1 from '../assets/Maestrogas.png';

const projects = [
  {
    id: 1,
    title: 'Maestro Gas - Plomero Profesional',
    description: 'Sitio web para plomero y gasista con más de 15 años de experiencia. Destaca servicios, presupuestos sin cargo y disponibilidad de consultas por WhatsApp.',
    image: screenshot1,
    link: 'https://maestrogas.vercel.app/',
    tags: ['React', 'Responsive', 'Lead Generation']
  },
  {
    id: 2,
    title: 'Julio Sama - Servicios Inmobiliarios',
    description: 'Plataforma inmobiliaria moderna con búsqueda de propiedades, administración de ventas y alquileres. Servicio premium 24/7 con ubicaciones interactivas.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop',
    link: 'https://julio-sama-inmobiliaria-5tze.vercel.app/',
    tags: ['React', 'Google Maps', 'Next.js']
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portafolio">
      <div className="container">
        <div className="section-header">
          <div className="section-label">// Nuestro trabajo</div>
          <h2 className="section-title">Proyectos que <span className="accent">generan resultados</span></h2>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a href={project.link} className="btn-primary" target="_blank" rel="noopener noreferrer">
                    Ver proyecto →
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
