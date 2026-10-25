import Link from "next/link";
import Hero from "../../components/Hero";
import ProductVisual from "../../components/ProductVisual";
import { capabilities, links } from "../../components/site-data";

export const metadata = { title: "Generate Service" };

export default function ServicesPage() {
  return (
    <div className="page servicios">
      <Hero
        className="hero-services"
        subtitle="Una plataforma para convertir fuentes empresariales en microservicios e integraciones preparados para evolucionar."
        title="Generate Service"
      />
      <section className="container section product-overview">
        <div className="section-heading">
          <p className="eyebrow">Automatización con criterio técnico</p>
          <h2>Automatice la construcción. Mantenga el control técnico.</h2>
          <p>
            Generate Service transforma fuentes empresariales existentes en microservicios e integraciones preparados para validarse y evolucionar. Su equipo conserva el contexto y las decisiones que hacen única a su operación.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <ProductVisual type={["sources", "protocols", "flows", "artifacts"][index]} />
              <span className="capability-number">{capability.icon}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section product-details">
        <div className="container product-detail-grid">
          <article>
            <img
              alt="Infraestructura tecnológica conectada"
              className="product-detail-image"
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
            />
            <p className="eyebrow">Fuentes de integración</p>
            <h2>Conecte el punto de partida correcto.</h2>
            <p>Trabaje desde objetos de bases de datos, APIs, contratos SOAP, esquemas GraphQL, definiciones gRPC y archivos de esquema.</p>
            <ul className="feature-list">
              <li>Oracle, SQL Server, PostgreSQL, MySQL y MariaDB.</li>
              <li>REST, GraphQL, SOAP, gRPC y WebSocket.</li>
              <li>Mensajería, archivos, SFTP y tareas programadas.</li>
            </ul>
          </article>
          <article>
            <img
              alt="Equipo preparando una entrega de software"
              className="product-detail-image"
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1000&q=85"
            />
            <p className="eyebrow">Entrega y evolución</p>
            <h2>Mantenga el control de su solución.</h2>
            <p>Los artefactos generados están pensados para integrarse a su forma de trabajo, con opciones de configuración por entorno y extensibilidad mediante código fuente.</p>
            <ul className="feature-list">
              <li>Artefactos, configuración y paquetes de despliegue.</li>
              <li>Opciones para pruebas y automatización CI/CD.</li>
              <li>Compatibilidad con Docker, Kubernetes y servidores empresariales.</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="local-client-section">
        <div className="container local-client">
          <div className="local-client-content">
            <p className="eyebrow">Cliente local</p>
            <h2>Ejecute, configure y valide cerca de sus sistemas.</h2>
            <p>
              Cuando sus recursos, pruebas o herramientas de entrega permanecen dentro de su red, Generate Service ofrece un cliente local descargable. Solo necesita Docker para ejecutarlo en su entorno.
            </p>
            <div className="local-client-benefits">
              <article>
                <span>01</span>
                <div>
                  <h3>Descarga directa</h3>
                  <p>Obtenga el entorno local como archivo <code>docker-compose.yml</code> desde la plataforma.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Conexión en su red</h3>
                  <p>Conecte sus fuentes de datos y recursos internos desde el entorno que usted controla.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Pruebas y configuración local</h3>
                  <p>Ajuste variables por entorno, ejecute artefactos generados y valide el resultado antes de avanzar.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <h3>CI/CD dentro de su intranet</h3>
                  <p>Integre el endpoint de su plataforma CI/CD para continuar el flujo de entrega desde su propia red.</p>
                </div>
              </article>
            </div>
            <a className="text-link" href={links.platform} rel="noreferrer" target="_blank">Acceder a Generate Service <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="local-client-visual">
            <img
              alt="Cliente local de Generate Service para generar esquemas de base de datos"
              src="/images/generate-service-test/local-schema-generation.png"
            />
            <figcaption>Cliente local de Generate Service: generación de esquemas dentro de su entorno.</figcaption>
          </figure>
        </div>
      </section>
      <section className="section local-validation-section">
        <div className="container local-validation">
          <figure className="validation-visual">
            <img
              alt="Interfaz de Generate Service Test para validar servicios generados"
              src="/images/generate-service-test/test-interface.png"
            />
            <figcaption>Validación de servicios generados con escenarios preparados.</figcaption>
          </figure>
          <div>
            <p className="eyebrow">Validación práctica</p>
            <h2>Compruebe el resultado antes de promoverlo.</h2>
            <p>
              Descargue y ejecute los artefactos generados en su entorno. Valide cada servicio con las herramientas adecuadas para su tecnología y continúe hacia su flujo de entrega cuando esté listo.
            </p>
            <div className="validation-flow" aria-label="Flujo de validación local">
              <span>Artefacto generado</span>
              <i aria-hidden="true">→</i>
              <span>Cliente local</span>
              <i aria-hidden="true">→</i>
              <span>Prueba e integración</span>
            </div>
            <Link className="text-link" href="/pruebas">Explorar Generate Service Test <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
      <section className="section product-cta">
        <div className="container">
          <div className="product-cta-content">
            <div>
              <p className="eyebrow">Acceso sencillo</p>
              <h2>Empiece desde la plataforma.</h2>
              <p>Puede acceder con Google, GitHub o un registro por correo con información mínima.</p>
            </div>
            <div className="hero-ctas">
              <a className="btn btn-primary" href={links.platform} rel="noreferrer" target="_blank">Abrir Generate Service</a>
              <Link className="btn btn-outline" href="/contactos">Hablar con Lince Technology</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
