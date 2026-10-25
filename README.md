# Lince Technology

Sitio web público de Lince Technology desarrollado con Next.js y el App Router.

## Requisitos

- Node.js 18.18 o superior

## Desarrollo

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

## Exportación estática

El proyecto está configurado con `output: "export"` para alojadores de archivos estáticos.

```bash
npm run build
```

Los artefactos publicados se generan en `out/`.

## Estructura

- `app/(public)`: páginas públicas del sitio.
- `app/components`: componentes compartidos.
- `app/actions`: capa de acciones preparada para el formulario de contacto. Actualmente es una implementación de cliente compatible con exportación estática; puede sustituirse por Server Actions al desplegar en Node.js.
- `server/start.js`: servidor HTTP personalizado para Next.js.
- `public`: recursos estáticos.

No incluye autenticación ni traducciones. La web enlaza a [Generate Service](https://generate-service.com/) y a [Generate Service Test](https://github.com/lorenzolince/generate-service-test), su repositorio público de evaluación técnica.