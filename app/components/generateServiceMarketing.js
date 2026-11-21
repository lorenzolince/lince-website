// Textos de la página Generate Service (español neutro, «tú»).
// Verificados contra la plataforma real (créditos, modos, cliente local, CI/CD) el 21-nov-2026.

export const generateServiceMarketing = {
  hero: {
    eyebrow: "Generate Service",
    title: "Tus sistemas,",
    accent: "conectados en minutos.",
    subtitle:
      "Convierte procedimientos, funciones y queries de Oracle, SQL Server, PostgreSQL, MySQL y MariaDB en microservicios Spring Boot listos para producción. También a partir de contratos REST, SOAP, GraphQL y gRPC.",
    cta: [
      { label: "Pruébalo gratis", href: "https://generate-service.com/", primary: true },
      { label: "Ver la guía", href: "/generate-service/guia/", primary: false },
    ],
  },

  // Brochure, página 1
  challenge: {
    eyebrow: "El reto",
    title: "Tu negocio avanza más rápido que tus integraciones.",
    description:
      "Cada app, socio o canal digital nuevo necesita conectarse con los sistemas de tu empresa. Y hoy cada conexión es un proyecto que depende de pocos especialistas.",
    pains: [
      { icon: "⏱", title: "Semanas o meses", description: "por cada integración, escribiendo el mismo código una y otra vez." },
      { icon: "👥", title: "Pocos especialistas", description: "concentran el conocimiento; cada cambio pasa por ellos." },
      { icon: "📋", title: "Proyectos en espera", description: "mientras el mercado avanza y la competencia se adelanta." },
    ],
    answer: "Generate Service lo resuelve: la parte repetitiva se genera en minutos, con el estándar de tu equipo.",
  },

  // Brochure, página 3
  connections: {
    eyebrow: "Una plataforma",
    title: "Todas tus conexiones.",
    items: [
      { icon: "🗄", title: "Bases de datos", description: "Procedimientos, funciones, packages y queries de Oracle, SQL Server, PostgreSQL, MySQL y MariaDB." },
      { icon: "🔌", title: "APIs", description: "REST, GraphQL, gRPC, SOAP y WebSocket. Publica la misma lógica en el protocolo que necesites." },
      { icon: "📨", title: "Mensajería", description: "RabbitMQ, ActiveMQ, Kafka y JMS para procesos asíncronos y eventos." },
      { icon: "📁", title: "Archivos", description: "Carpetas locales, SFTP y SMB. Genera PDF, CSV, XML o JSON y envíalos por correo o SFTP." },
      { icon: "⏰", title: "Tareas programadas", description: "Jobs de Spring o Quartz en clúster, con su expresión cron por variable de entorno." },
      { icon: "🚀", title: "CI/CD y Kubernetes", description: "Envía el proyecto a tu pipeline (GitLab, Jenkins, Azure DevOps) y despliega con ArgoCD." },
    ],
  },

  howItWorks: [
    { step: "01", title: "Conecta tu origen", description: "Registra tu base de datos o, si tu política de seguridad lo pide, genera el esquema con el cliente local dentro de tu red." },
    { step: "02", title: "Elige qué publicar", description: "Marca los procedimientos, funciones, packages o queries. Cada uno se convierte en un endpoint." },
    { step: "03", title: "Genera y recíbelo", description: "Código fuente, binario, prueba local o despliegue directo en tu pipeline. En minutos." },
  ],

  modes: [
    { name: "Src", what: "Código fuente Maven completo", who: "Tú (con Maven)", ideal: "Extender la API con tu propia lógica" },
    { name: "Build", what: "JAR listo, con Dockerfile, docker-compose y scripts", who: "El cliente local", ideal: "Ejecutar de inmediato" },
    { name: "Test", what: "La API corriendo en tu máquina", who: "El cliente local", ideal: "Probar con datos reales antes de decidir" },
    { name: "Schema", what: "Contratos JSON, XSD, PROTO o SDL", who: "—", ideal: "Reutilizar contratos en nuevos servicios" },
    { name: "CI/CD", what: "El proyecto en tu pipeline", who: "Tu pipeline", ideal: "Desplegar automáticamente en Kubernetes" },
  ],

  testAdvantage: {
    title: "Prueba antes de decidir",
    description:
      "Con el modo Test, tu cliente local compila el proyecto y levanta la API en tu máquina: la abres en Swagger y la pruebas con tus datos. Tiene un costo fijo de créditos que incluye varias ejecuciones de prueba según tu plan.",
    points: [
      "Valida con datos reales, en tu infraestructura",
      "Ajusta endpoints, tecnología y configuración",
      "Prueba la integración con tus sistemas",
      "Genera la versión final cuando estés conforme",
    ],
  },

  security: {
    eyebrow: "Seguridad y control",
    title: "La plataforma genera. Tú decides dónde corre.",
    description:
      "Generate Service escribe el proyecto; la compilación y la ejecución ocurren en tu infraestructura. Tus datos y tus APIs nunca pasan por la plataforma.",
    points: [
      "Con el cliente local, tus credenciales se quedan en tu red: solo viaja el esquema",
      "El código fuente es tuyo: puedes revisarlo, auditarlo y mantenerlo",
      "Tus APIs corren en Docker, Kubernetes, Tomcat, WildFly o WebLogic",
      "Toda la configuración se ajusta con variables de entorno, sin recompilar",
    ],
  },

  faq: [
    { question: "¿Necesito exponer mi base de datos?", answer: "No. Con el cliente local generas el esquema dentro de tu red y solo ese archivo viaja a la plataforma. Tus credenciales se quedan en tu empresa." },
    { question: "¿Qué bases de datos soporta?", answer: "Oracle, SQL Server, PostgreSQL, MySQL y MariaDB. También puedes partir de contratos REST (JSON), SOAP (XSD), GraphQL (SDL) y gRPC (PROTO)." },
    { question: "¿Puedo modificar el código generado?", answer: "Sí. Con el modo Src recibes el proyecto Maven completo: es tuyo para extenderlo con tu propia lógica, versionarlo y desplegarlo." },
    { question: "¿Qué necesito instalar?", answer: "Para Src, Java y Maven. Para Build y Test, el cliente local, que corre con Docker y ya incluye todo lo necesario para compilar. Para CI/CD, tu pipeline se encarga." },
    { question: "¿Puedo desplegar directo en Kubernetes?", answer: "Sí. Generate Service envía el proyecto a tu pipeline (GitLab, Jenkins o Azure DevOps), que lo compila y lo despliega, por ejemplo con ArgoCD. Si tu pipeline es interno, el cliente local hace de puente." },
    { question: "¿Mis microservicios se pueden integrar entre sí?", answer: "Sí. Un servicio puede consumir a otro y enviar su resultado a una cola, un archivo o un correo, aunque usen protocolos distintos. La transformación es transparente para ti." },
    { question: "¿Cómo se paga?", answer: "Con créditos: cada endpoint consume los créditos de su tecnología y el plan define cuánto tiempo funciona cada API. Los créditos se mantienen en tu cuenta hasta que los uses." },
  ],

  finalCta: {
    title: "Genera tu primera API hoy.",
    subtitle: "La guía te muestra cada paso, con capturas reales de la plataforma y del cliente local.",
    buttons: [
      { label: "Pruébalo gratis", href: "https://generate-service.com/", primary: true },
      { label: "Ver la guía", href: "/generate-service/guia/", primary: false },
    ],
  },
};
