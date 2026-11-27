import Link from "next/link";
import GuiaLayout, { BASE } from "../../../components/guia/GuiaLayout";
import PageHero from "../../../components/PageHero";
import { capitulos, grupos } from "../../../components/guia/guiaData";

export const metadata = {
  title: "Guía de Generate Service",
  description:
    "Aprende a usar Generate Service paso a paso: datasources, cliente local, variables de entorno, CI/CD, créditos, eventos y tu primera API REST.",
  alternates: { canonical: "/generate-service/guia/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Lince Technology",
    url: "/generate-service/guia/",
    title: "Guía visual de Generate Service, paso a paso",
    description:
      "Desde tu primer datasource hasta tu API corriendo en Kubernetes, explicado con capturas reales.",
    images: [{ url: "/og/guia.png", width: 1200, height: 630, alt: "Guía visual de Generate Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guía visual de Generate Service, paso a paso",
    images: ["/og/guia.png"],
  },
};

export default function GuiaInicio() {
  return (
    <div className="marketing-page">
      <PageHero
        eyebrow="Guía de Generate Service"
        title="Aprende a generar tus APIs"
        accent="paso a paso."
        subtitle="Desde tu primera API REST hasta el despliegue automático en Kubernetes: cómo funciona la plataforma, cómo configurarla y cómo sacarle el máximo provecho."
      >
        <div className="home-ctas">
          <Link className="btn btn-primary home-btn-glow" href={`${BASE}/primera-api-rest/`}>Empieza con el tutorial</Link>
          <Link className="btn home-btn-ghost" href={`${BASE}/como-funciona/`}>Cómo funciona</Link>
        </div>
      </PageHero>

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
