import PageHero from "../../components/PageHero";
import VideoGallery from "../../components/videos/VideoGallery";
import { links } from "../../components/site-data";

export const metadata = {
  title: "Videos",
  description: "Demos, tutoriales e integraciones de Generate Service en video: de tu base de datos a una API en minutos.",
};

export default function VideosPage() {
  return (
    <div className="marketing-page">
      <PageHero
        eyebrow="Videos"
        title="Míralo funcionar,"
        accent="en minutos."
        subtitle="Demos reales, tutoriales paso a paso e integraciones entre tecnologías."
      >
        <div className="home-ctas">
          <a className="btn btn-primary home-btn-glow" href={links.youtube} rel="noreferrer" target="_blank">
            Suscríbete al canal
          </a>
          <a className="btn home-btn-ghost" href={links.guide}>Ver la guía</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="container">
          <VideoGallery />
        </div>
      </section>
    </div>
  );
}
