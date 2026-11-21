// Videos de la galería (canal @lincetechnologyofficial).
// tipo: "short" (vertical) o "video" (horizontal). categoria: demos | tutoriales | integraciones
// fecha: publicación en YouTube (AAAA-MM-DD); la galería ordena de la más reciente a la más antigua y muestra el año.
export const categorias = [
  { id: "todos", titulo: "Todos" },
  { id: "demos", titulo: "Demos" },
  { id: "tutoriales", titulo: "Tutoriales" },
  { id: "integraciones", titulo: "Integraciones" },
  { id: "conversaciones", titulo: "Conversaciones" },
];

export const videos = [
  { id: "o5Dbnzbvv7E", fecha: "2026-11-21", tipo: "video", categoria: "demos", titulo: "Generate Service en 20 segundos", descripcion: "¿Días atascado en el mismo código? Generate Service lo resuelve en minutos." },
  { id: "5oJLbLZRt_k", fecha: "2026-11-21", tipo: "short", categoria: "demos", titulo: "¿Días atascado en el mismo código?", descripcion: "Generate Service lo resuelve en minutos." },
  { id: "et0HZV-uAb8", fecha: "2025-02-26", tipo: "video", categoria: "conversaciones", titulo: "Podcast: la historia detrás de Generate Service", descripcion: "Lorenzo Lince cuenta cómo nació el producto, qué lo diferencia y qué aprendió como emprendedor." },
  { id: "uyMep3GM4Lo", fecha: "2026-11-18", tipo: "short", categoria: "demos", titulo: "De una función MariaDB a una API GraphQL", descripcion: "Con el cliente local: tus credenciales se quedan en tu red y solo viaja el esquema." },
  { id: "7hnyN01KG3Q", fecha: "2026-11-15", tipo: "short", categoria: "demos", titulo: "De Oracle a una API en Kubernetes", descripcion: "Del procedimiento al pod en ejecución: GitLab CI, ArgoCD y Swagger respondiendo." },
  { id: "caj9ssdnwQ4", fecha: "2025-09-28", tipo: "short", categoria: "demos", titulo: "APIs REST desde tu base de datos local", descripcion: "Genera APIs REST en Spring Boot sin exponer tu infraestructura." },
  { id: "U6P-IaEB6yc", fecha: "2025-09-29", tipo: "short", categoria: "demos", titulo: "Creando microservicios con Generate Service", descripcion: "Un recorrido rápido por la generación de un microservicio." },
  { id: "PdtdsMlkid0", fecha: "2026-03-30", tipo: "video", categoria: "tutoriales", titulo: "Crear tu cuenta en Generate Service", descripcion: "Registro e inicio de sesión en la plataforma." },
  { id: "DLw1_h6OdXg", fecha: "2026-03-30", tipo: "video", categoria: "tutoriales", titulo: "Configurar la base de datos", descripcion: "Cómo registrar un datasource y listar procedimientos, packages y funciones." },
  { id: "ghSf8UGQg3w", fecha: "2025-05-04", tipo: "video", categoria: "tutoriales", titulo: "Generate Service e integración continua", descripcion: "Envía el proyecto generado a tu pipeline de CI/CD." },
  { id: "OX22D66vWuA", fecha: "2025-02-19", tipo: "short", categoria: "integraciones", titulo: "RabbitMQ, API y PDF firmado", descripcion: "Un flujo que integra mensajería, una API y un PDF con firma digital." },
  { id: "vfxNvZSGhnI", fecha: "2025-02-18", tipo: "video", categoria: "integraciones", titulo: "RabbitMQ, API y PDF firmado (versión completa)", descripcion: "El mismo flujo, explicado paso a paso." },
  { id: "DRWt70gCQ_I", fecha: "2025-02-18", tipo: "short", categoria: "integraciones", titulo: "Tarea Quartz que envía por WebSocket", descripcion: "Un scheduler Quartz que publica su resultado por WebSocket." },
  { id: "x8TYn0bzCxE", fecha: "2025-02-18", tipo: "short", categoria: "integraciones", titulo: "Carpeta SMB a Excel", descripcion: "Un listener SMB que procesa archivos y genera un Excel." },
];
