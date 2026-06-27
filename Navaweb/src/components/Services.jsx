import '../styles/Services.css';

const services = [
  {
    icon: '🎨',
    title: 'Diseño Web a Medida',
    description: 'Interfaces únicas y atractivas diseñadas específicamente para tu marca. Sin plantillas genéricas, todo pensado para vos.',
    tags: ['UI/UX', 'Figma', 'Branding']
  },
  {
    icon: '⚡',
    title: 'Desarrollo Frontend',
    description: 'Sitios rápidos, modernos y responsivos con las últimas tecnologías. Rendimiento y estética en un solo lugar.',
    tags: ['React', 'Next.js', 'TypeScript']
  },
  {
    icon: '🛒',
    title: 'Tiendas Online',
    description: 'E-commerce completo y optimizado para vender. Desde la vitrina hasta el checkout, una experiencia de compra fluida.',
    tags: ['WooCommerce', 'Shopify', 'Payments']
  },
  {
    icon: '🔍',
    title: 'SEO & Performance',
    description: 'Que Google te encuentre primero. Optimizamos tu sitio para aparecer en los primeros resultados y cargar en milisegundos.',
    tags: ['SEO', 'Core Web Vitals', 'Analytics']
  },
  {
    icon: '🔧',
    title: 'Mantenimiento Web',
    description: 'Tu sitio siempre activo y actualizado. Monitoreo continuo, backups y actualizaciones de seguridad incluidas.',
    tags: ['Hosting', 'Seguridad', 'Soporte']
  },
  {
    icon: '📱',
    title: 'Landing Pages',
    description: 'Páginas de aterrizaje que convierten. Diseñadas para captar leads, promocionar productos o lanzar tu próximo proyecto.',
    tags: ['Conversión', 'A/B Testing', 'CRO']
  }
];

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="section-header">
        <div className="section-label">// Lo que hacemos</div>
        <h2 className="section-title">Servicios que <span className="accent">elevan tu negocio</span></h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
