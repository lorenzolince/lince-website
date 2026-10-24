import Link from "next/link";
import Hero from "../../components/Hero";
import { services } from "../../components/site-data";

export const metadata = { title: "Servicios" };

export default function ServicesPage() {
  return (
    <div className="page servicios">
      <Hero
        className="hero-services"
        subtitle="Desarrollo a la medida, outsourcing, infraestructura y transformación digital para empresas que exigen resultados."
        title="Servicios"
      />
      <section className="container section services-list-wrap">
        <h2 className="section-title">Qué ofrecemos</h2>
        <p className="lead services-introduction">
          Soluciones integrales que cubren todo el ciclo: consultoría, diseño, implementación y soporte continuo. Nos enfocamos en automatizar procesos, asegurar la disponibilidad y entregar software con calidad y seguridad.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <img alt={service.title} src={service.image} />
              </div>
              <div className="service-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                <Link className="btn btn-primary" href="/contactos">Solicitar cotización</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
