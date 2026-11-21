// Contenido de la guía de Generate Service (español).
// Cada capítulo genera una página estática: /generate-service/guia/<slug>/
//
// Bloques disponibles:
//   { p: "texto" }                         párrafo
//   { lista: ["…", "…"] }                  viñetas
//   { pasos: [{ titulo, texto, img }] }    pasos numerados (img opcional)
//   { img: "/images/…", alt: "…" }         captura existente
//   { captura: "descripción" }             captura pendiente (solo se ve en modo dev)
//   { nota: "texto", tipo: "info|ok|aviso" }
//   { tabla: { cab: [...], filas: [[...]] } }
//   { codigo: "texto" }
//   { flujo: ["Paso", "Paso", ...] }       diagrama de pasos en línea
//
// Texto con **negritas** y `código` se interpreta en Bloques.jsx.

export const grupos = [
  { id: "inicio", titulo: "Primeros pasos" },
  { id: "tutorial", titulo: "Tutorial" },
  { id: "config", titulo: "Configuración" },
  { id: "cliente", titulo: "Cliente local" },
  { id: "conceptos", titulo: "Conceptos" },
  { id: "operacion", titulo: "Operación" },
  { id: "reglas", titulo: "Reglas de Generate Service" },
  { id: "ayuda", titulo: "Seguridad y ayuda" },
];

