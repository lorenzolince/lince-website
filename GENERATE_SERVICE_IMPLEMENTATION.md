# Página de Producto y Guía Visual de Generate Service

## Descripción

Este documento resume la implementación de la página de producto (`/generate-service`) y la guía visual (`/generate-service/guia`) para Generate Service en el sitio lince-website.

## Rutas disponibles

- **`/generate-service`** - Página de producto marketing con 11 secciones
- **`/generate-service/guia`** - Guía visual con 4 flujos completos paso a paso

## Estructura del proyecto

### Archivos de datos
- `app/components/generateServiceMarketing.js` - Toda la información de marketing (hero, problemas, flujos, entregables, etc.)
- `app/components/generate-service-images-metadata.js` - Metadatos automáticos de imágenes (dimensiones)

### Páginas
- `app/(public)/generate-service/page.jsx` - Página de producto con 11 secciones
- `app/(public)/generate-service/guia/page.jsx` - Guía visual con flujos paso a paso

### Imágenes
- `public/images/generate-service/` - 58 imágenes convertidas a WebP
- `public/images/generate-service/README.md` - Tabla de equivalencias de nombres

### Scripts
- `scripts/process-generate-service-images.js` - Script para procesar imágenes PNG → WebP
  - Comando: `npm run process-images`

### Estilos
- `styles/globals.css` - Nuevas clases CSS para Generate Service (responsive)

## Contenido de la página de producto

La página de producto está dividida en 11 secciones:

1. **Hero** - Título principal, subtítulo, imagen y botones de CTA
2. **Problemas** - 6 problemas que resuelve Generate Service
3. **Cómo funciona** - 3 pasos principales del flujo
4. **Vista previa de flujos** - 4 tarjetas con imágenes de flujos principales
5. **Cliente local** - Descripción de generate-service-client con 2 imágenes
6. **Diferenciadores** - 6 puntos clave de diferenciación
7. **Entregables** - 8 tipos de artefactos entregados
8. **Para quién es** - 6 públicos objetivo
9. **Videos** - Sección para videos de demostración (vacía, lista para IDs)
10. **Preguntas frecuentes** - 10 Q&A con `<details>/<summary>` accesibles
11. **CTA final** - Llamado final a la acción con botones

## Contenido de la guía visual

La guía visual está dividida en 4 flujos completos:

### 1. Generar código fuente desde BD local
Cómo usar generate-service-client para generar esquemas de forma segura sin exponer credenciales.
- 6 pasos visuales con imágenes
- Resumen de beneficios

### 2. Desplegar APIs en CI/CD automático
Integración con GitLab CI, Jenkins o Azure Pipelines.
- 6 pasos visuales con imágenes
- Resumen de beneficios

### 3. Gestionar con ArgoCD
Sincronización automática con GitOps en Kubernetes.
- 6 pasos visuales con imágenes
- Resumen de beneficios

### 4. Probar APIs en tiempo real
Validación con Swagger, Postman y herramientas estándar.
- 6 pasos visuales con imágenes
- Resumen de beneficios

## Procesamiento de imágenes

### Script de conversión
El script `scripts/process-generate-service-images.js` realiza:
1. Renombra archivos originales a kebab-case (corrección ortográfica)
2. Convierte PNG → WebP con calidad 80
3. Escala a máximo 1600px de ancho
4. Genera metadatos con dimensiones finales
5. Crea README.md con tabla de equivalencias

### Ejecución
```bash
npm run process-images
```

### Resultado
- 58 imágenes convertidas a WebP
- Tamaño reducido de ~10 MB a ~2.2 MB
- Tabla de equivalencias en `public/images/generate-service/README.md`
- Metadatos en `app/components/generate-service-images-metadata.js`

## Estilos

Los nuevos estilos están en `styles/globals.css` y incluyen:

- `.hero-generate-service` - Hero section
- `.problems-grid` - Grid de problemas (3 columnas)
- `.workflow-steps` - Grid de pasos (3 columnas)
- `.flow-preview-grid` - Grid de vista previa (4 columnas)
- `.local-client` - Layout del cliente local
- `.differentiators-grid` - Grid de diferenciadores (3 columnas)
- `.deliverables-grid` - Grid de entregables (4 columnas)
- `.audiences-grid` - Grid de públicos (3 columnas)
- `.faq-list` - Lista de FAQ con `<details>`
- `.guide-flow` - Flujos en la guía visual
- `.flow-steps-guide` - Pasos dentro de cada flujo
- `.flow-summary` - Resumen de flujo

Todos los grids son responsivos:
- Desktop: Múltiples columnas
- Tablet (≤1024px): 2 columnas
- Móvil (≤700px): 1 columna

## Actualizaciones del menú

Se agregó el enlace a Generate Service en el Header:

```javascript
// Antes
{ href: "/servicios", label: "Producto" }

// Después
{ href: "/generate-service", label: "Generate Service" }
```

## Cambios en package.json

Se agregó el script de procesamiento:

```json
"process-images": "node scripts/process-generate-service-images.js"
```

## Compilación

La página se compila exitosamente con:
```bash
npm run build
```

Resultado:
- ✓ 11 rutas estáticas generadas (incluidas nuevas)
- ✓ Build time: ~5.4 segundos
- ✓ Sin errores ni advertencias

## Pendientes (TODO)

1. **Imágenes sensibles**: Reemplazar las dos imágenes que contienen tokens reales:
   - `config-client.webp` (mostrar token difuminado)
   - `configure-cicd-2.webp` (mostrar token difuminado)

2. **Videos de demostración**: Agregar IDs de YouTube/Vimeo en:
   - `generateServiceMarketing.demoVideos[*].videoId`
   - Cambiar de `"PENDIENTE"` a ID real

3. **Precios**: Completar sección de precios en FAQ:
   - `generateServiceMarketing.faq[9].answer` contiene `// TODO: Agregar información de precios`

## Convenciones de código

- **Español**: Todo el contenido está en español (tratamiento de "usted")
- **Kebab-case**: Nombres de archivos de imagen
- **JSX**: Componentes funcionales con React 19
- **CSS**: Sin frameworks, estilos en `globals.css`
- **Datos separados**: Todo contenido en archivos `*-marketing.js` o `site-data.js`

## Navegación entre páginas

- Desde `/generate-service` hay enlaces a:
  - `/generate-service/guia` (en "Ver la guía de uso")
  - Flujos específicos con anclas: `#flujo-codigo-fuente`, `#flujo-cicd`, `#flujo-argocd`, `#flujo-pruebas`

- Desde `/generate-service/guia` hay:
  - Índice de tabla de contenidos al inicio
  - Anclas para cada flujo
  - Enlaces de regreso desde tarjetas a la página de producto

## Validación

✓ Compilación Next.js sin errores
✓ Todas las páginas se generan estáticamente
✓ Imágenes optimizadas en WebP
✓ Estilos responsivos verificados
✓ Menú actualizado
✓ Links internos válidos
✓ Metadatos de página configurados

## Commit

```
feat: agregar página de producto y guía visual de Generate Service
```

Los cambios están commiteados en el repositorio con:
- 68 archivos cambiados
- 58 imágenes nuevas
- 4 archivos JSX nuevos
- Actualización de estilos y menú
