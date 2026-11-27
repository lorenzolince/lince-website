import "../styles/globals.css";
import Analytics from "./components/Analytics";

const OG_IMAGEN = {
  url: "/og/generate-service.png",
  width: 1200,
  height: 630,
  alt: "Generate Service: tus sistemas, conectados en minutos",
};

export const metadata = {
  metadataBase: new URL("https://lincetechnology.net"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Lince Technology",
    title: "Generate Service: tus sistemas, conectados en minutos",
    description:
      "Convierte la información y la lógica que tu empresa ya tiene en servicios listos para apps, socios, canales digitales y procesos automáticos.",
    images: [OG_IMAGEN],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGEN.url],
  },
  title: {
    default: "Lince Technology",
    template: "%s | Lince Technology",
  },
  description: "Lince Technology desarrolla soluciones de integración empresarial y Generate Service.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
