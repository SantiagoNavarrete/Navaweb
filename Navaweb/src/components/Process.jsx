import '../styles/Process.css';

const steps = [
  {
    number: '1',
    title: 'Conversamos',
    description: 'Entendemos tu negocio, tus objetivos y lo que necesitás de tu web.'
  },
  {
    number: '2',
    title: 'Diseñamos',
    description: 'Creamos una propuesta visual única alineada con tu marca.'
  },
  {
    number: '3',
    title: 'Desarrollamos',
    description: 'Construimos tu sitio con código limpio, rápido y escalable.'
  },
  {
    number: '4',
    title: 'Lanzamos',
    description: 'Publicamos tu web y te acompañamos en el proceso de crecimiento.'
  }
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="section-header">
        <div className="section-label">// Cómo trabajamos</div>
        <h2 className="section-title">Un proceso <span className="accent">claro y eficiente</span></h2>
      </div>
      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-num">{step.number}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
