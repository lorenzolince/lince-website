/** @type {import('next').NextConfig} */

// Exportación estática para HostGator (Apache): `npx next build` genera out/.
// trailingSlash: cada página se exporta como carpeta/index.html.
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/*
// Desarrollo con servidor Node (npm run dev):
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
};

export default nextConfig;
*/
