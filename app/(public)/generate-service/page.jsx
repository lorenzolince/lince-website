import Link from 'next/link';
import { generateServiceMarketing } from '../../components/generateServiceMarketing';
import { links } from '../../components/site-data';

export const metadata = { 
  title: 'Generate Service - Genere microservicios Spring Boot en minutos',
  description: 'Genere APIs REST, GraphQL, gRPC y SOAP desde procedimientos almacenados, esquemas y bases de datos. Código fuente, Docker y CI/CD incluidos.',
};

export default function GenerateServicePage() {
  const { hero, problems, howItWorks, flowPreviews, localClient, differentiators, deliverables, audiences, demoVideos, faq, finalCta } = generateServiceMarketing;

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
                  rel="noreferrer"
                  target="_blank"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <img
          alt={hero.image.alt}
          src={hero.image.src}
          style={{ 
            display: 'absolute', 
            left: 0, 
            top: 0, 
            width: '100%', 
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </section>

      {/* Problemas que resuelve */}
      <section className="section problems-section">
        <div className="container">
          <div className="section-heading">
            <h2>Problemas que resuelve</h2>
            <p>Desde traducción manual hasta CI/CD automático: Generate Service elimina los cuellos de botella en integración.</p>
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

      {/* Cómo funciona */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cómo funciona en 3 pasos</h2>
            <p>Desde la fuente de datos hasta el microservicio desplegado en producción.</p>
          </div>
          <div className="workflow-steps">
            {howItWorks.map((step) => (
              <article key={step.step} className="workflow-step">
                <span className="step-number">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vista previa de flujos */}
      <section className="section flow-previews-section">
        <div className="container">
          <div className="section-heading">
            <h2>Vista previa de los flujos principales</h2>
            <p>Cada escenario tiene una guía visual completa disponible en nuestra guía de uso.</p>
          </div>
          <div className="flow-preview-grid">
            {flowPreviews.map((flow) => (
              <article key={flow.id} className="flow-preview-card">
                <img
                  alt={flow.image.alt}
                  height={flow.image.height}
                  src={flow.image.src}
                  width={flow.image.width}
                />
                <h3>{flow.title}</h3>
                <p>{flow.description}</p>
                <Link className="text-link" href={flow.href}>
                  Ver en la guía →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cliente local */}
      <section className="section local-client-section">
        <div className="container">
          <article className="local-client">
            <div className="local-client-content">
              <h2>{localClient.title}</h2>
              <p>{localClient.description}</p>
              <div className="local-client-benefits">
                {localClient.benefits.map((benefit, idx) => (
                  <article key={idx}>
                    <span className="benefit-badge">✓</span>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="local-client-visuals">
              {localClient.images.map((image, idx) => (
                <figure key={idx} className="local-client-visual">
                  <img
                    alt={image.alt}
                    height={image.height}
                    src={image.src}
                    width={image.width}
                  />
                </figure>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="section differentiators-section">
        <div className="container">
          <div className="section-heading">
            <h2>Diferenciadores</h2>
            <p>Por qué Generate Service es la opción para equipos que demandan velocidad y control.</p>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((diff, idx) => (
              <article key={idx} className="differentiator-card">
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Entregables */}
      <section className="section deliverables-section">
        <div className="container">
          <div className="section-heading">
            <h2>Qué recibe</h2>
            <p>Cada generación entrega artefactos completos listos para producción.</p>
          </div>
          <div className="deliverables-grid">
            {deliverables.map((item, idx) => (
              <article key={idx} className="deliverable-card">
                <span className="deliverable-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Públicos objetivo */}
      <section className="section audiences-section">
        <div className="container">
          <div className="section-heading">
            <h2>Para quién es</h2>
            <p>Generate Service acelera entregas en múltiples contextos.</p>
          </div>
          <div className="audiences-grid">
            {audiences.map((audience, idx) => (
              <article key={idx} className="audience-card">
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos de demostración */}
      {demoVideos.some(v => v.videoId !== 'PENDIENTE') && (
        <section className="section demo-videos-section">
          <div className="container">
            <div className="section-heading">
              <h2>Videos de demostración</h2>
              <p>Vea Generate Service en acción.</p>
            </div>
            <div className="demo-videos-grid">
              {demoVideos.map((video, idx) => 
                video.videoId !== 'PENDIENTE' ? (
                  <article key={idx} className="demo-video-card">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    {/* TODO: Agregar reproductor de video una vez disponible el videoId */}
                  </article>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <h2>Preguntas frecuentes</h2>
            <p>Resuelva sus dudas sobre capabilities, seguridad y despliegue.</p>
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
              <p className="eyebrow">Acelere su transformación digital</p>
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
