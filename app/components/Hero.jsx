export default function Hero({ className, title, subtitle }) {
  return (
    <section className={className}>
      <div className="hero-overlay">
        <div className="container">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
