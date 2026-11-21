import Link from "next/link";
import { notFound } from "next/navigation";
import GuiaLayout, { BASE } from "../../../../components/guia/GuiaLayout";
import Bloques from "../../../../components/guia/Bloques";
import { capitulos, capituloPorSlug, grupos } from "../../../../components/guia/guiaData";

// Exportación estática: una página por capítulo
export const dynamicParams = false;

export function generateStaticParams() {
  return capitulos.map((c) => ({ tema: c.slug }));
}

export async function generateMetadata({ params }) {
  const { tema } = await params;
  const c = capituloPorSlug[tema];
  if (!c) return {};
  return {
    title: `${c.titulo} | Guía de Generate Service`,
    description: c.resumen,
  };
}

export default async function Capitulo({ params }) {
  const { tema } = await params;
  const c = capituloPorSlug[tema];
  if (!c) notFound();

  const idx = capitulos.findIndex((x) => x.slug === tema);
  const anterior = capitulos[idx - 1];
  const siguiente = capitulos[idx + 1];
  const grupo = grupos.find((g) => g.id === c.grupo);

  return (
    <div className="marketing-page">
      <GuiaLayout actual={tema}>
        <nav className="docs-breadcrumb" aria-label="Ruta">
          <Link href={`${BASE}/`}>Guía</Link> <span>›</span> <span>{grupo?.titulo}</span>
        </nav>
        <h1 className="docs-title">{c.titulo}</h1>
        <p className="docs-lead">{c.resumen}</p>

        {c.secciones.map((s, i) => (
          <section key={i} className="docs-section">
            {s.titulo && <h2>{s.titulo}</h2>}
            <Bloques bloques={s.bloques} />
          </section>
        ))}

        <div className="docs-pager">
          {anterior ? (
            <Link href={`${BASE}/${anterior.slug}/`} className="docs-pager-link">
              <small>← Anterior</small>
              {anterior.titulo}
            </Link>
          ) : <span />}
          {siguiente ? (
            <Link href={`${BASE}/${siguiente.slug}/`} className="docs-pager-link next">
              <small>Siguiente →</small>
              {siguiente.titulo}
            </Link>
          ) : <span />}
        </div>

        <div className="docs-cta">
          <div>
            <strong>¿Listo para probarlo?</strong>
            <p>Crea tu cuenta y genera tu primera API en minutos.</p>
          </div>
          <a className="btn btn-primary" href="https://generate-service.com/" target="_blank" rel="noopener noreferrer">
            Ir a Generate Service
          </a>
        </div>
      </GuiaLayout>
    </div>
  );
}
