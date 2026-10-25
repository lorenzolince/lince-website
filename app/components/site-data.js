export const links = {
  platform: "https://generate-service.com/",
  testRepository: "https://github.com/lorenzolince/generate-service-test",
};

export const company = {
  about:
    "Lince Technology desarrolla soluciones de integración y automatización para equipos que necesitan conectar sistemas, modernizar operaciones y entregar software confiable.",
  mission:
    "Diseñar productos y soluciones tecnológicas que conviertan la complejidad de integración en resultados operativos claros.",
  vision:
    "Ser un aliado tecnológico de referencia para organizaciones que modernizan sus plataformas y procesos de integración.",
  values: ["Rigor técnico", "Transparencia", "Evolución continua", "Confiabilidad", "Enfoque práctico"],
};

export const capabilities = [
  {
    title: "Convierta lógica existente en servicios",
    description:
      "Transforme procedimientos, funciones, queries, packages y estructuras de datos en servicios listos para integrar.",
    icon: "01",
  },
  {
    title: "Trabaje con el protocolo adecuado",
    description:
      "Genere APIs REST, GraphQL, gRPC o SOAP según las necesidades de sus consumidores y sistemas actuales.",
    icon: "02",
  },
  {
    title: "Orqueste flujos empresariales",
    description:
      "Conecte APIs, bases de datos, mensajería, archivos y tareas programadas dentro de una misma solución.",
    icon: "03",
  },
  {
    title: "Reciba artefactos que puede adaptar",
    description:
      "Obtenga paquetes de despliegue, configuración y código fuente para extender la solución según su contexto.",
    icon: "04",
  },
];

export const useCases = [
  {
    title: "Modernización de datos",
    description:
      "Exponga lógica establecida en Oracle, SQL Server, PostgreSQL, MySQL o MariaDB mediante interfaces modernas.",
  },
  {
    title: "Integración entre sistemas",
    description:
      "Conecte aplicaciones nuevas y heredadas con APIs, mensajería, archivos y transformaciones de contratos.",
  },
  {
    title: "Automatización operativa",
    description:
      "Procese eventos, directorios, transferencias SFTP y tareas programadas con flujos repetibles.",
  },
];

export const testSteps = [
  {
    number: "01",
    title: "Seleccione un escenario",
    description: "Utilice motores, scripts SQL y esquemas de ejemplo preparados para evaluar una capacidad concreta.",
    image: "/images/generate-service-test/datasource-selection.png",
    alt: "Selección de objetos desde un datasource en Generate Service",
  },
  {
    number: "02",
    title: "Genere y ejecute",
    description: "Cree el microservicio y valide sus endpoints con una interfaz de prueba, Postman o Kreya.",
    image: "/images/generate-service-test/test-interface.png",
    alt: "Interfaz de pruebas de Generate Service Test",
  },
  {
    number: "03",
    title: "Llévelo a su entorno",
    description: "Genere esquemas desde su propia red con el cliente local cuando necesite conservar sus conexiones internamente.",
    image: "/images/generate-service-test/local-schema-generation.png",
    alt: "Generación local de esquemas de base de datos",
  },
];
