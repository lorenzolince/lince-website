import Link from "next/link";
import { capitulos, grupos } from "./guiaData";

const BASE = "/generate-service/guia";

function Menu({ actual }) {
  return (
    <nav className="docs-nav" aria-label="Capítulos de la guía">
      <Link href={`${BASE}/`} className={`docs-nav-home ${!actual ? "active" : ""}`}>
        Inicio de la guía
      </Link>
      {grupos.map((g) => (
        <div key={g.id} className="docs-nav-group">
          <p className="docs-nav-title">{g.titulo}</p>
          {capitulos
            .filter((c) => c.grupo === g.id)
            .map((c) => (
              <Link
                key={c.slug}
                href={`${BASE}/${c.slug}/`}
                className={actual === c.slug ? "active" : ""}
                aria-current={actual === c.slug ? "page" : undefined}
              >
                {c.titulo}
              </Link>
            ))}
        </div>
      ))}
    </nav>
  );
}

export default function GuiaLayout({ actual, children }) {
  return (
    <div className="docs">
      <div className="container docs-grid">
        <aside className="docs-aside">
          {/* En celular el menú se pliega */}
          <details className="docs-nav-mobile">
            <summary>Capítulos de la guía</summary>
            <Menu actual={actual} />
          </details>
          <div className="docs-nav-desktop">
            <Menu actual={actual} />
          </div>
        </aside>
        <article className="docs-main">{children}</article>
      </div>
    </div>
  );
}

export { BASE };
