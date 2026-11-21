import Link from "next/link";
import { capabilities, links, testSteps, useCases } from "../../components/site-data";

export const metadata = {
  title: "Inicio",
  description:
    "Generate Service convierte la lógica de tu base de datos en microservicios Spring Boot listos para producción, en minutos. Credenciales en tu red y código fuente tuyo.",
};

const tecnologias = [
  "Oracle", "SQL Server", "PostgreSQL", "MySQL", "MariaDB",
  "REST", "GraphQL", "gRPC", "SOAP", "WebSocket",
  "Kafka", "RabbitMQ", "SFTP", "Kubernetes",
];

const pilares = [
  {
    icono: "⚡",
    titulo: "Velocidad",
    texto: "Lo que a tu equipo le toma semanas de código repetitivo, Generate Service lo resuelve en minutos.",
  },
  {
    icono: "🔒",
    titulo: "Seguridad",
    texto: "Con el cliente local, tus credenciales se quedan en tu red: a la plataforma solo viaja el esquema.",
  },
  {
    icono: "🧩",
    titulo: "Control",
    texto: "El código fuente es tuyo y tus APIs corren en tu infraestructura: Docker, Kubernetes o tu servidor.",
  },
];

const pasos = [
  { n: "01", titulo: "Conecta", texto: "Registra tu base de datos o genera el esquema con el cliente local." },
  { n: "02", titulo: "Elige", texto: "Marca los procedimientos, funciones o queries que quieres publicar." },
  { n: "03", titulo: "Genera", texto: "Selecciona la tecnología y cómo lo quieres recibir. Un clic." },
  { n: "04", titulo: "Úsalo", texto: "Código fuente, binario, prueba local o despliegue en tu pipeline." },
];

export default function HomePage() {
  return (
    <div className="marketing-page">
      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-hero-text">
            <p className="home-eyebrow">Generate Service · by Lince Technology</p>
            <h1>
              De tu base de datos a una <span className="home-accent">API en minutos</span>.
            </h1>
            <p className="home-lead">
              Convierte la lógica que ya tienes en microservicios Spring Boot listos para producción. Tu equipo entrega más,
              más rápido y con menos riesgo.
            </p>
            <div className="home-ctas">
              <a className="btn btn-primary home-btn-glow" href={links.platform} rel="noreferrer" target="_blank">
                Pruébalo gratis
              </a>
              <Link className="btn home-btn-ghost" href={links.guide}>Ver la guía</Link>
            </div>
            <ul className="home-trust">
              <li>Credenciales en tu red</li>
              <li>Código fuente tuyo</li>
              <li>Hecho en Panamá</li>
            </ul>
          </div>

          {/* Visual: flujo animado base de datos → Generate Service → API */}
          <div className="home-console" aria-label="Ejemplo: de un procedimiento de base de datos a una API REST">
            <div className="home-console-bar">
              <span /><span /><span />
              <em>generate-service</em>
            </div>
            <div className="home-console-body">
              <div className="home-node">
                <small>Base de datos · MariaDB</small>
                <code>GS_SP_GET_PERSONA</code>
              </div>
              <div className="home-wire" aria-hidden="true"><i /></div>
              <div className="home-node home-node-core">
                <small>Generate Service</small>
                <code>REST · Spring Boot</code>
              </div>
              <div className="home-wire" aria-hidden="true"><i /></div>
              <div className="home-node home-node-out">
                <small>Tu API</small>
                <code>POST /api/gsSpGetPersona</code>
                <span className="home-ok">200 OK ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Tecnologías ---------- */}
      <section className="home-tech" aria-label="Tecnologías compatibles">
        <div className="container home-tech-row">
          {tecnologias.map((t) => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* ---------- Pilares ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Por qué Generate Service</p>
            <h2>Más entregas, con el mismo equipo.</h2>
            <p>Automatiza la parte repetitiva de cada integración y deja que tu equipo se dedique a lo que hace crecer el negocio.</p>
          </div>
          <div className="home-pillars">
            {pilares.map((p) => (
              <article key={p.titulo} className="home-pillar">
                <span className="home-pillar-icon" aria-hidden="true">{p.icono}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cómo funciona ---------- */}
      <section className="section home-steps-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Cómo funciona</p>
            <h2>Cuatro pasos, sin escribir código repetitivo.</h2>
          </div>
          <ol className="home-steps">
            {pasos.map((p) => (
              <li key={p.n}>
                <span>{p.n}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <div className="home-center">
            <Link className="text-link" href={links.guide}>Aprende paso a paso en la guía <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      {/* ---------- Capacidades ---------- */}
      <section className="section introduction">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Capacidades</p>
            <h2>De la lógica de tu base de datos a servicios modernos.</h2>
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

      {/* ---------- Integración entre protocolos ---------- */}
      <section className="section workflow-section">
        <div className="container">
          <div className="workflow">
            <div>
              <p className="eyebrow">Integración sin fricción</p>
              <h2>Tus microservicios se entienden entre sí, aunque hablen distinto.</h2>
              <p>
                Un servicio REST puede consumir otro gRPC, dejar el resultado en una cola de RabbitMQ y otro servicio
                generar un PDF y enviarlo por correo o SFTP. Generate Service se encarga de la transformación entre
                protocolos: tú solo eliges el origen y el destino.
              </p>
              <Link className="text-link" href="/generate-service/guia/reglas-integracion/">
                Cómo integrar microservicios <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="workflow-diagram" aria-label="Ejemplo de integración entre protocolos">
              <div>REST</div>
              <span>→</span>
              <div className="workflow-emphasis">RabbitMQ</div>
              <span>→</span>
              <div>PDF por correo o SFTP</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Casos de uso ---------- */}
      <section className="section use-cases-section">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Casos de uso</p>
            <h2>Pensado para retos de integración reales.</h2>
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

      {/* ---------- Prueba ---------- */}
      <section className="section evidence-section">
        <div className="container">
          <div className="evidence-header">
            <div>
              <p className="eyebrow">Compruébalo tú mismo</p>
              <h2>Pruébalo con nuestro proyecto de ejemplo, gratis.</h2>
            </div>
            <Link className="btn btn-outline" href="/pruebas">Conocer el entorno de prueba</Link>
          </div>
          <div className="evidence-preview">
            <img alt={testSteps[1].alt} src={testSteps[1].image} />
            <div>
              <h3>Escenarios listos para usar</h3>
              <p>
                Bases de datos de ejemplo para Oracle, SQL Server, PostgreSQL, MySQL y MariaDB, con esquemas, colecciones
                y una interfaz para probar tus servicios generados.
              </p>
              <a className="text-link" href={links.testRepository} rel="noreferrer" target="_blank">
                Abrir el repositorio público <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <section className="home-final">
        <div className="home-hero-glow" aria-hidden="true" />
        <div className="container home-final-inner">
          <h2>Tu próxima integración, lista hoy.</h2>
          <p>Crea tu cuenta, conecta tu base de datos y genera tu primera API en minutos.</p>
          <div className="home-ctas">
            <a className="btn btn-primary home-btn-glow" href={links.platform} rel="noreferrer" target="_blank">
              Pruébalo gratis
            </a>
            <Link className="btn home-btn-ghost" href="/videos/">Ver demos en video</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
