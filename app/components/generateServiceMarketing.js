// Datos de marketing para Generate Service
// Fuente: Flujos.zip - Contenido verificado y documentado
// Nov 10, 2026

export const generateServiceMarketing = {
  hero: {
    title: 'De la lógica de base de datos a APIs en producción, sin escribir código',
    subtitle: 'Generate Service convierte cinco orígenes de datos en microservicios Spring Boot completamente funcionales, documentados y listos para Kubernetes: esquemas de base de datos (Oracle, SQL Server, PostgreSQL, MySQL, MariaDB), REST, SOAP (XSD), GraphQL y gRPC (PROTO).',
    cta: [
      {
        label: 'Probar gratis',
        href: 'https://generate-service.com/',
        primary: true,
      },
      {
        label: 'Ver la guía visual',
        href: '/generate-service/guia',
        primary: false,
      },
    ],
    image: {
      src: '/images/portada.webp',
      alt: 'Generate Service: plataforma de generación de microservicios',
      width: 1600,
      height: 856,
    },
  },

  problems: [
    {
      title: 'Translación manual de lógica empresarial a código',
      description:
        'Sus procedimientos y funciones contienen la lógica de negocio probada en producción. Convertirla a APIs exige semanas de desarrollo, tests y validación.',
    },
    {
      title: 'Exposición de credenciales con herramientas SaaS',
      description:
        'Plataformas en la nube pública requieren conexión directa a su base de datos. Eso viola políticas de seguridad en la mayoría de las empresas.',
    },
    {
      title: 'Ciclos de iteración largos antes de validar en producción',
      description:
        'Sin una forma económica de probar cambios en su infraestructura, los equipos esperan meses entre versiones. Los ajustes son caros e inciertos.',
    },
    {
      title: 'Despliegue manual y propenso a errores',
      description:
        'Llevar una API de desarrollo a producción requiere múltiples pasos manuales: compilación, dockerización, variables, secretos, pipeline, Kubernetes.',
    },
    {
      title: 'Dependencia de múltiples especialistas',
      description:
        'Desarrollo, DevOps, Seguridad e Integración trabajan en silos. Cada cambio requiere coordinación entre equipos.',
    },
  ],

  advantagesSection: {
    title: 'Ventajas de Generate Service',
    description: 'Todo lo que necesita para ir de la idea a producción en un día, no en semanas.',
    advantages: [
      {
        title: 'Modo Test: itere económicamente 24 horas',
        description:
          'Genere versiones de prueba de su API que viven 1 día en su infraestructura local. Pruebe con datos reales, ajuste endpoints y autenticación, y genere la versión final solo cuando esté seguro. Cuesta una fracción del precio final.',
      },
      {
        title: 'Cliente local: compile en su infraestructura',
        description:
          'generate-service-client es un contenedor Docker que se ejecuta dentro de su infraestructura. Descarga esquemas, genera código localmente y despliega en Kubernetes on-premises, cloud privada o intranet corporativa.',
      },
      {
        title: 'Despliegue end-to-end en Kubernetes con ArgoCD',
        description:
          'Desde Generate Service hasta un pod en ejecución en Kubernetes. Pipeline automatizado, GitOps, secretos encriptados, modelo declarativo, sin intervención manual.',
      },
    ],
  },

  howItWorks: [
    {
      step: '1',
      title: 'Registre su base de datos una sola vez',
      description:
        'Configure datasources (Oracle, SQL Server, PostgreSQL, MySQL, MariaDB), cliente local, CI/CD e integraciones. Cada uno es opcional; solo los que necesita.',
      icon: '⚙️',
    },
    {
      step: '2',
      title: 'Seleccione la lógica que desea exponer',
      description:
        'Marque los procedimientos, funciones, packages y queries que quiere convertir en endpoints. Generate Service descubre el catálogo de su base y los presenta en una lista.',
      icon: '✓',
    },
    {
      step: '3',
      title: 'Elija un modo y reciba el resultado',
      description:
        'Src (código fuente en ZIP), Build (binario compilado), Test (prueba 24h en su red), o CI/CD (despliegue directo a Kubernetes). La plataforma genera y entrega en minutos.',
      icon: '📦',
    },
  ],

  modesComparison: {
    title: 'Modos de generación',
    description: 'Elija el que mejor se adapte a su flujo de trabajo.',
    modes: [
      {
        name: 'Src',
        description: 'Código fuente Maven descargable',
        what: 'Usted',
        compiles: true,
        lifespan: 'Permanente',
        cost: 'Base',
        ideal: 'Máximo control y versionado',
      },
      {
        name: 'Build',
        description: 'Binario JAR compilado',
        what: 'generate-service-client',
        compiles: false,
        lifespan: 'Permanente',
        cost: 'Base',
        ideal: 'Ejecución inmediata',
      },
      {
        name: 'Test',
        description: 'API en ejecución 24 horas',
        what: 'generate-service-client',
        compiles: false,
        lifespan: '1 día',
        cost: '~10% del Build',
        ideal: 'Iterar antes de hacer build final',
      },
      {
        name: 'CI/CD',
        description: 'Despliegue end-to-end a Kubernetes',
        what: 'generate-devops en pipeline',
        compiles: false,
        lifespan: 'Permanente',
        cost: 'Base + DevOps',
        ideal: 'Automatización total',
      },
    ],
  },

  testAdvantage: {
    title: '¿Por qué usar Test antes de Build?',
    points: [
      'Reduzca costos: pague ~10% en lugar del precio completo',
      'Valide con datos reales en su infraestructura',
      'Ajuste endpoints, autenticación, protocolos',
      'Pruebe la integración con sus sistemas',
      'Comparta la API con su equipo por 24 horas',
      'Tenga certeza antes de pagar por la versión final',
    ],
  },

  architectureSection: {
    title: 'Arquitectura: separación de generación y compilación',
    description:
      'La plataforma genera en la nube, pero la compilación ocurre en su infraestructura. Así, sus bases de datos y credenciales nunca se exponen a internet.',
    points: [
      'Modo Src: código llega directo al navegador',
      'Modos Build y Test: generate-service-client compila localmente',
      'Modo CI/CD: generate-devops compila en su pipeline',
      'Comunicación: HTTPS con autenticación JWT',
      'Credenciales: nunca salen de su red',
    ],
  },

  faq: [
    {
      question: '¿Cómo funciona la seguridad con generate-service-client?',
      answer:
        'El cliente se ejecuta en su red y maneja todas las credenciales localmente. La plataforma envía órdenes por HTTPS autenticado, pero nunca ve las credenciales. Descarga el proyecto comprimido, lo compila en su infraestructura y entrega el artefacto.',
    },
    {
      question: '¿Puedo probar en modo Test sin generar Build?',
      answer:
        'Sí, es el propósito: genere en modo Test, pruebe por 24 horas con sus datos, ajuste lo que necesite, y solo cuando esté seguro, genere Build o CI/CD. Ahorra dinero y reduce riesgo.',
    },
    {
      question: '¿Qué bases de datos soporta?',
      answer:
        'Oracle, SQL Server, PostgreSQL, MySQL y MariaDB. También acepta esquemas en JSON, XSD, PROTO y SDL para generar APIs que consuman esas especificaciones.',
    },
    {
      question: '¿Puedo desplegar directo a Kubernetes?',
      answer:
        'Sí, en modo CI/CD. La plataforma envía el artefacto al pipeline de GitLab, Jenkins o Azure DevOps con la imagen generate-devops, que compila dentro del pipeline. ArgoCD sincroniza automáticamente a Kubernetes.',
    },
    {
      question: '¿El código generado es modificable?',
      answer:
        'En modo Src, sí: recibe el código fuente Maven completo y lo puede editar, versionarlo y desplegarlo como quiera. En Build y Test, también recibe el código junto con el binario.',
    },
    {
      question: '¿Cuánto tiempo vive un artefacto Test?',
      answer:
        '24 horas. Después se destruye automáticamente. Es suficiente para probar, compartir con el equipo y decidir si procede con la versión final.',
    },
    {
      question: '¿Requiere instalar Maven o Docker en mi equipo?',
      answer:
        'No para modos Build y Test: generate-service-client ya lo incluye. Para modo Src, sí necesita Maven. Para CI/CD, el pipeline lo maneja.',
    },
    {
      question: '¿Qué protocolos puedo generar?',
      answer:
        'REST, GraphQL, gRPC, SOAP y WebSocket. En modo CI/CD también puede agregar mensajería (RabbitMQ, ActiveMQ, Kafka), listeners SFTP y SMB, y tareas programadas con Quartz.',
    },
    {
      question: '¿Dónde almacena Generate Service los artefactos?',
      answer:
        'En el cliente local si usa generate-service-client, dentro de su espacio de trabajo (no en la nube). Si usa modo CI/CD, en su pipeline y en Kubernetes.',
    },
    {
      question: '¿Puedo usar Generate Service sin el cliente local?',
      answer:
        'Sí, en modo Src sin clientes. Pero para modos Build, Test y CI/CD necesita registrar un cliente o un webhook de CI/CD.',
    },
  ],

  finalCta: {
    title: 'Comience a generar hoy',
    subtitle:
      'La guía visual le muestra cada flujo paso a paso, con imágenes reales de la plataforma y del cliente local.',
    buttons: [
      {
        label: 'Probar gratis',
        href: 'https://generate-service.com/',
        primary: true,
      },
      {
        label: 'Ver guía visual',
        href: '/generate-service/guia',
        primary: false,
      },
    ],
  },
};
