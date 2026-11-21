import Link from "next/link";
import GuiaLayout, { BASE } from "../../../components/guia/GuiaLayout";
import { capitulos, grupos } from "../../../components/guia/guiaData";

export const metadata = {
  title: "Guía de Generate Service | Lince Technology",
  description:
    "Aprende a usar Generate Service paso a paso: datasources, cliente local, variables de entorno, CI/CD, créditos, eventos y tu primera API REST.",
};

export default function GuiaInicio() {
  return (
    <div className="marketing-page">
      <section className="docs-hero">
        <div className="container">
          <p className="docs-eyebrow">Guía de Generate Service</p>
          <h1>Aprende a generar tus APIs paso a paso</h1>
          <p>
            Desde tu primera API REST hasta el despliegue automático en Kubernetes: cómo funciona la
            plataforma, cómo configurarla y cómo sacarle el máximo provecho.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" href={`${BASE}/primera-api-rest/`}>
              Empieza con el tutorial
            </Link>
            <Link className="btn btn-outline" href={`${BASE}/como-funciona/`}>
              Cómo funciona
            </Link>
          </div>
        </div>
      </section>

      <GuiaLayout>
        {grupos.map((g) => (
          <section key={g.id} className="docs-index-group">
            <h2>{g.titulo}</h2>
            <div className="docs-cards">
              {capitulos
                .filter((c) => c.grupo === g.id)
                .map((c) => (
                  <Link key={c.slug} href={`${BASE}/${c.slug}/`} className="docs-card">
                    <h3>{c.titulo}</h3>
                    <p>{c.resumen}</p>
                    <span className="docs-card-more">Leer →</span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </GuiaLayout>
    </div>
  );
}
