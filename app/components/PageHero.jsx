// Encabezado tecnológico compartido por las páginas internas (mismo estilo que la portada, más compacto).
export default function PageHero({ eyebrow, title, accent, subtitle, children }) {
  return (
    <section className="home-hero page-hero">
      <div className="home-hero-glow" aria-hidden="true" />
      <div className="container page-hero-inner">
        {eyebrow && <p className="home-eyebrow">{eyebrow}</p>}
        <h1>
          {title}
          {accent && <> <span className="home-accent">{accent}</span></>}
        </h1>
        {subtitle && <p className="home-lead">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
