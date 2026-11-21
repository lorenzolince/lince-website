export const links = {
  platform: "https://generate-service.com/",
  testRepository: "https://github.com/lorenzolince/generate-service-test",
  guide: "/generate-service/guia/",
  youtube: "https://www.youtube.com/@lincetechnologyofficial",
};

export const company = {
  about:
    "Lince Technology desarrolla soluciones de integración y automatización para equipos que necesitan conectar sistemas, modernizar operaciones y entregar software confiable.",
  mission:
    "Liberar a los equipos de TI del trabajo repetitivo de integración, para que conecten sus sistemas en minutos y dediquen su talento a lo que hace crecer el negocio.",
  vision:
    "Que cualquier empresa de Latinoamérica pueda convertir la lógica que ya tiene en servicios modernos, seguros y bajo su control, con tecnología hecha en Panamá.",
  values: ["Rigor técnico", "Transparencia", "Evolución continua", "Confiabilidad", "Enfoque práctico"],
};

export const capabilities = [
  {
    title: "Convierte la lógica que ya tienes en servicios",
    description:
      "Transforma procedimientos, funciones, queries y packages en microservicios Spring Boot listos para integrar.",
    icon: "01",
  },
  {
    title: "Elige el protocolo que necesitas",
    description:
      "Publica la misma lógica como REST, GraphQL, gRPC, SOAP o WebSocket, según quién la consuma.",
    icon: "02",
  },
  {
    title: "Conecta flujos completos",
    description:
      "Une APIs, bases de datos, mensajería, archivos y tareas programadas en flujos de negocio.",
    icon: "03",
  },
  {
    title: "Recibe código que puedes extender",
    description:
      "Obtén el código fuente, el binario o el despliegue en tu pipeline, con configuración por entorno.",
    icon: "04",
  },
];

export const useCases = [
  {
    title: "Modernización de datos",
    description:
      "Expón la lógica que ya funciona en Oracle, SQL Server, PostgreSQL, MySQL o MariaDB mediante interfaces modernas.",
  },
  {
    title: "Integración entre sistemas",
    description:
      "Conecta aplicaciones nuevas y heredadas con APIs, mensajería, archivos y transformación de contratos.",
  },
  {
    title: "Automatización operativa",
    description:
      "Procesa eventos, carpetas, transferencias SFTP y tareas programadas con flujos repetibles.",
  },
];

export const testSteps = [
  {
    number: "01",
    title: "Elige un escenario",
    description: "Usa motores, scripts SQL y esquemas de ejemplo preparados para evaluar una capacidad concreta.",
    image: "/images/generate-service-test/datasource-selection.png",
    alt: "Selección de objetos desde un datasource en Generate Service",
  },
  {
    number: "02",
    title: "Genera y ejecuta",
    description: "Crea el microservicio y prueba sus endpoints con una interfaz de prueba, Postman o Kreya.",
    image: "/images/generate-service-test/test-interface.png",
    alt: "Interfaz de pruebas de Generate Service Test",
  },
  {
    number: "03",
    title: "Llévalo a tu entorno",
    description: "Genera esquemas desde tu propia red con el cliente local, y tus conexiones se quedan dentro de tu empresa.",
    image: "/images/generate-service-test/local-schema-generation.png",
    alt: "Generación local de esquemas de base de datos",
  },
];
