import Link from "next/link";
import { capabilities, links, testSteps, useCases } from "../../components/site-data";

export const metadata = { title: "Inicio" };

export default function HomePage() {
  return (
    <div className="marketing-page">
      <section className="hero hero-product">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="eyebrow">Lince Technology presenta</p>
            <h1 className="hero-title">Integraciones empresariales, listas para evolucionar.</h1>
            <p className="hero-subtitle">
              Generate Service transforma esquemas, contratos y lógica de integración en microservicios preparados para su entorno.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={links.platform} rel="noreferrer" target="_blank">Ir a Generate Service</a>
              <Link className="btn btn-outline" href="/pruebas">Ver cómo se prueba</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section introduction">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">El producto</p>
            <h2>De la complejidad técnica a una integración clara.</h2>
            <p>
              Generate Service ayuda a los equipos a crear microservicios e integraciones desde fuentes empresariales existentes, sin perder la capacidad de adaptar el resultado a sus procesos.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.title}>
                <span className="capability-number">{capability.icon}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="container">
          <div className="workflow">
            <div>
              <p className="eyebrow">Un flujo pensado para equipos técnicos</p>
              <h2>Use su conocimiento de negocio. Automatice el trabajo repetitivo.</h2>
              <p>
                Parta de una base de datos, un esquema o una API. Defina la interfaz que necesita y obtenga un microservicio con una estructura preparada para integración, validación y evolución.
              </p>
              <Link className="text-link" href="/servicios">Conocer las capacidades <span aria-hidden="true">→</span></Link>
            </div>
            <div className="workflow-diagram" aria-label="Esquema de flujo de Generate Service">
              <div>Datos, contratos y eventos</div>
              <span>→</span>
              <div className="workflow-emphasis">Generate<br />Service</div>
              <span>→</span>
              <div>Microservicios y artefactos</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section use-cases-section">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Casos de uso</p>
            <h2>Diseñado para retos de integración reales.</h2>
          </div>
          <div className="use-case-grid">
            {useCases.map((useCase) => (
              <article key={useCase.title}>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section evidence-section">
        <div className="container">
          <div className="evidence-header">
            <div>
              <p className="eyebrow">Validación práctica</p>
              <h2>Explore Generate Service Test antes de tomar una decisión.</h2>
            </div>
            <Link className="btn btn-outline" href="/pruebas">Conocer el entorno de prueba</Link>
          </div>
          <div className="evidence-preview">
            <img alt={testSteps[1].alt} src={testSteps[1].image} />
            <div>
              <h3>Pruebe con escenarios preparados</h3>
              <p>El repositorio público incluye motores, esquemas, colecciones y una interfaz para validar servicios generados con evidencia técnica.</p>
              <a className="text-link" href={links.testRepository} rel="noreferrer" target="_blank">Abrir repositorio público <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
