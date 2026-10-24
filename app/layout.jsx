import "../styles/globals.css";

export const metadata = {
  title: {
    default: "Lince Technology",
    template: "%s | Lince Technology",
  },
  description: "Soluciones tecnológicas modernas para empresas.",
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
