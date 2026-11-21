import Link from "next/link";

const DEV = process.env.NODE_ENV !== "production";

// Interpreta **negritas**, `código` y [texto](url) dentro de un texto.
export function Texto({ children }) {
  const partes = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let ultimo = 0;
  let m;
  let i = 0;
  while ((m = re.exec(children)) !== null) {
    if (m.index > ultimo) partes.push(children.slice(ultimo, m.index));
    const t = m[0];
    if (t.startsWith("**")) partes.push(<strong key={i++}>{t.slice(2, -2)}</strong>);
    else if (t.startsWith("`")) partes.push(<code key={i++}>{t.slice(1, -1)}</code>);
    else {
      const [, txt, url] = t.match(/\[([^\]]+)\]\(([^)]+)\)/);
      partes.push(
        url.startsWith("/") ? (
          <Link key={i++} href={url}>{txt}</Link>
        ) : (
          <a key={i++} href={url} target="_blank" rel="noopener noreferrer">{txt}</a>
        )
      );
    }
    ultimo = m.index + t.length;
  }
  if (ultimo < children.length) partes.push(children.slice(ultimo));
  return <>{partes}</>;
}

function Captura({ src, alt }) {
  return (
    <figure className="docs-figure">
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} loading="lazy" />
      </a>
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
}

export default function Bloques({ bloques }) {
  return bloques.map((b, i) => {
    if (b.p) return <p key={i}><Texto>{b.p}</Texto></p>;
    if (b.lista)
      return (
        <ul key={i} className="docs-list">
          {b.lista.map((li, j) => <li key={j}><Texto>{li}</Texto></li>)}
        </ul>
      );
    if (b.pasos)
      return (
        <ol key={i} className="docs-steps">
          {b.pasos.map((s, j) => (
            <li key={j}>
              <span className="docs-step-num">{j + 1}</span>
              <div>
                <h4>{s.titulo}</h4>
                <p><Texto>{s.texto}</Texto></p>
                {s.img && <Captura src={s.img} alt={s.titulo} />}
              </div>
            </li>
          ))}
        </ol>
      );
    if (b.img) return <Captura key={i} src={b.img} alt={b.alt} />;
    if (b.captura)
      return DEV ? (
        <div key={i} className="docs-pending">
          <strong>📷 Captura pendiente</strong>
          <span>{b.captura}</span>
        </div>
      ) : null;
    if (b.nota)
      return (
        <div key={i} className={`docs-note docs-note-${b.tipo || "info"}`}>
          <Texto>{b.nota}</Texto>
        </div>
      );
    if (b.tabla)
      return (
        <div key={i} className="docs-table-wrap">
          <table className="docs-table">
            <thead>
              <tr>{b.tabla.cab.map((c, j) => <th key={j}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {b.tabla.filas.map((f, j) => (
                <tr key={j}>{f.map((c, k) => <td key={k}><Texto>{c}</Texto></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    if (b.codigo) return <pre key={i} className="docs-code"><code>{b.codigo}</code></pre>;
    if (b.flujo)
      return (
        <div key={i} className="docs-flow">
          {b.flujo.map((f, j) => (
            <span key={j} className="docs-flow-item">
              <span className="docs-flow-box">{f}</span>
              {j < b.flujo.length - 1 && <span className="docs-flow-arrow" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>
      );
    return null;
  });
}
