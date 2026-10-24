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

## Estructura

- `app/(public)`: páginas públicas del sitio.
- `app/components`: componentes compartidos.
- `app/actions`: Server Actions; actualmente valida y prepara el correo del formulario de contacto.
- `server/start.js`: servidor HTTP personalizado para Next.js.
- `public`: recursos estáticos.

No incluye autenticación ni traducciones.