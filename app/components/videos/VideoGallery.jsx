"use client";

import { useState } from "react";
import { categorias, videos } from "./videosData";

// Miniatura de YouTube; el reproductor se carga solo al hacer clic.
export function Tarjeta({ v }) {
  const [activo, setActivo] = useState(false);
  return (
    <article className={`vg-card ${v.tipo === "short" ? "vg-short" : "vg-wide"}`}>
      <div className="vg-media">
        {activo ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setActivo(true)} aria-label={`Reproducir: ${v.titulo}`}>
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="vg-play" aria-hidden="true">▶</span>
            <span className="vg-badge">{v.tipo === "short" ? "Short" : "Video"} · {v.fecha.slice(0, 4)}</span>
          </button>
        )}
      </div>
      <div className="vg-text">
        <h3>{v.titulo}</h3>
        <p>{v.descripcion}</p>
        <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
      </div>
    </article>
  );
}

// Videos (16:9) y shorts (9:16) van en bloques separados para que las tarjetas
// de cada bloque tengan el mismo tamaño.
export default function VideoGallery() {
  const [filtro, setFiltro] = useState("todos");
  const ordenados = [...videos].sort((a, b) => b.fecha.localeCompare(a.fecha));
  const lista = filtro === "todos" ? ordenados : ordenados.filter((v) => v.categoria === filtro);
  const anchos = lista.filter((v) => v.tipo !== "short");
  const shorts = lista.filter((v) => v.tipo === "short");
  return (
    <>
      <div className="vg-filters" role="tablist" aria-label="Filtrar videos">
        {categorias.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={filtro === c.id}
            className={filtro === c.id ? "active" : ""}
            onClick={() => setFiltro(c.id)}
          >
            {c.titulo}
          </button>
        ))}
      </div>
      {anchos.length > 0 && (
        <section className="vg-block">
          {shorts.length > 0 && <h2 className="vg-block-title">Videos</h2>}
          <div className="vg-grid vg-grid-wide">
            {anchos.map((v) => <Tarjeta key={v.id} v={v} />)}
          </div>
        </section>
      )}
      {shorts.length > 0 && (
        <section className="vg-block">
          {anchos.length > 0 && <h2 className="vg-block-title">Shorts</h2>}
          <div className="vg-grid vg-grid-short">
            {shorts.map((v) => <Tarjeta key={v.id} v={v} />)}
          </div>
        </section>
      )}
    </>
  );
}
