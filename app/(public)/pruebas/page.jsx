import PageHero from "../../components/PageHero";
import { links, testSteps } from "../../components/site-data";

export const metadata = {
  title: "Generate Service Test",
  description:
    "Proyecto de prueba gratuito con bases de datos de ejemplo para Oracle, SQL Server, PostgreSQL, MySQL y MariaDB: genera, ejecuta y prueba tus microservicios.",
};

export default function TestPage() {
  return (
    <div className="page tests-page">
      <PageHero
        eyebrow="Generate Service Test"
        title="Compruébalo tú mismo,"
        accent="con datos reales."
        subtitle="Un proyecto de prueba gratuito con bases de datos, esquemas y herramientas listas para generar y probar tus microservicios."
      >
        <div className="home-ctas">
          <a className="btn btn-primary home-btn-glow" href={links.testRepository} rel="noreferrer" target="_blank">
            Abrir el repositorio
          </a>
          <a className="btn home-btn-ghost" href="/generate-service/guia/primera-api-rest/">Seguir el tutorial</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Escenarios listos para usar</p>
            <h2>Prueba el resultado antes de adoptarlo.</h2>
            <p>
              Generate Service Test reúne bases de datos de ejemplo, scripts SQL, archivos de esquema, configuraciones de
              gateway y una interfaz para probar los servicios generados en escenarios que puedes repetir.
            </p>
          </div>
          <div className="test-step-list">
            {testSteps.map((step) => (
              <article className="test-step" key={step.number}>
                <div className="test-step-content">
                  <span className="capability-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <img alt={step.alt} src={step.image} />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-final">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="container home-final-inner">
          <h2>Usa los escenarios como guía para tu evaluación.</h2>
          <p>El repositorio explica cómo generar, ejecutar y probar servicios REST, GraphQL, gRPC y SOAP con distintos motores de base de datos.</p>
          <div className="home-ctas">
            <a className="btn btn-primary home-btn-glow" href={links.testRepository} rel="noreferrer" target="_blank">
              Ver Generate Service Test
            </a>
            <a className="btn home-btn-ghost" href={links.platform} rel="noreferrer" target="_blank">Pruébalo gratis</a>
          </div>
        </div>
      </section>
    </div>
  );
}
