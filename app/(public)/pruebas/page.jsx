import Hero from "../../components/Hero";
import { links, testSteps } from "../../components/site-data";

export const metadata = { title: "Generate Service Test" };

export default function TestPage() {
  return (
    <div className="page tests-page">
      <Hero
        className="hero-tests"
        subtitle="Un recorrido práctico para evaluar microservicios generados con escenarios, esquemas y herramientas de prueba preparados."
        title="Generate Service Test"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Evidencia técnica</p>
            <h2>Compruebe el resultado antes de adoptarlo.</h2>
            <p>
              Generate Service Test reúne motores, scripts SQL, archivos de esquema, configuraciones de gateway y una interfaz para validar servicios generados en escenarios reproducibles.
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
      <section className="section product-cta">
        <div className="container product-cta-content">
          <div>
            <p className="eyebrow">Repositorio público</p>
            <h2>Use los escenarios como guía para su propia evaluación.</h2>
            <p>El repositorio explica cómo generar, ejecutar y validar servicios REST, GraphQL, gRPC y SOAP con diferentes motores de datos.</p>
          </div>
          <a className="btn btn-primary" href={links.testRepository} rel="noreferrer" target="_blank">Ver Generate Service Test</a>
        </div>
      </section>
    </div>
  );
}
