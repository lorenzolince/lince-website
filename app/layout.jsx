import "../styles/globals.css";

export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}
