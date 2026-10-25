import Hero from "../../components/Hero";
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
      <section className="team-section container">
        <h2>Una empresa detrás del producto</h2>
        <p className="lead">
          Lince Technology combina experiencia en desarrollo de software, integración y operación tecnológica. Generate Service nace de esa experiencia práctica y de la necesidad de reducir el trabajo repetitivo en escenarios empresariales.
        </p>
      </section>
    </div>
  );
}