export const capitulos = [
  // ------------------------------------------------------------------ INICIO
  {
    slug: "como-funciona",
    grupo: "inicio",
    titulo: "Cómo funciona Generate Service",
    resumen: "Qué hace la plataforma, qué recibe y qué te entrega.",
    secciones: [
      {
        bloques: [
          { p: "Generate Service convierte la lógica que ya tienes en tu base de datos —procedimientos, funciones, packages y queries— en **microservicios Spring Boot listos para producción**. Tú eliges qué publicar, en qué tecnología y cómo quieres recibirlo; la plataforma escribe el proyecto completo por ti." },
          { flujo: ["Tu base de datos o tu esquema", "Eliges qué publicar", "Generate Service genera", "Recibes tu microservicio"] },
        ],
      },
      {
        titulo: "1. De dónde sale la información",
        bloques: [
          { p: "Generate Service trabaja con la **descripción** de tus objetos de base de datos (nombres, parámetros y tipos), nunca con tus datos. Hay dos formas de dársela:" },
          { tabla: { cab: ["Forma", "Cómo funciona", "Ideal para"], filas: [
            ["**Datasource**", "Registras la conexión en la plataforma, que lee la metadata y te muestra un árbol con los objetos publicables.", "Bases de desarrollo o de pruebas accesibles desde internet."],
            ["**Archivo de esquema**", "El **cliente local** corre dentro de tu red, lee la base y genera un archivo de esquema. Solo ese archivo viaja a la plataforma.", "Empresas con políticas de seguridad estrictas: las credenciales se quedan en tu red."],
          ] } },
        ],
      },
      {
        titulo: "2. En qué tecnología se expone",
        bloques: [
          { p: "Un mismo procedimiento puede publicarse como **REST, GraphQL, gRPC, SOAP o WebSocket**, o conectarse a **Kafka, RabbitMQ, ActiveMQ, JMS, SFTP, SMB, archivos o schedulers** (Spring y Quartz). Con **Multi Tech** combinas varias tecnologías y orquestas pasos en un solo proyecto. El detalle está en [Tecnologías disponibles](/generate-service/guia/tecnologias/)." },
        ],
      },
      {
        titulo: "3. Cómo lo recibes",
        bloques: [
          { tabla: { cab: ["Modalidad", "Qué recibes"], filas: [
            ["**Código fuente (SRC)**", "El proyecto Maven completo para abrirlo, extenderlo con tu lógica y compilarlo."],
            ["**Binario (BUILD)**", "El JAR listo, con Dockerfile, docker-compose, `.env` y scripts para ejecutarlo."],
            ["**Prueba local (TEST)**", "Tu cliente local compila y levanta la API en tu máquina para probarla."],
            ["**Esquemas (XSD)**", "Solo los contratos: JSON, XSD, PROTO o SDL, reutilizables para nuevos servicios."],
            ["**CI/CD (DEVOPS)**", "El proyecto viaja a tu pipeline (GitLab, Jenkins, Azure DevOps…) y se despliega, por ejemplo, en Kubernetes."],
          ] } },
          { p: "Más detalle en [Modos de generación](/generate-service/guia/modos-de-generacion/)." },
        ],
      },
      {
        titulo: "4. Un recorrido típico",
        bloques: [
          { pasos: [
            { titulo: "Configura tu origen", texto: "Registra un datasource o instala el cliente local para generar esquemas dentro de tu red." },
            { titulo: "Elige el módulo", texto: "REST, GraphQL, WebSocket, gRPC, SOAP o Multi Tech desde el menú superior; mensajería, archivos y schedulers desde el menú lateral." },
            { titulo: "Selecciona qué publicar", texto: "Marca procedimientos, funciones, packages o escribe tus queries. Cada objeto se convierte en un endpoint." },
            { titulo: "Elige cómo lo quieres y genera", texto: "Código fuente, binario, prueba local, esquemas o CI/CD. Un clic en **Generar**." },
          ] },
          { p: "El **menú lateral** (botón ☰ arriba a la izquierda) agrupa los servicios de mensajería, archivos y schedulers, las configuraciones (datasources, CI/CD, cliente webhook, variables de entorno) y la administración (eventos, operaciones generadas, créditos)." },
          { img: "/images/guia/full-menu.webp", alt: "Menú lateral de la plataforma" },
        ],
      },
    ],
  },
  {
    slug: "crear-cuenta",
    grupo: "inicio",
    titulo: "Crear tu cuenta y prueba gratis",
    resumen: "Inicio de sesión, términos de servicio y período de prueba.",
    secciones: [
      {
        titulo: "Inicia sesión",
        bloques: [
          { p: "Entra a [generate-service.com](https://generate-service.com) y elige cómo iniciar sesión:" },
          { lista: ["**Google** o **GitHub**: un clic, sin formularios.", "**Correo electrónico**: completa tus datos y confirma el código que te llega por correo."] },
          { img: "/images/login.png", alt: "Pantalla de inicio de sesión de Generate Service" },
        ],
      },
      {
        titulo: "Acepta los términos de servicio",
        bloques: [
          { p: "La primera vez que entras verás los **Términos de Servicio y Licencia**. Resumen de lo más importante:" },
          { lista: [
            "El **código fuente generado es tuyo**: puedes usarlo, modificarlo y extenderlo en tu infraestructura.",
            "Las bibliotecas de Lince que incluye el proyecto se usan dentro de ese proyecto.",
            "Cada API funciona durante la **vigencia del plan** con el que se generó.",
          ] },
          { img: "/images/guia/terminos-servicio.webp", alt: "Términos de Servicio y Licencia en el primer inicio de sesión" },
        ],
      },
      {
        titulo: "Tu período de prueba",
        bloques: [
          { p: "Las cuentas nuevas pueden usar la plataforma gratis durante el período de prueba vigente, que se informa en el sitio. Durante la prueba tienes acceso a todos los módulos para generar y probar tus APIs." },
          { nota: "Cuando compras créditos, tu cuenta pasa a ser una cuenta de pago y la prueba termina. Los créditos se mantienen en tu cuenta hasta que los uses.", tipo: "info" },
        ],
      },
      {
        titulo: "Orden recomendado para empezar",
        bloques: [
          { pasos: [
            { titulo: "Configura un datasource", texto: "O instala el cliente local si tu base no puede salir de tu red. Ver [Datasources](/generate-service/guia/datasources/)." },
            { titulo: "Configura el cliente local (opcional)", texto: "Necesario para la prueba local (TEST). Ver [Cliente local y webhook](/generate-service/guia/cliente-local/)." },
            { titulo: "Configura tu CI/CD (opcional)", texto: "Si quieres desplegar automáticamente. Ver [CI/CD](/generate-service/guia/ci-cd/)." },
            { titulo: "Genera tu primera API", texto: "Sigue el [tutorial paso a paso](/generate-service/guia/primera-api-rest/)." },
          ] },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ TUTORIAL
  {
    slug: "primera-api-rest",
    grupo: "tutorial",
    titulo: "Tu primera API REST, paso a paso",
    resumen: "Del procedimiento en la base de datos a una API funcionando, con el proyecto de prueba gratuito.",
    secciones: [
      {
        bloques: [
          { p: "En este tutorial publicas un procedimiento como **API REST** y la pruebas en tu máquina. Usamos el proyecto de prueba gratuito **generate-service-test**, que trae bases de datos listas para Oracle, SQL Server, PostgreSQL, MySQL y MariaDB." },
          { nota: "Necesitas Docker instalado. Todo corre en tu máquina; no necesitas servidores.", tipo: "info" },
        ],
      },
      {
        titulo: "1. Prepara la base de datos de prueba",
        bloques: [
          { codigo: "git clone https://github.com/lorenzolince/generate-service-test.git\ncd generate-service-test" },
          { p: "Entra a la carpeta del motor que quieres probar (por ejemplo `mariaDb/` u `OracleDb/`) y levanta la base con Docker siguiendo su README. Los scripts SQL crean tablas, procedimientos y funciones de ejemplo." },
        ],
      },
      {
        titulo: "2. Abre el módulo REST y completa el proyecto",
        bloques: [
          { p: "En la plataforma, menú superior → **Rest**. Completa los datos del proyecto:" },
          { tabla: { cab: ["Campo", "Ejemplo", "Para qué sirve"], filas: [
            ["Nombre del proyecto", "`personas`", "Nombre único; se usa como prefijo en rutas y artefactos."],
            ["Dominio", "`com.empresa.demo`", "Paquete base de las clases Java."],
            ["Servidor de aplicaciones", "EMBEDDED", "Embebido (Docker/Kubernetes), WildFly, WebLogic o Tomcat."],
            ["Origen", "DATABASE", "DATABASE usa un datasource; API_SOURCE usa un archivo de esquema."],
            ["Tipo de base de datos", "MariaDB", "Motor de tu base."],
          ] } },
          { img: "/images/src/generate-api-rest.png", alt: "Formulario del módulo REST con los datos del proyecto" },
        ],
      },
      {
        titulo: "3. Elige el origen: datasource o archivo de esquema",
        bloques: [
          { p: "**Con datasource:** selecciona la conexión y el esquema (owner), y en **choose procedure** pulsa **Edit**. Verás un árbol con packages, procedimientos y funciones." },
          { img: "/images/src/SelectPLSql.png", alt: "Árbol de selección de procedimientos y funciones" },
          { p: "**Con archivo de esquema:** elige API_SOURCE y adjunta el archivo. El proyecto de prueba ya trae esquemas listos en la carpeta `schemas/` de cada motor, o puedes generarlos con el cliente local." },
          { img: "/images/test/UploadFileSchemmaInGenerateService.png", alt: "Adjuntar un archivo de esquema en Generate Service" },
        ],
      },
      {
        titulo: "4. Selecciona qué publicar",
        bloques: [
          { p: "Cada objeto que marques se convierte en un endpoint. También puedes escribir tus propias queries con parámetros:" },
          { codigo: "SELECT last_name, first_name FROM owner.person WHERE email = :param_email" },
          { img: "/images/test/RegisterEndpointRestByProcesdure.png", alt: "Endpoints registrados a partir de procedimientos" },
        ],
      },
      {
        titulo: "5. Elige el modo y genera",
        bloques: [
          { p: "Debajo de la tabla eliges el modo: **Build, Test, Schema, Src, devops, devops_test o devops_src**. Marca **Test** para que tu cliente local compile y levante la API en tu máquina (necesitas el [cliente local configurado](/generate-service/guia/cliente-local/)). Si prefieres el código, marca **Src**; si quieres el ejecutable, **Build**. Al pasar el mouse sobre el botón verás cuántos créditos consumirá." },
          { img: "/images/test/SelectWebHookAndSendGenerate-service-client.png", alt: "Seleccionar el webhook del cliente local y generar" },
        ],
      },
      {
        titulo: "6. Prueba tu API",
        bloques: [
          { p: "El cliente local compila el proyecto, crea el contenedor y te muestra la API en ejecución. Ábrela en **Swagger** y prueba cada endpoint con datos reales." },
          { img: "/images/test/ViewRunApisInGenerateServiceClinet.png", alt: "APIs en ejecución en el cliente local" },
          { img: "/images/guia/base-prueba-docker.webp", alt: "El proyecto generado, su Swagger con los endpoints y el contenedor corriendo en Docker" },
          { nota: "¡Listo! Ya tienes tu primera API. Cuando estés conforme, genera el código fuente (SRC) o el binario (BUILD), o envíala a tu pipeline de CI/CD.", tipo: "ok" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ CONFIGURACIÓN
  {
    slug: "datasources",
    grupo: "config",
    titulo: "Configurar datasources",
    resumen: "Registra la conexión a Oracle, SQL Server, PostgreSQL, MySQL o MariaDB.",
    secciones: [
      {
        bloques: [
          { p: "Un **datasource** es una conexión a tu base de datos registrada en la plataforma. Con él, Generate Service lee la metadata y te muestra los objetos que puedes publicar. Es opcional: si tu base no puede recibir conexiones externas, usa el [cliente local](/generate-service/guia/cliente-local/) y trabaja con archivos de esquema." },
          { p: "Menú lateral → **Origen de Datos** → elige el motor:" },
          { lista: ["Oracle", "SQL Server", "MySQL", "MariaDB", "PostgreSQL"] },
        ],
      },
      {
        titulo: "Datos de la conexión",
        bloques: [
          { tabla: { cab: ["Campo", "Descripción"], filas: [
            ["Nombre", "Un nombre para reconocerla, por ejemplo `ORA_DESARROLLO`."],
            ["Host y puerto", "Dirección del servidor de base de datos."],
            ["Usuario y contraseña", "Un usuario con permiso para leer la metadata de los esquemas."],
            ["Service Name / base de datos", "En Oracle, el *service name*; en los demás motores, el nombre de la base."],
            ["Esquemas", "Los esquemas (owners) que quieres explorar."],
          ] } },
          { img: "/images/config/DatasourceConfig.png", alt: "Formulario de configuración de un datasource" },
        ],
      },
      {
        titulo: "Prueba y guarda",
        bloques: [
          { pasos: [
            { titulo: "Prueba la conexión", texto: "Usa **Prueba de conexión**. Si es correcta, verás «Conexión exitosa»." },
            { titulo: "Elige los esquemas", texto: "Selecciona los esquemas que quieres usar al generar." },
            { titulo: "Guarda", texto: "El datasource queda disponible en todos los módulos de generación." },
          ] },
          { img: "/images/guia/datasource-conexion-exitosa.webp", alt: "Datasource Oracle con la prueba de conexión exitosa y la lista de esquemas" },
          { nota: "Puedes registrar varios datasources (desarrollo, pruebas, distintos motores) y elegir cuál usar en cada generación.", tipo: "info" },
        ],
      },
      {
        titulo: "Buenas prácticas",
        bloques: [
          { lista: [
            "Usa un **usuario de solo lectura de metadata**, no el usuario dueño de los datos.",
            "Conecta una base de **desarrollo o pruebas**, no la de producción.",
            "Si la política de tu empresa no permite que la base reciba conexiones externas, usa el **cliente local**.",
          ] },
        ],
      },
    ],
  },
  {
    slug: "cliente-local",
    grupo: "cliente",
    titulo: "Cliente local y webhook",
    resumen: "El agente que corre en tu red: genera esquemas, compila y prueba sin exponer credenciales.",
    secciones: [
      {
        bloques: [
          { p: "El **cliente local** (generate-service-client) es una aplicación que instalas una sola vez en tu red con Docker. Hace tres cosas:" },
          { lista: [
            "**Genera archivos de esquema** desde tu base de datos, sin que las credenciales salgan de tu red.",
            "**Recibe los proyectos** que generas en la plataforma (a través de un *webhook*), los compila y levanta las APIs para probarlas.",
            "Te muestra todo en su **interfaz web**: APIs en ejecución, artefactos y esquemas.",
          ] },
          { flujo: ["Generate Service", "Webhook", "Cliente local en tu red", "Tu API corriendo"] },
        ],
      },
      {
        titulo: "1. Instala el cliente",
        bloques: [
          { p: "En la plataforma, menú lateral → **Configuraciones** → **Client webhook**, pulsa **Download** («Tool to generate Schemas») para descargar el `docker-compose.yml` del cliente, y levántalo:" },
          { img: "/images/test/DownLoadClientGenerateService.png", alt: "Descarga del cliente local desde la plataforma" },
          { codigo: "docker compose up -d" },
          { img: "/images/test/RunClientGenerateService.png", alt: "Cliente local en ejecución" },
        ],
      },
      {
        titulo: "2. Conecta tu base de datos en el cliente",
        bloques: [
          { p: "En la interfaz del cliente registras la conexión a tu base. Esa configuración **vive solo en tu red**." },
          { img: "/images/client/ConfigConexionLocalDatabase.png", alt: "Configuración de la conexión local en el cliente" },
        ],
      },
      {
        titulo: "3. Genera esquemas",
        bloques: [
          { p: "Elige los procedimientos, funciones o queries y genera el archivo de esquema. Luego lo adjuntas en la plataforma con el origen **API_SOURCE**." },
          { img: "/images/client/GenerarSchemaLocal.png", alt: "Generar un esquema en el cliente local" },
          { img: "/images/client/DownLoadSchemaLocal.png", alt: "Descargar el esquema generado" },
        ],
      },
      {
        titulo: "4. Registra el webhook en la plataforma",
        bloques: [
          { p: "Para que la plataforma pueda enviarle proyectos al cliente (modo **Test**), regístralo en la misma pantalla **Client webhook** con **Add**:" },
          { tabla: { cab: ["Campo", "Descripción"], filas: [
            ["Nombre", "Un nombre para el cliente, por ejemplo `cliente-oficina`."],
            ["Local", "Define desde dónde se llama al cliente (ver abajo)."],
            ["URL", "Dirección del cliente."],
            ["Token", "Clave que valida que los envíos vienen de tu cuenta. Trátala como una contraseña."],
          ] } },
          { img: "/images/guia/config-client-webhook.webp", alt: "Registro del webhook del cliente local (token oculto)" },
        ],
      },
      {
        titulo: "Local o público: cómo se comunica la plataforma con tu cliente",
        bloques: [
          { tabla: { cab: ["", "Con **Local** marcado", "Con **Local** desmarcado"], filas: [
            ["Quién llama al cliente", "**Tu navegador**, desde tu propia máquina.", "**El servidor de Generate Service**, por internet."],
            ["URL", "Fija: `http://localhost:8082/clg_service`. No se puede cambiar.", "Una **URL pública** de tu cliente, accesible desde internet."],
            ["Ideal para", "Probar en tu computador. Es la opción recomendada.", "Un cliente instalado en un servidor de tu empresa."],
          ] } },
          { nota: "Por seguridad, en modo local solo se permite `localhost` con el puerto `8082`. Es una regla fija de la plataforma.", tipo: "aviso" },
          { p: "**Con una URL pública**, tu equipo configura el proxy (por ejemplo nginx o un balanceador, con HTTPS) para que el tráfico llegue de internet al cliente, y la dirección pública debe coincidir con la interna del cliente." },
          { p: "El cliente usa dos variables de su `docker-compose.yml` para indicar dónde quedan publicadas las APIs que levanta:" },
          { codigo: "environment:\n  NGNX_DOMAIN: \"http://localhost\"   # dominio donde se publican las APIs\n  NGNX_PORT: 8082                   # puerto de ese dominio" },
          { p: "Al terminar una prueba, el cliente le informa a Generate Service el dominio y el puerto donde quedó la API, y con ellos se arman los enlaces de **Swagger**, la interfaz de **GraphQL** y los demás. Los valores por defecto sirven para uso local. Si publicas el cliente en internet, ajústalos para que coincidan con tu proxy." },
          { nota: "El cliente está pensado para pruebas. Para producción, despliega tus APIs con el código fuente, el binario o tu pipeline de CI/CD.", tipo: "info" },
          { nota: "Sin webhook también puedes trabajar: el cliente sigue generando esquemas, y la plataforma te entrega código fuente o binarios para descargar.", tipo: "info" },
        ],
      },
      {
        titulo: "5. Recibe y prueba tus APIs",
        bloques: [
          { p: "Cuando generas en modo TEST, el cliente compila el proyecto y levanta la API. La ves en su interfaz y la pruebas con Swagger." },
          { img: "/images/test/ProceessCLientBuildApi.png", alt: "El cliente compila el proyecto recibido" },
          { img: "/images/test/ViewContainerApi.png", alt: "Contenedor de la API en ejecución" },
        ],
      },
    ],
  },
  {
    slug: "configurar-cliente",
    grupo: "cliente",
    titulo: "Configurar el cliente local",
    resumen: "Conexiones, variables de SFTP, SMB y mensajería, APIs locales y artefactos.",
    secciones: [
      {
        bloques: [
          { p: "El cliente tiene su propia interfaz web en `http://localhost:8082/clg_service`. Su menú se organiza en tres partes:" },
          { tabla: { cab: ["Sección", "Opciones", "Para qué sirve"], filas: [
            ["Espacio de trabajo", "Generar esquema · APIs locales · Artefactos", "Generar esquemas y ver lo que el cliente compiló y levantó."],
            ["Configuración", "Conexiones de datos · Variables de entorno · SFTP · SMB · Mensajería", "Los valores con los que corren las APIs que prueba el cliente."],
            ["Herramientas", "Validación y protección", "Firma de PDF, Base64 y cifrado AES. Ver [PDF, firma digital y cifrado](/generate-service/guia/pdf-firma-cifrado/)."],
          ] } },
          { nota: "Toda esta configuración vive en tu red: no viaja a la plataforma.", tipo: "ok" },
        ],
      },
      {
        titulo: "Conexiones de datos",
        bloques: [
          { p: "Una conexión por motor (Oracle, PostgreSQL, MySQL, MariaDB y SQL Server) con host, puerto, servicio o base, usuario y contraseña. Marca **Activo** en la que quieras usar: el cliente la inyecta en las APIs que levanta en modo Test." },
          { p: "La segunda tabla, **Parámetros de conexión para Quartz**, es la base donde los schedulers Quartz guardan el estado de sus tareas para funcionar en clúster." },
          { img: "/images/guia/client-conf-db.webp", alt: "Conexiones de datos del cliente local y conexiones para Quartz" },
        ],
      },
      {
        titulo: "SFTP, SMB y mensajería",
        bloques: [
          { p: "Cada pantalla lista las variables que usan las APIs de esa tecnología, con su descripción. Ajusta el valor, marca **Active** y pulsa **Guardar**: las variables activas se aplican a las APIs que el cliente levanta en modo Test." },
          { tabla: { cab: ["Pantalla", "Ejemplos de variables"], filas: [
            ["SFTP", "`SFTP_HOST`, `SFTP_PORT`, `SFTP_KEY` (clave RSA en Base64), `SFTP_REMOTE_PATH`, carpetas de procesados y fallidos, Redis para evitar duplicados con varias réplicas"],
            ["SMB", "`SMB_HOST`, `SMB_PORT`, `SMB_DOMAIN`, `FILE_DIRECTORY_BASE`, `LOCAL_PATH` (salida de PDF, TXT, CSV, HTML…), `PDF_TEMPLATE_PATH`"],
            ["Mensajería", "RabbitMQ (`AMQP_*`), ActiveMQ (`ACMQ_*`) y Kafka (`KAFKA_*`)"],
          ] } },
          { img: "/images/guia/client-conf-env-sftp.webp", alt: "Variables de SFTP en el cliente local" },
          { img: "/images/guia/client-conf-env-smb.webp", alt: "Variables de SMB en el cliente local" },
          { img: "/images/guia/client-conf-env-messages.webp", alt: "Variables de mensajería: RabbitMQ, ActiveMQ y Kafka" },
        ],
      },
      {
        titulo: "APIs locales y artefactos",
        bloques: [
          { p: "**APIs locales** lista las APIs que el cliente levantó, con su tipo y el enlace para abrirlas (Swagger, GraphQL…)." },
          { img: "/images/guia/client-list-apis.webp", alt: "APIs locales en ejecución" },
          { p: "**Artefactos** guarda los binarios que el cliente compiló (modo Build), listos para descargar." },
          { nota: "**Eliminar es definitivo.** En APIs locales, detiene y borra el contenedor de la API, su proyecto en disco (con su `docker-compose.yml` y su configuración en el proxy del cliente) y el registro de la lista. En Artefactos, borra el archivo del disco. Para volver a tenerlos, genera de nuevo desde la plataforma.", tipo: "aviso" },
          { img: "/images/guia/client-list-binary.webp", alt: "Artefactos compilados por el cliente" },
        ],
      },
    ],
  },
  {
    slug: "pdf-firma-cifrado",
    grupo: "cliente",
    titulo: "PDF, firma digital y cifrado",
    resumen: "Documentos PDF desde plantillas, firma opcional y datos sensibles cifrados con AES.",
    secciones: [
      {
        titulo: "Documentos PDF desde plantillas",
        bloques: [
          { p: "Cuando eliges enviar el resultado de un endpoint como archivo —a un servidor **SFTP**, a una carpeta **SMB** o por **correo**—, la API puede generar un **PDF**. Generate Service entrega una **plantilla FreeMarker** (`.ftl`) armada a partir del contrato de salida del endpoint; tú la personalizas con tu diseño. La carpeta de plantillas se define con `PDF_TEMPLATE_PATH`." },
        ],
      },
      {
        titulo: "Firma digital (opcional)",
        bloques: [
          { p: "Si necesitas PDF firmados, la API los firma con tu certificado. Necesitas tu **keystore** (JKS o PKCS12) y la **cadena de certificados**, convertidos a **Base64**, que es como los lee la API:" },
          { tabla: { cab: ["Variable", "Contenido"], filas: [
            ["`PDF_SIGN_PFX`", "Llave privada (desde tu keystore), en Base64"],
            ["`PDF_SIGN_PFX_PASSWORD`", "Contraseña de la llave"],
            ["`PDF_SIGN_CERT`", "Certificados, en Base64"],
            ["`PDF_SIGN_AREA`", "Zona de la página donde se dibuja la firma"],
            ["`PDF_SIGN_URL_TSA`, `PDF_SIGN_USER_TSA`, `PDF_SIGN_PASSW_TSA`", "Opcional: servidor de sello de tiempo (TSA)"],
          ] } },
          { p: "En el cliente, **Herramientas → Validación y protección** te ayuda a preparar y comprobar todo esto en tu máquina:" },
          { pasos: [
            { titulo: "Prepara el certificado", texto: "En **Preparar certificado PEM** seleccionas tu keystore, escribes la contraseña, el alias y el tipo (JKS o PKCS12), y pulsas **Generar PEM**. Marca **Encriptar** si vas a guardar el valor cifrado en base de datos." },
            { titulo: "Convierte a Base64", texto: "En **Transformación de datos** codificas o decodificas valores en Base64." },
            { titulo: "Valida el PDF firmado", texto: "En **Validar firma de PDF** subes un PDF generado por tu API y los certificados en Base64: el cliente confirma si la firma es válida." },
          ] },
          { img: "/images/guia/client-valid-sign-pdf.webp", alt: "Validar firma de PDF y preparar certificado PEM" },
          { img: "/images/guia/client-valid-sign-pdf2.webp", alt: "Transformación de datos en Base64" },
        ],
      },
      {
        titulo: "Datos sensibles en base de datos: cifrado AES",
        bloques: [
          { p: "Además de las variables de entorno, cada envío puede tomar su configuración desde **tu base de datos**: por ejemplo, las credenciales del servidor SFTP o SMB de destino, o el certificado para firmar ese documento. Así cada registro puede ir a un destino distinto." },
          { p: "Esos valores sensibles deben guardarse **cifrados con AES**. La API generada los descifra con la clave `AES_SECRET`." },
          { p: "Con **Comprobar cifrado AES** cifras un valor con tu clave y verificas que se descifra correctamente. Usa el **mismo algoritmo que la API generada**, así lo que guardes en tu base será compatible." },
          { img: "/images/guia/client-valid-sign-pdf3.webp", alt: "Comprobar cifrado AES: cifrar y descifrar" },
          { nota: "Guarda la clave `AES_SECRET` como un secreto de tu infraestructura y usa la misma en la API y en la herramienta. Sin la clave correcta, la API no puede leer los valores cifrados.", tipo: "aviso" },
        ],
      },
    ],
  },
  {
    slug: "variables-de-entorno",
    grupo: "config",
    titulo: "Variables de entorno",
    resumen: "Define una vez los valores de configuración y aplícalos en cada proyecto generado.",
    secciones: [
      {
        bloques: [
          { p: "Los proyectos generados leen su configuración (conexiones, puertos, colas, rutas) desde variables de entorno. En menú lateral → **Configuraciones** → **Environment** defines tus valores **una sola vez**, y Generate Service los aplica en cada proyecto que generas." },
          { p: "Para eso existe esta pantalla: si conoces las [reglas de las variables](/generate-service/guia/reglas-variables/), puedes agregar las que quieras **antes de generar** —incluidas las dinámicas por método, como `API_REST_ENDPOINT_GSSPDELETEPERSONA`— con el valor que prefieras. **Tu valor reemplaza al que trae el proyecto por defecto y es el que prevalece.**" },
          { tabla: { cab: ["Campo", "Descripción"], filas: [
            ["Nombre", "Nombre de la variable, por ejemplo `DB_MARIADB_HOST`."],
            ["Valor", "El valor que quieres usar."],
            ["Descripción", "Para qué sirve, como referencia."],
            ["**Activo**", "Escribe el valor en el archivo `.env` del proyecto generado."],
            ["**Propiedad activa**", "Usa el valor como predeterminado dentro de `application.properties`."],
          ] } },
          { img: "/images/guia/variables-entorno.webp", alt: "Variables de entorno con las columnas Activo y Propiedad activa" },
        ],
      },
      {
        titulo: "Cuándo conviene usarlas",
        bloques: [
          { lista: [
            "Para que tus APIs salgan ya apuntando a tu base de **desarrollo** o de **pruebas**.",
            "Para no repetir puertos, colas o rutas SFTP en cada generación.",
            "Para que tu pipeline de CI/CD reciba los valores correctos desde el primer despliegue.",
          ] },
          { img: "/images/client/ConfigEnviromentIn Clinet.png", alt: "Variables de entorno de una API en el cliente local" },
          { nota: "Las contraseñas y secretos se manejan en tu infraestructura. En el flujo de CI/CD de ejemplo, los secretos se cifran en el repositorio de manifiestos.", tipo: "aviso" },
        ],
      },
      {
        titulo: "Plataforma o cliente local: ¿dónde las defino?",
        bloques: [
          { tabla: { cab: ["", "Environment en la plataforma", "Variables en el cliente local"], filas: [
            ["Dónde se aplican", "**En todo lo que generas**: código fuente, binario, pruebas y **CI/CD** (tu pipeline las recibe desde el primer despliegue)", "Solo en las **pruebas locales** (modo Test) que corren en tu máquina"],
            ["Cuándo usarlas", "Para dejar tus APIs configuradas a tu medida desde el origen", "Para probar con valores de tu red sin cambiar lo que entregas"],
          ] } },
        ],
      },
    ],
  },
  {
    slug: "ci-cd",
    grupo: "config",
    titulo: "CI/CD: despliegue automático",
    resumen: "Conecta Generate Service con tu pipeline y despliega en Kubernetes.",
    secciones: [
      {
        bloques: [
          { p: "Con una integración de CI/CD, la plataforma envía el proyecto generado a tu pipeline (GitLab CI, Jenkins, Azure DevOps…), que lo compila y lo despliega. Tu equipo decide la estrategia de despliegue; Generate Service se integra con ella." },
          { flujo: ["Generate Service", "Tu pipeline compila", "Registro de imágenes", "GitOps (ArgoCD)", "Kubernetes"] },
        ],
      },
      {
        titulo: "1. Registra tu pipeline",
        bloques: [
          { p: "Menú lateral → **Configuraciones** → **CI/CD**:" },
          { tabla: { cab: ["Campo", "Descripción"], filas: [
            ["Nombre", "Un nombre para la integración."],
            ["URL y método", "El endpoint que dispara tu pipeline (por ejemplo, el *trigger* de GitLab)."],
            ["Token", "Nombre y valor del token de tu proveedor de CI/CD."],
            ["Tipo de servicio", "Servidor destino: embebido, Tomcat, WildFly o WebLogic."],
            ["Parámetros", "Variables adicionales que tu pipeline espera."],
            ["Webhook (opcional)", "Si tu CI/CD es interno, el cliente local hace de puente."],
          ] } },
          { img: "/images/ci-cd/ConsifigCI-CD.png", alt: "Configuración de la integración de CI/CD" },
        ],
      },
      {
        titulo: "Pipeline público o interno",
        bloques: [
          { tabla: { cab: ["", "Sin webhook", "Con webhook"], filas: [
            ["Quién dispara tu pipeline", "El **servidor de Generate Service**.", "Tu **cliente local**, que recibe el proyecto y llama al pipeline."],
            ["Requisito", "La URL de tu pipeline debe ser accesible desde internet.", "El pipeline solo necesita ser accesible desde tu cliente."],
            ["Ideal para", "GitLab, Jenkins o Azure DevOps en la nube.", "CI/CD interno de tu empresa, sin abrirlo a internet."],
          ] } },
          { p: "Con un webhook **local**, el recorrido es:" },
          { flujo: ["Servidor de Generate Service", "Tu navegador (plataforma)", "Cliente local", "Tu pipeline"] },
          { p: "Con un webhook **público**, el servidor de Generate Service llama directamente a tu cliente, y el cliente llama a tu pipeline. Las reglas de URL son las mismas que en [Local o público](/generate-service/guia/cliente-local/)." },
        ],
      },
      {
        titulo: "2. Prepara tu proveedor",
        bloques: [
          { p: "En GitLab, por ejemplo, creas un *pipeline trigger* y usas una plantilla de pipeline que descarga el proyecto, lo compila y publica la imagen." },
          { img: "/images/ci-cd/gitlap-triger.png", alt: "Trigger de pipeline en GitLab" },
          { img: "/images/ci-cd/RepoApiPipeline.png", alt: "Repositorio con la plantilla de pipeline" },
        ],
      },
      {
        titulo: "3. Genera y despliega",
        bloques: [
          { p: "Al generar, elige el modo **DEVOPS** (despliegue), **DEVOPS_SRC** (enviar el código a tu pipeline) o **DEVOPS_TEST** (despliegue temporal para pruebas)." },
          { img: "/images/ci-cd/GenerateApiAndSendCI-CD.png", alt: "Generar una API y enviarla al CI/CD" },
          { img: "/images/ci-cd/FinshPipeline.png", alt: "Pipeline terminado con todos los pasos en verde" },
          { p: "En el flujo de ejemplo, los secretos se cifran en el repositorio de manifiestos y **ArgoCD** sincroniza y despliega en Kubernetes." },
          { img: "/images/ci-cd/encriptEnviromnetforSeccrets.png", alt: "Secretos cifrados en el repositorio de manifiestos" },
          { img: "/images/ci-cd/ArgocdDeployd.png", alt: "Aplicación desplegada y sincronizada en ArgoCD" },
          { nota: "Lince Technology puede acompañarte con plantillas de pipeline e integración si lo necesitas.", tipo: "info" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ CONCEPTOS
  {
    slug: "tecnologias",
    grupo: "conceptos",
    titulo: "Tecnologías disponibles",
    resumen: "Cómo exponer, de dónde leer y a dónde enviar.",
    secciones: [
      {
        titulo: "Exposición: cómo se consume tu API",
        bloques: [
          { tabla: { cab: ["Módulo", "Tecnologías", "Dónde está"], filas: [
            ["APIs", "REST, GraphQL, WebSocket (STOMP), gRPC, SOAP", "Menú superior"],
            ["Mensajería", "RabbitMQ, ActiveMQ, Kafka, JMS WebLogic, JMS WildFly", "Menú lateral → Servicios → Messaging Listener"],
            ["Archivos", "Carpeta local, SFTP, SMB", "Menú lateral → Servicios"],
            ["Programación", "Jobs de Spring, Quartz (cluster)", "Menú lateral → Servicios"],
            ["Multi Tech", "Varias tecnologías y orquestación en un proyecto", "Menú superior"],
          ] } },
        ],
      },
      {
        titulo: "Origen: de dónde sale la información",
        bloques: [
          { p: "Además de bases de datos (Oracle, SQL Server, PostgreSQL, MySQL y MariaDB), un endpoint puede llamar a otros servicios **REST, SOAP, GraphQL o gRPC**." },
        ],
      },
      {
        titulo: "Envío: qué pasa al terminar",
        bloques: [
          { p: "Al terminar, el resultado puede enviarse a otra API, a una cola, a un archivo o por **correo**. Así encadenas procesos sin escribir el código de integración." },
        ],
      },
      {
        titulo: "Multi Tech y orquestación",
        bloques: [
          { p: "**Multi Tech** es el único módulo que combina tecnologías en un mismo proyecto y orquesta pasos internos: en secuencia (un paso detrás de otro) o en paralelo, reuniendo los resultados." },
          { nota: "En un mismo proyecto, REST, GraphQL y WebSocket no se combinan con SOAP o gRPC.", tipo: "aviso" },
        ],
      },
    ],
  },
  {
    slug: "modos-de-generacion",
    grupo: "conceptos",
    titulo: "Modos de generación",
    resumen: "Código fuente, binario, prueba local, esquemas o CI/CD.",
    secciones: [
      {
        bloques: [
          { p: "El modo de generación define **cómo recibes** el proyecto. Los endpoints son los mismos en todos los modos." },
          { tabla: { cab: ["Modo", "Qué hace", "Requisitos"], filas: [
            ["**Src**", "Descarga el proyecto Maven completo para extenderlo con tu lógica.", "—"],
            ["**Build**", "Descarga el JAR con Dockerfile, docker-compose, `.env` y scripts `RunJar` / `RunDocker`.", "—"],
            ["**Test**", "Envía el proyecto a tu cliente local, que lo compila y lo levanta para probarlo.", "Cliente local con webhook"],
            ["**Schema**", "Descarga solo los esquemas: JSON (REST), XSD (SOAP), PROTO (gRPC) o SDL (GraphQL).", "—"],
            ["**devops**", "Envía el proyecto a tu pipeline para desplegarlo.", "Integración CI/CD"],
            ["**devops_src**", "Envía el código fuente a tu pipeline.", "Integración CI/CD"],
            ["**devops_test**", "Despliegue temporal para pruebas a través de tu pipeline.", "Integración CI/CD"],
          ] } },
        ],
      },
      {
        titulo: "Esquemas: contratos reutilizables",
        bloques: [
          { p: "Con **Schema** descargas un `.zip` con los esquemas de los endpoints seleccionados. Puedes adjuntarlos después como origen **API_SOURCE** para generar nuevos servicios sin volver a conectarte a la base." },
          { img: "/images/guia/generate-schema.webp", alt: "Modo Schema: descarga de los esquemas del proyecto" },
        ],
      },
      {
        titulo: "Código fuente: tuyo para extender",
        bloques: [
          { img: "/images/src/DownLoadSourceCode.png", alt: "Descarga del código fuente" },
          { img: "/images/src/EdirSourceCode.png", alt: "Código fuente abierto en el editor" },
          { img: "/images/src/CompileSorceCode.png", alt: "Compilación del código fuente" },
        ],
      },
      {
        titulo: "Binario: listo para ejecutar",
        bloques: [
          { img: "/images/build/GenerateApiBinaryOptionBuild.png", alt: "Opción BUILD al generar" },
          { img: "/images/build/EstructruaArtefactJar.png", alt: "Estructura del artefacto generado" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ OPERACIÓN
  {
    slug: "creditos-y-planes",
    grupo: "operacion",
    titulo: "Créditos y planes",
    resumen: "Cómo se calcula el consumo, qué define el plan, cómo comprar y la factura.",
    secciones: [
      {
        titulo: "Cómo se consumen los créditos",
        bloques: [
          { lista: [
            "Cada **endpoint** consume los créditos de su tecnología. Una API con varios endpoints suma los créditos de cada uno.",
            "Al pedir el **código fuente (Src)** se suman los créditos de Src **una sola vez por API**, para todos sus endpoints.",
            "Las **pruebas (Test)** tienen un costo fijo que incluye varias ejecuciones de prueba según tu plan; se descuentan a medida que las usas.",
            "Los **esquemas** y las ejecuciones de **CI/CD** también tienen su propio costo, indicado en la tabla.",
            "Los créditos **se mantienen en tu cuenta** hasta que los uses.",
          ] },
          { p: "La tabla completa de créditos por tecnología está en la página **Plans**:" },
          { img: "/images/guia/plans2.webp", alt: "Créditos requeridos por tecnología y endpoint" },
          { p: "Antes de generar, pasa el mouse sobre el botón **generate Api**: verás la tecnología, los endpoints y los créditos que consumirá esa generación." },
          { img: "/images/guia/tooltips-credits-consume.webp", alt: "Resumen de créditos antes de generar una prueba" },
        ],
      },
      {
        titulo: "Qué define el plan",
        bloques: [
          { p: "El plan define **cuánto tiempo funciona cada API** que generas, contado desde el día en que la generas: 3, 6, 9 o 12 meses, o permanente. Los planes más largos incluyen un descuento por crédito. Te avisamos antes de que termine la vigencia, para que la generes de nuevo o pases al plan permanente." },
          { nota: "Los precios vigentes se muestran en la página **Plans** de la plataforma. En las imágenes de esta guía están ocultos.", tipo: "info" },
        ],
      },
      {
        titulo: "Comprar créditos",
        bloques: [
          { pasos: [
            { titulo: "Cotiza", texto: "Menú superior → **Plans**. Elige el plan y la cantidad de créditos y pulsa **Calculate quote**: verás el detalle, el ITBMS (7 %, solo para compras desde Panamá) y hasta cuándo funcionarán tus APIs.", img: "/images/guia/plans.webp" },
            { titulo: "Paga con PayPal", texto: "Con tu cuenta de PayPal o con **tarjeta de débito o crédito**, sin salir de la plataforma.", img: "/images/guia/paypal.webp" },
            { titulo: "Créditos cargados", texto: "Al confirmarse el pago, los créditos se cargan en tu cuenta y recibes la confirmación.", img: "/images/guia/paypal-recive.webp" },
            { titulo: "Tu factura", texto: "La plataforma te avisa cuando tu factura está lista, con el enlace para verla y descargarla.", img: "/images/guia/paypal-invoice.webp" },
          ] },
          { p: "La factura incluye el detalle de la compra y el ITBMS:" },
          { img: "/images/guia/paypal-factura.webp", alt: "Factura de la compra de créditos (datos personales y montos ocultos)" },
          { nota: "¿Tu empresa necesita un paquete corporativo con orden de compra y factura? Escríbenos desde la página Plans y lo diseñamos a tu medida.", tipo: "info" },
        ],
      },
      {
        titulo: "Consultar tu saldo",
        bloques: [
          { p: "Menú lateral → **Administración** → **Créditos**: el total comprado, lo disponible, lo usado en pruebas, en esquemas y en CI/CD, y la vigencia de las APIs de tu plan." },
          { img: "/images/guia/creditos-saldo.webp", alt: "Saldo de créditos y consumo por tipo" },
        ],
      },
    ],
  },
  {
    slug: "eventos-y-reintentos",
    grupo: "operacion",
    titulo: "Eventos y reintentos",
    resumen: "El historial de tus generaciones y cómo recuperar una descarga.",
    secciones: [
      {
        titulo: "Eventos: tu historial",
        bloques: [
          { p: "Menú lateral → **Administración** → **Eventos**. Cada generación del mes queda registrada con el nombre del proyecto, el origen, el tipo de evento (`GENERATE_TEST`, `GENERATE_SCHEMA`, `GENERATE_SOURCE`…), el tipo de API, el tipo de contenedor, la fecha y la cantidad de recursos publicados." },
          { p: "Arriba verás los totales del mes: recursos en código fuente, en binario, en esquemas, en CI/CD y en pruebas. Puedes buscar y cambiar de mes." },
          { img: "/images/guia/eventos.webp", alt: "Eventos del mes con totales por tipo" },
        ],
      },
      {
        titulo: "Operaciones generadas: volver a procesar",
        bloques: [
          { p: "Menú lateral → **Administración** → **Operaciones generadas** muestra cada transacción con su webhook, el evento, la fecha y cuántas veces se reintentó. Si una descarga o un envío a tu cliente se interrumpe, pulsa **process** para volver a procesarla, **sin consumir créditos** adicionales." },
          { nota: "Cada operación admite hasta 4 reintentos.", tipo: "info" },
          { img: "/images/guia/operaciones-reintentar.webp", alt: "Operaciones generadas con el contador de reintentos y el botón process" },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ REGLAS
  {
    slug: "reglas-nombres",
    grupo: "reglas",
    titulo: "Nombres: proyecto, clases, métodos y endpoints",
    resumen: "Cómo se transforman los nombres de tu base de datos en el código y las rutas de tu API.",
    secciones: [
      {
        titulo: "Nombre del proyecto y dominio",
        bloques: [
          { lista: [
            "Usan solo **letras, números, puntos y guiones bajos**, sin espacios.",
            "No empiezan ni terminan con punto o guion bajo, y no repiten dos seguidos.",
            "El **nombre del proyecto** se usa para la carpeta, el JAR, la imagen y el contenedor Docker, y la carpeta de plantillas.",
            "El **dominio** es el paquete base de las clases Java, por ejemplo `com.empresa.ventas`.",
          ] },
          { tabla: { cab: ["Servidor de aplicaciones", "Ruta base de la API"], filas: [
            ["EMBEDDED (Docker / Kubernetes)", "La raíz: `/`"],
            ["Tomcat, WildFly o WebLogic", "`/<nombre-del-proyecto>`"],
          ] } },
        ],
      },
      {
        titulo: "De la base de datos al código",
        bloques: [
          { p: "Cada procedimiento, función o query se convierte en una **clase** y un **método**. La regla:" },
          { lista: [
            "Se separa el nombre por guiones bajos; cada palabra empieza con mayúscula y sigue en minúsculas.",
            "La **clase** empieza con mayúscula (PascalCase) y el **método** con minúscula (camelCase).",
            "Si el nombre ya viene en camelCase o PascalCase, se respeta.",
            "Se ignoran los guiones bajos al inicio y al final.",
          ] },
          { tabla: { cab: ["En la base de datos", "Clase", "Método", "Endpoint REST"], filas: [
            ["`GS_SP_DELETE_PERSONA`", "`GsSpDeletePersona`", "`gsSpDeletePersona`", "`/api/gsSpDeletePersona`"],
            ["`gs_fn_count_personas`", "`GsFnCountPersonas`", "`gsFnCountPersonas`", "`/api/gsFnCountPersonas`"],
            ["`getPersonaById`", "`GetPersonaById`", "`getPersonaById`", "`/api/getPersonaById`"],
          ] } },
          { p: "Los parámetros y columnas siguen la misma regla en camelCase: `P_ID_PERSONA` → `pIdPersona`." },
          { nota: "**Recomendación:** nombra procedimientos, funciones, parámetros y columnas en **snake_case** (`GS_SP_DELETE_PERSONA`, `P_ID_PERSONA`). Así los nombres de clases, métodos, endpoints y variables salen limpios y predecibles.", tipo: "ok" },
        ],
      },
      {
        titulo: "Forma de los endpoints REST",
        bloques: [
          { lista: [
            "Todos los endpoints REST usan el método **POST**.",
            "Reciben un cuerpo **Request** solo si el procedimiento tiene parámetros de entrada.",
            "Devuelven un cuerpo **Response** solo si el procedimiento tiene salida (parámetros de salida, cursores o valor de retorno).",
          ] },
          { p: "Las fechas siguen un formato estándar en todas las APIs generadas:" },
          { tabla: { cab: ["Tipo en la base", "Formato"], filas: [
            ["Fecha (`DATE`)", "`yyyy-MM-dd`"],
            ["Fecha y hora (`TIMESTAMP`)", "`yyyy-MM-dd HH:mm:ss`"],
          ] } },
        ],
      },
      {
        titulo: "Cambiar la ruta de un endpoint",
        bloques: [
          { p: "La ruta de cada endpoint REST se puede cambiar sin tocar el código, con una variable de entorno armada con el nombre del método **en mayúsculas**:" },
          { codigo: "API_REST_ENDPOINT_GSSPDELETEPERSONA=/personas/eliminar" },
          { p: "Las demás variables por método siguen el mismo patrón: ver [Variables de entorno](/generate-service/guia/reglas-variables/)." },
        ],
      },
    ],
  },
  {
    slug: "reglas-variables",
    grupo: "reglas",
    titulo: "Variables de entorno: fijas y dinámicas",
    resumen: "Cómo se llaman las variables de tu API y cómo se arman las que dependen de cada método.",
    secciones: [
      {
        bloques: [
          { p: "En las APIs generadas **todo está parametrizado**: rutas, colas, servidores, formatos y opciones se cambian con **variables de entorno**, sin recompilar, para ajustarlas a tu gusto. Hay dos tipos:" },
          { tabla: { cab: ["Tipo", "Cómo se llaman", "Ejemplos"], filas: [
            ["**Fijas**", "Un nombre único para toda la API", "`AES_SECRET`, `PDF_SIGN_CERT`, `SPRINGDOC_UI_ENABLED`, `PORT`"],
            ["**Dinámicas**", "Incluyen el nombre del método **en mayúsculas**", "`RABBIT_QUEUE_GSSPDELETEPERSONA`, `CRON_GSFNCOUNTPERSONAS_EXPRESSION`"],
          ] } },
          { p: "Para armar una variable dinámica, toma el nombre del método (por ejemplo `gsSpDeletePersona`), pásalo a mayúsculas (`GSSPDELETEPERSONA`) y reemplázalo en el patrón `[NAME_METHOD_TO_UPPERCASE]`." },
          { nota: "**Para qué te sirven estas reglas:** con ellas puedes predefinir cualquier variable en **Environment** (menú lateral → Configuraciones) **antes de generar**, con el valor que quieras. Ese valor reemplaza al que trae el proyecto por defecto y llega a todo lo que generas, incluido tu pipeline de CI/CD. Ver [Variables de entorno](/generate-service/guia/variables-de-entorno/).", tipo: "ok" },
        ],
      },
      {
        titulo: "Variables dinámicas más usadas",
        bloques: [
          { tabla: { cab: ["Para", "Patrón"], filas: [
            ["Ruta de un endpoint REST", "`API_REST_ENDPOINT_[MÉTODO]`"],
            ["Destino WebSocket", "`API_WEBSOCKET_DESTINATION_[MÉTODO]`"],
            ["Colas y topics que escucha", "`RABBIT_QUEUE_[MÉTODO]`, `KAFKA_TOPIC_[MÉTODO]`, `JMS_QUEUE_[MÉTODO]`"],
            ["Rutas de archivos que escucha", "`FILE_REMOTE_PATH_METHOD_[MÉTODO]`, `SFTP_REMOTE_PATH_METHOD_[MÉTODO]`, `SMB_REMOTE_PATH_METHOD_[MÉTODO]`"],
            ["Programación de tareas", "`CRON_[MÉTODO]_EXPRESSION`, `JOB_[MÉTODO]_LOCK_AT_MOST_FOR`"],
            ["Servicio externo que consume", "`API_[MÉTODO]_URL`, `GRAPHQL_[MÉTODO]_URL`, `SOAP_[MÉTODO]_URL`, `GRPC_[MÉTODO]_TARGET` y su `_AUTH`"],
            ["A dónde envía el resultado", "`[MÉTODO]_SEND_REST`, `[MÉTODO]_SEND_QUEUE`, `[MÉTODO]_SEND_SOAP`, `[MÉTODO]_SEND_GRAPHQL`"],
            ["Envío de archivos", "`SFTP_[MÉTODO]_SENDER_HOST`, `SMB_[MÉTODO]_SENDER_HOST` (y puerto, usuario, contraseña)"],
            ["Caché de la respuesta", "`CACHE_[MÉTODO]_ENABLED`"],
            ["Cabeceras HTTP", "`HEADER_[PARÁMETRO]`"],
          ] } },
        ],
      },
      {
        titulo: "Archivos: rutas, formatos y fechas",
        bloques: [
          { tabla: { cab: ["Qué", "Variable", "Por defecto"], filas: [
            ["Carpeta remota que escucha un listener SFTP", "`SFTP_REMOTE_PATH_METHOD_[MÉTODO]`", "El nombre del método (sale de tu esquema de base de datos o de la API)"],
            ["Separador de los archivos CSV", "`FILE_CSV_DELIMITER`", "Coma (`,`)"],
            ["Nodo raíz de los archivos XML", "`FILE_ROOT_NODE_[MÉTODO]`", "El nombre del DTO de entrada, por ejemplo `GsSpDeletePersonaRequest`"],
            ["Fecha agregada al nombre de los archivos enviados", "`LOCAL_DATE_FORMAT`", "`yyyy-MM-dd-HH.mm.ss`"],
            ["Zona horaria de esa fecha", "`LOCAL_TIME_ZONE`", "`America/Panama`"],
          ] } },
        ],
      },
    ],
  },
  {
    slug: "reglas-activar",
    grupo: "reglas",
    titulo: "Qué viene desactivado y cómo activarlo",
    resumen: "Swagger, consolas de prueba, observabilidad y caché: apagados por seguridad, a un clic de activarse.",
    secciones: [
      {
        bloques: [
          { p: "Por seguridad, la API generada sale a producción **con lo mínimo expuesto**. Las herramientas de documentación, prueba y monitoreo vienen apagadas, y las activas con una variable cuando las necesitas:" },
          { tabla: { cab: ["Herramienta", "Variable", "Por defecto"], filas: [
            ["Swagger UI", "`SPRINGDOC_UI_ENABLED`", "`false`"],
            ["Documentación OpenAPI", "`SPRINGDOC_ENABLED`", "`false`"],
            ["Consola de GraphQL", "`GRAPHQL_SPQR_GUI_ENABLED`", "`false`"],
            ["Interfaz de prueba de WebSocket", "`TEST_WEBSOCKET_UI_ENABLED`", "`false`"],
            ["Endpoints de Actuator", "`ACTUATOR_ENDPOINTS_ENABLED_BY_DEFAULT`", "`false`"],
            ["Métricas Prometheus", "`PROMETHEUS_ENDPOINTS_ENABLE`", "`false`"],
            ["Caché por método", "`CACHE_[MÉTODO]_ENABLED`", "`false`"],
          ] } },
          { nota: "En el modo **Test**, el cliente local activa Swagger, la consola de GraphQL y la interfaz de WebSocket automáticamente para que pruebes tu API.", tipo: "info" },
          { p: "Para un ambiente de desarrollo, actívalas desde **Environment** en la plataforma; para producción, actívalas solo si las necesitas y protégelas con tu proxy o API Gateway." },
        ],
      },
    ],
  },
  {
    slug: "reglas-configuracion",
    grupo: "reglas",
    titulo: "Configuración por variable o por base de datos",
    resumen: "Valores generales en variables de entorno; valores por registro desde tu base, con datos sensibles cifrados.",
    secciones: [
      {
        bloques: [
          { p: "Los envíos de archivos (SFTP, SMB, correo) y los PDF se pueden configurar de dos formas:" },
          { tabla: { cab: ["", "Variables de entorno", "Base de datos"], filas: [
            ["Alcance", "Un valor general para toda la API", "Un valor por registro: cada envío puede ir a un destino distinto"],
            ["Dónde se define", "`.env`, Kubernetes o **Environment** en la plataforma", "El procedimiento devuelve un JSON o tipo con la configuración del envío"],
            ["Datos sensibles", "Como secretos de tu infraestructura", "**Cifrados con AES**; la API los descifra con `AES_SECRET`"],
          ] } },
          { p: "Si un registro trae su propia configuración, esa tiene prioridad; si no, la API usa la de las variables de entorno." },
          { nota: "Los nombres de los campos que lee la API son **fijos**, por ejemplo `senderSftp`, `senderSmb`, `fileName` o `signPv`. El formato detallado de cada uno se documentará en esta sección.", tipo: "aviso" },
          { p: "Para cifrar y comprobar los valores, usa la herramienta del cliente local: ver [PDF, firma digital y cifrado](/generate-service/guia/pdf-firma-cifrado/)." },
        ],
      },
      {
        titulo: "Plantillas de PDF",
        bloques: [
          { lista: [
            "Generate Service entrega **una plantilla FreeMarker por método**, en `templates/<nombreDelMétodo>.ftl`, armada con el contrato de salida.",
            "Es una **plantilla base**: modifícala con tu diseño, tus estilos y tu logo.",
            "La carpeta de plantillas se define con `PDF_TEMPLATE_PATH`.",
          ] },
        ],
      },
      {
        titulo: "Firma del PDF: se activa desde la plantilla",
        bloques: [
          { p: "La firma es **opcional** y se activa en la propia plantilla, con etiquetas `<meta sign>`. La plantilla base ya las trae **comentadas**: para firmar, quita el comentario y escribe tu texto. Cada etiqueta es una línea del recuadro visible de la firma:" },
          { codigo: "<!-- habilita la propiedad meta sign para firmas digitales -->\n<meta sign=\"Firmado digitalmente por: Nombre de la Firma\">\n<meta sign=\"Cédula: Firmante\">\n<meta sign=\"Fecha: ${fecha}\">" },
          { lista: [
            "**Sin etiquetas `sign`**, el PDF se genera sin firma.",
            "**Con al menos una**, la API firma el documento con el certificado configurado (`PDF_SIGN_*` o los datos de la base) y, si definiste un TSA, le agrega sello de tiempo.",
            "La posición del recuadro se define con `PDF_SIGN_AREA` (x, y, ancho, alto). Por defecto: `50,80,300,80`.",
          ] },
          { p: "Con etiquetas `<meta name=\"…\" content=\"…\">` agregas **propiedades al documento** (autor, creador o datos propios como canal o identificación), que quedan guardadas en los metadatos del PDF. La plantilla base también trae ejemplos comentados." },
        ],
      },
    ],
  },
  {
    slug: "reglas-modulos",
    grupo: "reglas",
    titulo: "Bases de datos y tareas programadas",
    resumen: "Un motor de base de datos por proyecto y dos formas de programar tareas: instancia única o varias réplicas.",
    secciones: [
      {
        titulo: "Un motor de base de datos por proyecto",
        bloques: [
          { lista: [
            "En los módulos REST, GraphQL, WebSocket, gRPC, SOAP, mensajería, archivos y schedulers, cada proyecto trabaja con **un solo motor** de base de datos.",
            "**Multi Tech** permite combinar **varios motores** en el mismo proyecto.",
          ] },
        ],
      },
      {
        titulo: "Tareas programadas: dos opciones",
        bloques: [
          { p: "Cada tarea tiene su propio disparador con una **expresión cron**, que cambias con `CRON_[MÉTODO]_EXPRESSION` (por defecto, cada minuto: `0 0/1 * ? * *`). Si el método necesita datos de entrada, se los das en Base64 con `JSON_[MÉTODO]_REQUEST`." },
          { tabla: { cab: ["", "Jobs Scheduled (Spring)", "Quartz Scheduler"], filas: [
            ["Ideal para", "**Una sola instancia**, o varias con bloqueo", "**Varias instancias** en clúster"],
            ["Qué necesita", "Nada extra con una instancia. Con varias réplicas, activa el **escalamiento** del job: usa **Redis** para que la tarea corra en una sola réplica a la vez", "Una **base de datos fija** donde Quartz guarda el estado de sus tareas (`CRON_DB_URL`, `CRON_DB_USER_NAME`, `CRON_DB_PASSWORD`…)"],
            ["Variables propias", "`JOB_[MÉTODO]_LOCK_AT_LEAST_FOR` (50 s) y `JOB_[MÉTODO]_LOCK_AT_MOST_FOR` (5 min); `SPRING_DATA_REDIS_*`", "`CRON_DB_*`"],
          ] } },
          { nota: "En el cliente local, la base de Quartz se configura en **Conexiones de datos → Parámetros de conexión para Quartz**.", tipo: "info" },
        ],
      },
    ],
  },
  {
    slug: "reglas-integracion",
    grupo: "reglas",
    titulo: "Integrar microservicios entre sí",
    resumen: "Encadena microservicios con protocolos distintos: la transformación es transparente para ti.",
    secciones: [
      {
        bloques: [
          { p: "Un microservicio generado puede **consumir a otro** y **enviar su resultado** a un tercero, aunque cada uno hable un protocolo distinto. Generate Service se encarga de la transformación entre protocolos: tú solo eliges el origen y el destino." },
          { p: "Por ejemplo, un flujo de facturación:" },
          { flujo: ["API REST recibe el pedido", "Consulta a una API gRPC", "Envía el resultado a RabbitMQ", "Otro micro lo toma", "Genera el PDF y lo envía por correo o SFTP"] },
          { nota: "Esta integración funciona entre microservicios independientes. Para orquestar varios pasos **dentro de un mismo proyecto**, existe el módulo Multi Tech, que documentaremos en su propia sección.", tipo: "info" },
        ],
      },
      {
        titulo: "La regla de los contratos",
        bloques: [
          { p: "Cuando todas las APIs se generan con Generate Service, **la comunicación y la transformación están garantizadas**, porque todas comparten las mismas reglas de contrato." },
          { p: "Generate Service también puede consumir **APIs que no generó**, siempre que su contrato siga el estándar que espera:" },
          { tabla: { cab: ["Tecnología", "Contrato que espera"], filas: [
            ["REST", "JSON Schema del request y del response"],
            ["SOAP", "XSD con un **par de elementos por operación**: primero el request y luego el response (`<operación>Request` / `<operación>Response`, estilo document/literal)"],
            ["GraphQL", "Esquema SDL estándar"],
            ["gRPC", "Archivo Protobuf (`.proto`) estándar"],
          ] } },
          { p: "Para conocer el formato exacto, genera un esquema con el modo **Schema** desde cualquier endpoint y úsalo como referencia." },
        ],
      },
    ],
  },

  // ------------------------------------------------------------------ AYUDA
  {
    slug: "seguridad",
    grupo: "ayuda",
    titulo: "Seguridad y privacidad",
    resumen: "Qué viaja a la plataforma y qué se queda en tu red.",
    secciones: [
      {
        bloques: [
          { tabla: { cab: ["Se queda en tu red", "Viaja a la plataforma"], filas: [
            ["Tus datos y tu base de datos", "El esquema: nombres, parámetros y tipos de los objetos que eliges"],
            ["Credenciales (con el cliente local)", "Los datos del proyecto: nombre, dominio, tecnología"],
            ["Tus APIs en ejecución y su tráfico", "—"],
          ] } },
          { lista: [
            "**La plataforma genera, no ejecuta:** tus APIs corren en tu infraestructura.",
            "**El código fuente es tuyo:** puedes revisarlo, auditarlo y mantenerlo con tu equipo.",
            "**Datos personales:** se tratan conforme a la Ley 81 de 2019 de Panamá; no vendemos tus datos.",
          ] },
          { p: "Los detalles legales están en los Términos de Servicio y Licencia que aceptas al entrar a la plataforma." },
        ],
      },
    ],
  },
  {
    slug: "preguntas-frecuentes",
    grupo: "ayuda",
    titulo: "Preguntas frecuentes",
    resumen: "Respuestas rápidas a las dudas más comunes.",
    secciones: [
      {
        bloques: [
          { tabla: { cab: ["Pregunta", "Respuesta"], filas: [
            ["¿Necesito exponer mi base de datos?", "No. Con el cliente local generas el esquema dentro de tu red y solo ese archivo viaja a la plataforma."],
            ["¿Puedo modificar el código generado?", "Sí. El código fuente es tuyo para extenderlo con tu propia lógica."],
            ["¿Qué motores soporta?", "Oracle, SQL Server, PostgreSQL, MySQL y MariaDB."],
            ["¿Dónde corren mis APIs?", "En tu infraestructura: Docker, Kubernetes o tu servidor de aplicaciones (Tomcat, WildFly, WebLogic)."],
            ["¿Se pierden mis créditos?", "No. Se mantienen en tu cuenta hasta que los uses."],
            ["Se cortó una descarga, ¿pierdo los créditos?", "No. Reinténtala desde Operaciones generadas, sin costo adicional."],
            ["¿Puedo probar sin instalar nada en servidores?", "Sí. Con el proyecto generate-service-test y Docker en tu máquina."],
            ["¿Ofrecen acompañamiento?", "Sí. Lince Technology ofrece soporte, plantillas de CI/CD y acompañamiento para empresas."],
          ] } },
          { p: "¿Tienes otra pregunta? Escríbenos desde la página de [contacto](/contactos/)." },
        ],
      },
    ],
  },
];

export const capituloPorSlug = Object.fromEntries(capitulos.map((c) => [c.slug, c]));
