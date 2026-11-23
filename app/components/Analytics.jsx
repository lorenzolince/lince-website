import Script from "next/script";

// Google Analytics 4 (propiedad lincetechnology.net) y Microsoft Clarity (proyecto lincetechnology).
// Solo se carga en el build de producción (`npx next build` → out/), no en `npm run dev`.
// La navegación entre páginas la registra GA4 con su medición mejorada (cambios de historial).
const GA_ID = "G-EQHPWB2M89";
const CLARITY_ID = "zhop8d7rkx";

export default function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
      {/* El id no puede ser "clarity": el navegador expone los id como window.<id> y pisaría la función window.clarity */}
      <Script id="ms-clarity-init" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`}
      </Script>
    </>
  );
}
