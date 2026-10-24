import Hero from "../../components/Hero";
import { company, team } from "../../components/site-data";

export const metadata = { title: "Nosotros" };

export default function AboutPage() {
  return (
    <div className="page nosotros">
      <Hero
        className="hero-nosotros"
        subtitle="Expertos en automatización, transformación digital y desarrollo a la medida."
        title="Nosotros"
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
      <section className="team-section container">
        <h2>Nuestro Equipo</h2>
        <p className="lead">
          Profesionales en desarrollo, infraestructura y consultoría, con experiencia en proyectos críticos y de alta disponibilidad.
        </p>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <img alt={member.name} src={member.image} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
