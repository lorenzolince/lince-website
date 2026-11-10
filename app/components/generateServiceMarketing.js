// Datos de marketing para Generate Service
// Incluye hero, problemas, flujos, diferenciadores, entregables, públicos objetivo y FAQ

export const generateServiceMarketing = {
  hero: {
    title: 'Genere microservicios Spring Boot en minutos',
    subtitle: 'Transforme lógica de base de datos y esquemas en APIs REST, GraphQL, gRPC y SOAP completamente funcionales, con código fuente, Docker y CI/CD listos para desplegar.',
    cta: [
      {
        label: 'Probar gratis',
        href: 'https://generate-service.com/',
        primary: true,
      },
      {
        label: 'Ver escenarios de prueba',
        href: 'https://github.com/lorenzolince/generate-service-test',
        primary: false,
      },
    ],
    image: {
      src: '/images/generate-service/portada.webp',
      alt: 'Página de inicio de Generate Service',
      width: 1600,
      height: 856,
    },
  },

  problems: [
    {
      title: 'Procesos manuales que consumen tiempo',
      description:
        'Traducir lógica de base de datos a código de API requiere horas de escritura manual, pruebas y depuración en cada cambio.',
    },
    {
      title: 'Deuda técnica en sistemas heredados',
      description:
        'Sus procedimientos almacenados, funciones y queries contienen lógica valiosa que permanece desaprovechada en archivos SQL sin exponer a sistemas nuevos.',
    },
    {
      title: 'Múltiples protocolos y tecnologías',
      description:
        'Cada consumidor pide REST, otros GraphQL o gRPC; desarrollar todas las variantes paralelamente consume recursos y multiplica el mantenimiento.',
    },
    {
      title: 'Credenciales expuestas en la nube',
      description:
        'Generar esquemas en línea requiere compartir credenciales de base de datos con servidores externos, comprometiendo seguridad.',
    },
    {
      title: 'Ciclos de despliegue largos',
      description:
        'Ir de una idea a un servicio funcionando en producción toma días o semanas, cuando podría ser horas con herramientas adecuadas.',
    },
    {
      title: 'Fragmentación entre equipos',
      description:
        'Backend, integración, DevOps y seguridad trabajan en silos. Necesitan una plataforma que unificar criterios y acelerar entregas.',
    },
  ],

  howItWorks: [
    {
      step: '01',
      title: 'Seleccione su origen de datos',
      description:
        'Cargue un esquema (JSON, XSD, PROTO, SDL) o conecte directamente a su base de datos (Oracle, SQL Server, PostgreSQL, MySQL, MariaDB). Elija los objetos que desea exponer.',
      details: [
        'Procedimientos almacenados',
        'Funciones y queries',
        'Packages y estructuras',
        'Esquemas en múltiples formatos',
      ],
    },
    {
      step: '02',
      title: 'Configure los protocolos',
      description:
        'Decida si necesita REST, GraphQL, gRPC, SOAP o una combinación. Agregue mensajería (RabbitMQ, ActiveMQ, Kafka), SFTP, SMB o tareas programadas. Configure seguridad y validaciones.',
      details: [
        'APIs REST con OpenAPI',
        'GraphQL con queries y mutations',
        'gRPC con protobuf',
        'SOAP con WSDL',
        'Mensajería integrada',
      ],
    },
    {
      step: '03',
      title: 'Reciba artefactos completos',
      description:
        'Obtenga código fuente compilable, JAR/WAR, Dockerfile, docker-compose, .env configurado y scripts de arranque. Opcionalmente envíe directamente a GitLab, Jenkins, Azure DevOps o ArgoCD para CI/CD automático.',
      details: [
        'Código fuente listo para adaptar',
        'Binarios compilados (JAR/WAR)',
        'Infraestructura como código (Docker, compose)',
        'Variables de entorno y configuración',
        'Integración con CI/CD',
      ],
    },
  ],

  flowPreviews: [
    {
      id: 'flujo-codigo-fuente',
      title: 'Generar código fuente desde BD local',
      description: 'Exponga procedimientos y queries usando el cliente local, sin exponer credenciales a la nube.',
      image: {
        src: '/images/generate-service/config-connection-local-database.webp',
        alt: 'Configuración de conexión a base de datos local',
        width: 1600,
        height: 704,
      },
      href: '#flujo-codigo-fuente',
    },
    {
      id: 'flujo-cicd',
      title: 'Desplegar APIs en CI/CD automático',
      description: 'Envíe el proyecto generado a su pipeline GitLab, Jenkins o Azure DevOps, y tenga la API en producción en minutos.',
      image: {
        src: '/images/generate-service/pipeline-build-api.webp',
        alt: 'Pipeline de compilación en CI/CD',
        width: 1600,
        height: 819,
      },
      href: '#flujo-cicd',
    },
    {
      id: 'flujo-argocd',
      title: 'Gestionar con ArgoCD',
      description: 'Mantenga las APIs sincronizadas con GitOps: cambios en el repositorio se despliegan automáticamente en Kubernetes.',
      image: {
        src: '/images/generate-service/argocd-deployed.webp',
        alt: 'Aplicación desplegada en ArgoCD',
        width: 1600,
        height: 740,
      },
      href: '#flujo-argocd',
    },
    {
      id: 'flujo-pruebas',
      title: 'Probar APIs en tiempo real',
      description: 'Levante la API generada localmente y valide endpoints con Swagger, Postman o Kreya. Vigencia de 24 horas.',
      image: {
        src: '/images/generate-service/test-api-rest.webp',
        alt: 'Interfaz de pruebas de API REST',
        width: 1600,
        height: 773,
      },
      href: '#flujo-pruebas',
    },
  ],

  localClient: {
    title: 'El cliente local: seguridad y control',
    description:
      'generate-service-client es un contenedor Docker que ejecuta dentro de su red. Genera esquemas sin exponer credenciales, prueba APIs antes de llevarlas a producción y administra todas las conexiones de forma segura.',
    benefits: [
      {
        title: 'Seguridad de datos',
        description: 'Las credenciales de base de datos nunca salen de su red interna. Los esquemas se generan localmente.',
      },
      {
        title: 'Pruebas antes de ir a producción',
        description: 'Levante la API completa en 24 horas, valide endpoints, y descargue el código y artefactos compilados.',
      },
      {
        title: 'Gestión centralizada de conexiones',
        description:
          'Configure una sola vez bases de datos, colas de mensajes, SFTP y SMB. Todas las APIs generadas reutilizan esas credenciales de forma segura.',
      },
    ],
    images: [
      {
        src: '/images/generate-service/config-environment-client.webp',
        alt: 'Configuración de entorno en el cliente local',
        width: 1600,
        height: 844,
      },
      {
        src: '/images/generate-service/test-api-generate-local.webp',
        alt: 'Pruebas de API generada localmente',
        width: 1600,
        height: 872,
      },
    ],
  },

  differentiators: [
    {
      title: 'Multiplexación de protocolos',
      description:
        'Un solo origen de datos genera REST, GraphQL, gRPC y SOAP simultáneamente. Atienda a todos tus consumidores sin duplicar lógica.',
    },
    {
      title: 'Integración orquestada',
      description:
        'No solo expone datos: conecta bases de datos, colas de mensajes, archivos (SFTP/SMB) y tareas programadas en un mismo flujo.',
    },
    {
      title: 'Código fuente que es tuyo',
      description:
        'Recibe Spring Boot compilado y personalizable. No estás atrapado en una plataforma SaaS: el código es de tu propiedad.',
    },
    {
      title: 'CI/CD integrado',
      description:
        'Envía el proyecto directamente a GitLab, Jenkins, Azure DevOps o ArgoCD. Tu pipeline se activa automáticamente.',
    },
    {
      title: 'Seguridad local-first',
      description:
        'Genera esquemas dentro de tu red con el cliente local. Credenciales nunca transitan por internet.',
    },
    {
      title: 'Sin cerrojos propietarios',
      description:
        'Despliega en Kubernetes, contenedores privados o servidores propios. Dominas toda la infraestructura.',
    },
  ],

  deliverables: [
    {
      icon: '📝',
      title: 'Código fuente',
      description: 'Proyecto Spring Boot compilable, con estructura estándar, tests unitarios y documentación integrada.',
    },
    {
      icon: '📦',
      title: 'Artefactos binarios',
      description: 'JAR o WAR compilado, listo para ejecución. Incluye todas las dependencias necesarias.',
    },
    {
      icon: '🐳',
      title: 'Dockerización',
      description: 'Dockerfile optimizado y docker-compose con la API, bases de datos de prueba y herramientas de desarrollo.',
    },
    {
      icon: '⚙️',
      title: 'Configuración',
      description: 'Archivo .env preconfigurado con placeholders para conexiones, mensajería, SFTP, SMB y secretos.',
    },
    {
      icon: '🚀',
      title: 'Scripts de arranque',
      description: 'Bash/Batch para iniciar, detener, construir y desplegar la API en diferentes entornos.',
    },
    {
      icon: '📚',
      title: 'Documentación',
      description: 'OpenAPI/Swagger, Postman collections, guías de configuración y referencias de endpoints.',
    },
    {
      icon: '🔗',
      title: 'CI/CD listos',
      description: 'Pipelines preconstruidos para GitLab CI, Jenkins, Azure Pipelines y ArgoCD. Personalízalos según tus criterios.',
    },
    {
      icon: '✅',
      title: 'Tests automatizados',
      description: 'Suite de pruebas unitarias e integración, configuradas para ejecutarse en cada build.',
    },
  ],

  audiences: [
    {
      title: 'Equipos de integración',
      description:
        'Aceleren proyectos de transformación digital conectando sistemas legados con arquitecturas modernas sin escribir boilerplate.',
    },
    {
      title: 'Arquitectos empresariales',
      description:
        'Diseñen ecosistemas de APIs multiprotocolo con gobernanza clara, sin depender de múltiples equipos especializados.',
    },
    {
      title: 'Desarrolladores Backend',
      description:
        'Pasen menos tiempo escribiendo CRUD y validaciones, más tiempo innovando. El código generado sigue convenciones estándar.',
    },
    {
      title: 'Equipos de DevOps/SRE',
      description:
        'Unifiquen el despliegue de APIs mediante CI/CD e infraestructura como código. Reduzcan la variabilidad entre ambientes.',
    },
    {
      title: 'Startups y consultoras',
      description:
        'Entreguen prototipos y POCs en días, no semanas. Compitan ofreciendo velocidad sin sacrificar calidad o escalabilidad.',
    },
    {
      title: 'Empresas con datos heredados',
      description:
        'Expongan lógica existente en Oracle, SQL Server o cualquier BD moderna mediante interfaces que sus clientes esperan (REST, GraphQL).',
    },
  ],

  demoVideos: [
    {
      title: 'Generar API REST desde procedimiento almacenado',
      description: 'Vea cómo Generate Service toma un procedure de Oracle y genera un microservicio REST completo en menos de 2 minutos.',
      // TODO: Agregar ID de video (YouTube, Vimeo, etc.)
      videoId: 'PENDIENTE',
    },
    {
      title: 'Desplegar en Kubernetes con ArgoCD',
      description: 'Desde el proyecto generado hasta una aplicación corriendo en Kubernetes con GitOps y sincronización automática.',
      // TODO: Agregar ID de video
      videoId: 'PENDIENTE',
    },
    {
      title: 'Configurar mensajería y SFTP',
      description: 'Integre colas de mensajes y transferencias de archivos en la misma API sin código adicional.',
      // TODO: Agregar ID de video
      videoId: 'PENDIENTE',
    },
  ],

  faq: [
    {
      question: '¿Qué bases de datos soporta?',
      answer:
        'Generate Service trabaja con Oracle, SQL Server, PostgreSQL, MySQL y MariaDB. También acepta esquemas en JSON, XSD, PROTO y SDL (GraphQL).',
    },
    {
      question: '¿Puedo usar el código generado en producción?',
      answer:
        'Sí. El código generado es una aplicación Spring Boot completa, compilable y lista para desplegar. Incluye validaciones, manejo de errores y patrones estándar de empresa.',
    },
    {
      question: '¿El código generado es suyo o mío?',
      answer:
        'Es completamente tuyo. Recibes el código fuente, binarios y toda la documentación. Puedes modificarlo, distribuirlo y desplegarlo donde quieras sin restricciones.',
    },
    {
      question: '¿Cómo protege mis credenciales?',
      answer:
        'Con generate-service-client ejecuta todo dentro de tu red privada. Las credenciales nunca salen de tu infraestructura. Para producción, usa variables de entorno o gestores de secretos como Vault o AWS Secrets Manager.',
    },
    {
      question: '¿Puede generar APIs sin base de datos?',
      answer:
        'Sí. Si proporcionas esquemas (JSON, XSD, PROTO, SDL), Generate Service genera las APIs directamente sin necesidad de conectar a una base de datos.',
    },
    {
      question: '¿Soporta múltiples protocolos en la misma API?',
      answer:
        'Sí. Un origen de datos puede generar simultáneamente REST, GraphQL, gRPC y SOAP. Cada consumidor elige el protocolo que necesita.',
    },
    {
      question: '¿Puedo integrar mensajería y SFTP?',
      answer:
        'Sí. Puede configurar RabbitMQ, ActiveMQ, Kafka, SFTP y SMB como parte del flujo. Las APIs generadas incluyen operaciones para enviar y recibir mensajes, archivos, etc.',
    },
    {
      question: '¿Cómo se integra con CI/CD?',
      answer:
        'El proyecto generado incluye Dockerfiles y scripts listos para GitLab CI, Jenkins, Azure Pipelines y ArgoCD. Solo configura las variables de entorno y activa el pipeline.',
    },
    {
      question: '¿Cuál es la diferencia entre versión SaaS y cliente local?',
      answer:
        'La plataforma SaaS (https://generate-service.com/) genera APIs en la nube. El cliente local (generate-service-client) genera esquemas dentro de tu red privada sin exponer credenciales. Ambos entregan el mismo código compilable.',
    },
    {
      question: '¿Cuánto cuesta?',
      answer:
        '// TODO: Agregar información de precios. Acceda a https://generate-service.com/ para consultar planes y ofertas actuales.',
    },
  ],

  finalCta: {
    title: 'Acelere sus proyectos de integración',
    subtitle:
      'Deje que Generate Service maneje la generación de código. Usted enfóquese en lógica de negocio, no en boilerplate.',
    buttons: [
      {
        label: 'Probar ahora (gratis)',
        href: 'https://generate-service.com/',
        primary: true,
      },
      {
        label: 'Ver la guía de uso',
        href: '/generate-service/guia',
        primary: false,
      },
    ],
  },
};
