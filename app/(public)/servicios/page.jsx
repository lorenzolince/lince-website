import Link from "next/link";
import Hero from "../../components/Hero";
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
          <h2>Construya sobre lo que ya funciona en su organización.</h2>
          <p>
            Generate Service permite convertir operaciones de datos, contratos y fuentes existentes en servicios consumibles. El resultado puede adaptarse a los estándares y necesidades de cada equipo.
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
      </section>
      <section className="section product-details">
        <div className="container product-detail-grid">
          <article>
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
