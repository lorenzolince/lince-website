import Link from 'next/link';
import { generateServiceMarketing } from '../../components/generateServiceMarketing';

export const metadata = {
  title: 'Generate Service - Microservicios Spring Boot desde su base de datos',
  description: 'Genere APIs REST, GraphQL, gRPC y SOAP desde procedimientos, funciones y queries. Modo Test de 1 día para iterar económicamente. Despliegue end-to-end en Kubernetes con ArgoCD. Credenciales seguras.',
};

export default function GenerateServicePage() {
  const {
    hero,
    problems,
    advantagesSection,
    howItWorks,
    modesComparison,
    testAdvantage,
    architectureSection,
    faq,
    finalCta,
  } = generateServiceMarketing;

  return (
    <div className="marketing-page">
      {/* Hero */}
      <section className="hero hero-generate-service">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <div className="hero-ctas">
              {hero.cta.map((btn) => (
                <a
                  key={btn.label}
                  className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}
                  href={btn.href}
                  rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problemas */}
      <section className="section problems-section">
        <div className="container">
          <div className="section-heading">
            <h2>El reto: de lógica de negocio a APIs en producción</h2>
            <p>
              Sus procedimientos, funciones y queries contienen lógica probada en producción. Exponerlas como APIs y llevarlas a Kubernetes requiere resolver múltiples problemas simultáneamente.
            </p>
          </div>
          <div className="problems-grid">
            {problems.map((problem, idx) => (
              <article key={idx} className="problem-card">
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="section advantages-section">
        <div className="container">
          <div className="section-heading">
            <h2>{advantagesSection.title}</h2>
            <p>{advantagesSection.description}</p>
          </div>
          <div className="advantages-grid">
            {advantagesSection.advantages.map((adv, idx) => (
              <article key={idx} className="advantage-card">
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cómo funciona</h2>
            <p>Tres pasos simples desde la configuración hasta el despliegue en producción.</p>
          </div>
          <div className="workflow-steps">
            {howItWorks.map((step) => (
              <article key={step.step} className="workflow-step">
                <span className="step-number">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modos de Generación */}
      <section className="section modes-section">
        <div className="container">
          <div className="section-heading">
            <h2>Modos de generación: elige el que se adapte a ti</h2>
            <p>Generate Service ofrece cuatro formas diferentes de generar, compilar y desplegar. Selecciona la que mejor se ajuste a tu flujo de trabajo.</p>
          </div>
          <div className="modes-table-wrapper">
            <table className="modes-table">
              <thead>
                <tr>
                  <th>Modo</th>
                  <th>Qué entrega</th>
                  <th>Quién compila</th>
                  <th>Vigencia</th>
                  <th>Precio relativo</th>
                  <th>Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {modesComparison.modes.map((mode) => (
                  <tr key={mode.name}>
                    <td className="mode-name">{mode.name}</td>
                    <td>{mode.description}</td>
                    <td>{mode.what}</td>
                    <td>{mode.lifespan}</td>
                    <td>{mode.cost}</td>
                    <td>{mode.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Test: Ventaja */}
      <section className="section test-advantage-section">
        <div className="container">
          <div className="section-heading">
            <h2>Modo Test: itere económicamente en 24 horas</h2>
            <p>
              Genere versiones de prueba que viven un día en su infraestructura local. Pruebe con datos reales, ajuste endpoints y protocolos, y genere la versión final solo cuando esté seguro. Cuesta apenas ~10% del precio final.
            </p>
          </div>
          <div className="test-points">
            {testAdvantage.points.map((point, idx) => (
              <div key={idx} className="test-point">
                <span className="point-icon">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="section architecture-section">
        <div className="container">
          <div className="section-heading">
            <h2>{architectureSection.title}</h2>
            <p>{architectureSection.description}</p>
          </div>
          <div className="architecture-points">
            {architectureSection.points.map((point, idx) => (
              <div key={idx} className="arch-point">
                <span className="icon">→</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <h2>Preguntas frecuentes</h2>
            <p>Las dudas más comunes sobre seguridad, modos de generación y despliegue.</p>
          </div>
          <div className="faq-list">
            {faq.map((item, idx) => (
              <details key={idx} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section product-cta">
        <div className="container">
          <div className="product-cta-content">
            <div>
              <h2>{finalCta.title}</h2>
              <p>{finalCta.subtitle}</p>
            </div>
            <div className="hero-ctas">
              {finalCta.buttons.map((btn) => (
                <Link
                  key={btn.label}
                  className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
