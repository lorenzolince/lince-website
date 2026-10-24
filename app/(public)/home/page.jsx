import Link from "next/link";
import { company, services } from "../../components/site-data";

export const metadata = { title: "Inicio" };

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Lince Technology</h1>
            <p className="hero-subtitle">
              Soluciones tecnológicas: desarrollo a medida, outsourcing, infraestructura en la nube y en sitio.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-primary" href="/servicios">Ver servicios</Link>
              <Link className="btn btn-outline" href="/contactos">Contáctanos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="cards">
            {services.slice(0, 3).map((service) => (
              <article className="card" key={service.title}>
                <img alt={service.title} className="card-img" src={service.image} />
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container">
          <div className="about-grid">
            <div>
              <h2>¿Por qué Lince Technology?</h2>
              <p>{company.about}</p>
            </div>
            <div className="about-image">
              <img
                alt="Automatización y tecnología"
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
