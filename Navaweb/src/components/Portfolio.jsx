import '../styles/Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Plataforma SaaS - Dashboard Analytics',
    description: 'Dashboard interactivo con gráficos en tiempo real, análisis de datos y reportes personalizables. Interfaz intuitiva para empresas que necesitan monitorear métricas críticas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop',
    link: '#',
    tags: ['React', 'Chart.js', 'Node.js']
  },
  {
    id: 2,
    title: 'E-commerce Premium - Moda Sostenible',
    description: 'Tienda online completa con catálogo dinámico, carrito de compras, pasarela de pago integrada y sistema de gestión de inventario en tiempo real.',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=400&fit=crop',
    image_alt: 'E-commerce',
    link: '#',
    tags: ['Next.js', 'Stripe', 'MongoDB']
  },
  {
    id: 3,
    title: 'Landing Page - Startup Tech',
    description: 'Sitio web moderno con animaciones fluidas, secciones optimizadas para conversión y diseño responsivo. Resultó en 150% aumento de contactos iniciales.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
    link: '#',
    tags: ['React', 'Tailwind', 'SEO']
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
                <img src={project.image} alt={project.title} />
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
