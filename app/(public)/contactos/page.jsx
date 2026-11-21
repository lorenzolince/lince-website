import ContactForm from "../../components/ContactForm";
import PageHero from "../../components/PageHero";
import { links } from "../../components/site-data";

export const metadata = {
  title: "Contacto",
  description: "Escríbenos para una demo, una evaluación técnica o un paquete corporativo de Generate Service.",
};

export default function ContactPage() {
  return (
    <div className="page contactos">
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu"
        accent="próxima integración."
        subtitle="Una demo, una evaluación técnica o un paquete corporativo: cuéntanos qué necesitas y te respondemos pronto."
      />
      <section className="container contact-main">
        <div className="contact-panel">
          <div className="contact-card">
            <h2>Envíanos un mensaje</h2>
            <p className="lead">Completa el formulario y te responderemos lo antes posible.</p>
            <ContactForm />
          </div>
          <aside className="info-card contact-info">
            <h2>Información</h2>
            <p>Correo: <a href="mailto:lorenzolince@lincetechnology.net">lorenzolince@lincetechnology.net</a></p>
            <p>Teléfono: <a href="tel:+50763910681">+507 6391-0681</a></p>
            <p>
              <a
                className="btn btn-primary contact-whatsapp"
                href="https://wa.me/50763910681?text=Hola%20Lince%20Technology%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Generate%20Service"
                rel="noopener noreferrer"
                target="_blank"
              >
                Escríbenos por WhatsApp
              </a>
            </p>
            <p>Ubicación: Panamá 🇵🇦</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/lorenzo-lince" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <span aria-hidden="true"> · </span>
              <a href="https://x.com/lorenzolince" rel="noopener noreferrer" target="_blank">X</a>
              <span aria-hidden="true"> · </span>
              <a href={links.youtube} rel="noopener noreferrer" target="_blank">YouTube</a>
              <span aria-hidden="true"> · </span>
              <a href="https://instagram.com/lincetechnology" rel="noopener noreferrer" target="_blank">Instagram</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
