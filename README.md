# Lince Technology - Sitio Web

Sitio web corporativo de Lince Technology con sección de marketing y guía de usuario para Generate Service.

## Descripción

Sitio estático desarrollado con **Next.js 14** y **App Router**, con enfoque en marketing y documentación técnica.

**Secciones principales:**
- **Inicio**: presentación de Lince Technology
- **Generate Service**: página de marketing con problemas, soluciones y ventajas
- **Guía de Generate Service**: documentación interactiva con 6 secciones (Visión general, SRC, Build, Test, CI/CD, Cliente local) × 6 pasos cada una, con imágenes y descripciones

## Requisitos

- Node.js 18.18 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

Cambios en componentes se aplican automáticamente sin necesidad de recompilación.

## Compilación y exportación

```bash
npm run build
```

Genera sitio estático en `out/` listo para servir en cualquier alojador de archivos estáticos.

## Estructura de carpetas

```
app/
  ├── (public)/           # Páginas públicas
  │   ├── page.jsx        # Inicio
  │   └── generate-service/
  │       ├── page.jsx    # Página de marketing
  │       └── guia/       # Guía de usuario con 6 secciones
  ├── components/
  │   ├── generateServiceMarketing.js    # Datos de marketing (problemas, ventajas, modos)
  │   ├── generateServiceGuideData.js    # Guía: 36 pasos (6 secciones × 6 pasos)
  │   └── [otros componentes]
  └── actions/            # Server Actions (preparado para futuro)
public/
  └── images/
      ├── src/            # Imágenes de sección SRC (8 imágenes)
      ├── build/          # Imágenes de sección Build (7 imágenes)
      ├── test/           # Imágenes de sección Test (15 imágenes)
      ├── ci-cd/          # Imágenes de sección CI/CD (16 imágenes)
      ├── client/         # Imágenes de sección Cliente local (10 imágenes)
      └── config/         # Imágenes de configuración compartida (5 imágenes)
```

## Contenido

**Generate Service Marketing (`generateServiceMarketing.js`):**
- Hero: títulos, descripción de 5 orígenes de datos
- Problemas: 5 problemas empresariales típicos
- Ventajas: 3 diferenciales clave (Modo Test, Cliente local, Despliegue end-to-end)
- Modos de operación: Evaluación vs. Producción

**Generate Service Guía (`generateServiceGuideData.js`):**
- **Visión General**: flujo completo de 6 pasos
- **SRC**: generación de código desde esquemas (6 pasos)
- **Build**: compilación y artefactos (6 pasos)
- **Test**: pruebas con modo test de 24h (6 pasos)
- **CI/CD**: pipeline con ArgoCD y GitLab (6 pasos)
- **Cliente Local**: generación de esquemas en infraestructura propia (6 pasos)

Cada paso incluye imagen, título y descripción funcional.

## Tecnología

- **Next.js 14**: App Router, SSG
- **Tailwind CSS + CSS personalizado**: estilos responsivos
- **Imágenes PNG**: 61 imágenes organizadas por sección
- **Idioma**: español latino profesional

## Exportación estática

El proyecto usa `output: "export"` en `next.config.mjs` para generar sitio completamente estático sin dependencias de servidor Node.js.

## Notas

- No incluye autenticación ni traducciones
- Todos los textos están en HTML estático (sin carga de datos dinámica)
- Imágenes se sirven desde `/public/images/` vía rutas Next.js
- Estilos están en `styles/globals.css` y CSS inline en componentes
- Responsive design: funciona correctamente en desktop, tablet y móvil