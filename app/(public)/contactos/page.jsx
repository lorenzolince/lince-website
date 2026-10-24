import ContactForm from "../../components/ContactForm";
import Hero from "../../components/Hero";

export const metadata = { title: "Contacto" };

export default function ContactPage() {
  return (
    <div className="page contactos">
      <Hero
        className="hero-contact"
        subtitle="Hablemos de su proyecto. Estamos listos para ayudarle a transformar su negocio."
        title="Contacto"
      />
      <section className="container contact-main">
        <div className="contact-panel">
          <div className="contact-card">
            <h2>Envíanos un mensaje</h2>
            <p className="lead">Complete el formulario y le responderemos lo antes posible.</p>
            <ContactForm />
          </div>
          <aside className="info-card contact-info">
            <h2>Información</h2>
            <p>Email: <a href="mailto:LorenzoLince@lincetechnology.net">LorenzoLince@lincetechnology.net</a></p>
            <p>Teléfono: <a href="tel:+50763910681">+507 6391-0681</a></p>
            <p>Dirección: Ciudad, País</p>
            <div className="socials">
              <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <span aria-hidden="true"> · </span>
              <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">Twitter</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
