import PageHero from "../../components/PageHero";
import Link from "next/link";
import { company, links } from "../../components/site-data";
import { Tarjeta } from "../../components/videos/VideoGallery";
import { videos } from "../../components/videos/videosData";

const podcast = videos.find((v) => v.categoria === "conversaciones");

export const metadata = {
  title: "Empresa",
  description:
    "Lince Technology, empresa panameña de software, creadora de Generate Service: misión, visión, valores y la historia detrás del producto.",
};

export default function AboutPage() {
  return (
    <div className="page nosotros">
      <PageHero
        eyebrow="Lince Technology"
        title="Software hecho en Panamá"
        accent="para integrar sin fricción."
        subtitle="Ingeniería de software e integración para empresas que quieren avanzar rápido y con seguridad."
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

      {/* ---------- Historia del fundador ---------- */}
      <section className="section founder-section">
        <div className="container founder">
          <div className="founder-photo">
            <img src="/images/fundador.webp" alt="Lorenzo Lince, fundador de Lince Technology y creador de Generate Service" width="600" height="600" />
          </div>
          <div>
            <p className="eyebrow">La historia detrás de Generate Service</p>
            <h2>Nació de escribir el mismo código una y otra vez.</h2>
            <p>
              Durante años, como arquitecto de software, vi a los equipos repetir el mismo trabajo en cada integración:
              procedimiento, servicio, controlador, contratos, documentación, pipeline y despliegue. Semanas de esfuerzo
              en código que no aporta nada nuevo al negocio.
            </p>
            <p>
              Generate Service reúne todo ese conocimiento en una plataforma: tú eliges qué publicar y cómo recibirlo, y
              la parte repetitiva se resuelve en minutos. Así tu equipo dedica su talento a lo que realmente hace
              crecer tu empresa.
            </p>
            <p className="founder-sign">
              <strong>Lorenzo Lince</strong>
              <span>Fundador de Lince Technology · Creador de Generate Service</span>
            </p>
            {podcast && (
              <div className="founder-podcast">
                <p className="eyebrow">Escúchalo en el podcast</p>
                <Tarjeta v={podcast} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="company-story-section">
        <div className="container company-story">
          <div className="company-story-content">
            <p className="eyebrow">Una empresa detrás del producto</p>
            <h2>Experiencia práctica convertida en una plataforma.</h2>
            <p>
              Lince Technology combina desarrollo de software, integración y operación tecnológica para resolver los
              problemas que más tiempo consumen en los equipos: exponer la lógica que ya existe, conectar sistemas y
              mantener flujos confiables.
            </p>
            <p>
              Generate Service nace de ese trabajo práctico. La plataforma reúne patrones y automatizaciones para que tu
              equipo dedique más atención a las decisiones de negocio y menos al código repetitivo de integración.
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
            <h2>Una mirada técnica, clara y pensada para evolucionar.</h2>
          </div>
          <div className="work-principles">
            <article>
              <span>01</span>
              <h3>Entender tu contexto</h3>
              <p>Partimos de los sistemas, procesos y restricciones que ya forman parte de tu operación.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Simplificar la integración</h3>
              <p>Buscamos soluciones fáciles de entender, que reduzcan la complejidad y dejen claras las decisiones importantes.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Diseñar para evolucionar</h3>
              <p>Entregamos una base que se adapta a nuevos procesos, entornos y necesidades técnicas.</p>
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
            <h2>Te acompañamos a llevar tus integraciones a producción.</h2>
            <p>
              Generate Service es una plataforma autogestionada. Cuando tu equipo necesita acompañamiento adicional,
              Lince Technology te ayuda a convertir el resultado en un flujo de entrega alineado con tu operación.
            </p>
            <div className="support-options">
              <article>
                <h3>Automatización de entrega</h3>
                <p>Plantillas reutilizables para preparar y validar entregas desde Jenkins o GitLab.</p>
              </article>
              <article>
                <h3>Despliegue continuo</h3>
                <p>Integración con Argo CD para llevar tus aplicaciones a Kubernetes de forma ordenada.</p>
              </article>
              <article>
                <h3>Acompañamiento técnico</h3>
                <p>Adaptamos las plantillas a los entornos, flujos y controles que define tu equipo.</p>
              </article>
            </div>
            <Link className="text-link" href="/contactos">Hablemos de tu flujo de entrega <span aria-hidden="true">→</span></Link>
            <p className="founder-links">
              <a className="text-link" href={links.platform} rel="noreferrer" target="_blank">Prueba Generate Service gratis ↗</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
