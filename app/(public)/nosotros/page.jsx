import Hero from "../../components/Hero";
import Link from "next/link";
import { company } from "../../components/site-data";

export const metadata = { title: "Nosotros" };

export default function AboutPage() {
  return (
    <div className="page nosotros">
      <Hero
        className="hero-nosotros"
        subtitle="Ingeniería de software e integración para organizaciones que necesitan avanzar con seguridad técnica."
        title="Lince Technology"
      />
      <section className="company-sections container">
        <div className="grid-2">
          <article className="card mission">
            <h2>Misión</h2>
            <p>{company.mission}</p>
          </article>
          <article className="card vision">
            <h2>Visión</h2>
            <p>{company.vision}</p>
          </article>
        </div>
        <div className="values">
          <h2>Valores</h2>
          <ul className="value-list">
            {company.values.map((value) => <li key={value}>{value}</li>)}
          </ul>
        </div>
      </section>
      <section className="company-story-section">
        <div className="container company-story">
          <div className="company-story-content">
            <p className="eyebrow">Una empresa detrás del producto</p>
            <h2>Experiencia práctica convertida en una plataforma.</h2>
            <p>
              Lince Technology combina desarrollo de software, integración y operación tecnológica para resolver problemas que normalmente consumen tiempo en los equipos: exponer lógica existente, conectar sistemas y mantener flujos confiables.
            </p>
            <p>
              Generate Service nace de ese trabajo práctico. La plataforma reúne patrones y automatizaciones que permiten a los equipos dedicar más atención a las decisiones de negocio y menos al código repetitivo de integración.
            </p>
          </div>
          <img
            alt="Profesional trabajando en la arquitectura de una solución tecnológica"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85"
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Una perspectiva técnica, clara y evolutiva.</h2>
          </div>
          <div className="work-principles">
            <article>
              <span>01</span>
              <h3>Entender el contexto</h3>
              <p>Partimos de los sistemas, procesos y restricciones que ya forman parte de su operación.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Simplificar la integración</h3>
              <p>Priorizamos soluciones comprensibles que reduzcan complejidad sin ocultar decisiones importantes.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Diseñar para evolucionar</h3>
              <p>Entregamos una base que puede adaptarse a nuevos procesos, entornos y necesidades técnicas.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="specialized-support-section">
        <div className="container specialized-support">
          <img
            alt="Equipo revisando una estrategia de entrega de software"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
          />
          <div>
            <p className="eyebrow">Soporte especializado</p>
            <h2>Apoyo para llevar sus integraciones a producción.</h2>
            <p>
              Generate Service es una plataforma autogestionada. Cuando su equipo necesita acompañamiento adicional, Lince Technology puede ayudar a convertir el resultado en un flujo de entrega alineado con su operación.
            </p>
            <div className="support-options">
              <article>
                <h3>Automatización de entrega</h3>
                <p>Plantillas reutilizables para preparar y validar entregas desde Jenkins o GitLab.</p>
              </article>
              <article>
                <h3>Despliegue continuo</h3>
                <p>Integración con Argo CD para promover aplicaciones hacia Kubernetes de forma ordenada.</p>
              </article>
              <article>
                <h3>Acompañamiento técnico</h3>
                <p>Adaptación de las plantillas a los entornos, flujos y controles definidos por su equipo.</p>
              </article>
            </div>
            <Link className="text-link" href="/contactos">Conversemos sobre su flujo de entrega <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
