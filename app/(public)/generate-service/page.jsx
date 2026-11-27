import Link from "next/link";
import PageHero from "../../components/PageHero";
import { generateServiceMarketing } from "../../components/generateServiceMarketing";

export const metadata = {
  title: "Generate Service: de tu base de datos a microservicios en minutos",
  description:
    "Convierte procedimientos, funciones y queries en microservicios Spring Boot listos para producción: REST, GraphQL, gRPC, SOAP, mensajería, archivos y CI/CD. Credenciales en tu red y código fuente tuyo.",
  alternates: { canonical: "/generate-service/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Lince Technology",
    url: "/generate-service/",
    title: "Tus sistemas, conectados en minutos | Generate Service",
    description:
      "Convierte la información y la lógica que tu empresa ya tiene en servicios listos para apps, socios, canales digitales y procesos automáticos. Pruébalo gratis.",
    images: [{ url: "/og/generate-service.png", width: 1200, height: 630, alt: "Generate Service: tus sistemas, conectados en minutos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tus sistemas, conectados en minutos | Generate Service",
    images: ["/og/generate-service.png"],
  },
};

function Boton({ btn, oscuro }) {
  const externo = btn.href.startsWith("http");
  const clase = btn.primary ? "btn btn-primary home-btn-glow" : oscuro ? "btn home-btn-ghost" : "btn btn-outline";
  return externo ? (
    <a className={clase} href={btn.href} rel="noreferrer" target="_blank">{btn.label}</a>
  ) : (
    <Link className={clase} href={btn.href}>{btn.label}</Link>
  );
}

export default function GenerateServicePage() {
  const { hero, challenge, connections, howItWorks, modes, testAdvantage, security, faq, finalCta } = generateServiceMarketing;

  return (
    <div className="marketing-page">
      <PageHero eyebrow={hero.eyebrow} title={hero.title} accent={hero.accent} subtitle={hero.subtitle}>
        <div className="home-ctas">
          {hero.cta.map((btn) => <Boton key={btn.label} btn={btn} oscuro />)}
        </div>
      </PageHero>

      {/* El reto (brochure, página 1) */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{challenge.eyebrow}</p>
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
          </div>
          <div className="home-pillars">
            {challenge.pains.map((p) => (
              <article key={p.title} className="home-pillar">
                <span className="home-pillar-icon" aria-hidden="true">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
          <p className="gs-answer">{challenge.answer}</p>
        </div>
      </section>

      {/* Todas tus conexiones (brochure, página 3) */}
      <section className="section home-steps-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{connections.eyebrow}</p>
            <h2>{connections.title}</h2>
          </div>
          <div className="gs-connections">
            {connections.items.map((c) => (
              <article key={c.title}>
                <span aria-hidden="true">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cómo funciona</p>
            <h2>Tres pasos, sin código repetitivo.</h2>
          </div>
          <ol className="home-steps gs-steps-3">
            {howItWorks.map((s) => (
              <li key={s.step}>
                <span>{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Modos */}
      <section className="section home-steps-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cómo lo recibes</p>
            <h2>Elige el modo que se adapta a ti.</h2>
            <p>Los endpoints son los mismos en todos los modos; cambia solo cómo los recibes.</p>
          </div>
          <div className="gs-table-wrap">
            <table className="gs-table">
              <thead>
                <tr><th>Modo</th><th>Qué recibes</th><th>Quién compila</th><th>Ideal para</th></tr>
              </thead>
              <tbody>
                {modes.map((m) => (
                  <tr key={m.name}>
                    <td><strong>{m.name}</strong></td><td>{m.what}</td><td>{m.who}</td><td>{m.ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="gs-test">
            <div>
              <h3>{testAdvantage.title}</h3>
              <p>{testAdvantage.description}</p>
            </div>
            <ul>
              {testAdvantage.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="section workflow-section">
        <div className="container">
          <div className="workflow">
            <div>
              <p className="eyebrow">{security.eyebrow}</p>
              <h2>{security.title}</h2>
              <p>{security.description}</p>
              <Link className="text-link" href="/generate-service/guia/seguridad/">Más sobre seguridad <span aria-hidden="true">→</span></Link>
            </div>
            <ul className="gs-security">
              {security.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Lo que más nos preguntan.</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="home-final">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="container home-final-inner">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.subtitle}</p>
          <div className="home-ctas">
            {finalCta.buttons.map((btn) => <Boton key={btn.label} btn={btn} oscuro />)}
          </div>
        </div>
      </section>
    </div>
  );
}
