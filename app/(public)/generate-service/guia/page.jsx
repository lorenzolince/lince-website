export const metadata = {
  title: 'Guía visual de Generate Service',
  description: 'Guía paso a paso de todos los flujos de Generate Service: desde la generación de código fuente hasta CI/CD.',
};

export default function GenerateServiceGuidePage() {
  return (
    <div className="marketing-page generate-service-guide">
      <section className="section hero hero-guide">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Guía visual de Generate Service</h1>
            <p className="hero-subtitle">Todos los flujos paso a paso, desde generación local hasta despliegue en CI/CD.</p>
          </div>
        </div>
      </section>

      <section className="section guide-content">
        <div className="container">
          <div className="guide-toc">
            <h2>Índice de flujos</h2>
            <nav className="toc-list">
              <a href="#flujo-codigo-fuente">1. Generar código fuente desde BD local</a>
              <a href="#flujo-cicd">2. Desplegar APIs en CI/CD automático</a>
              <a href="#flujo-argocd">3. Gestionar con ArgoCD</a>
              <a href="#flujo-pruebas">4. Probar APIs en tiempo real</a>
            </nav>
          </div>

          {/* Flujo 1: Código fuente */}
          <article id="flujo-codigo-fuente" className="guide-flow">
            <h2>1. Generar código fuente desde BD local</h2>
            <p className="flow-intro">
              Este flujo muestra cómo usar el cliente local para generar esquemas de forma segura, sin exponer credenciales a la nube.
            </p>

            <div className="flow-steps-guide">
              <div className="step-guide">
                <h3>Paso 1: Descargue generate-service-client</h3>
                <p>Acceda a https://generate-service.com/ y descargue el cliente local. Incluye Docker Compose y la interfaz web preconfigurada.</p>
                <img alt="Descarga del cliente local" src="/images/generate-service/run-client-generate-service.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 2: Configure su base de datos local</h3>
                <p>Indique la conexión a su base de datos (Oracle, SQL Server, PostgreSQL, MySQL, MariaDB) en la interfaz del cliente.</p>
                <img alt="Configuración de conexión" src="/images/generate-service/config-connection-local-database.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 3: Genere el esquema</h3>
                <p>Seleccione los procedimientos, funciones y queries que desea exponer. El cliente genera el esquema localmente.</p>
                <img alt="Generación de esquema" src="/images/generate-service/generate-schema-local.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 4: Compile y descargue</h3>
                <p>El cliente compila el microservicio Spring Boot y lo entrega como JAR, Dockerfile y código fuente listo para adaptar.</p>
                <img alt="Compilación del artefacto" src="/images/generate-service/test-build-jar.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 5: Pruebe localmente</h3>
                <p>Levante la API en un contenedor y valide sus endpoints con Swagger integrado. Vigencia de 24 horas.</p>
                <img alt="Prueba de API" src="/images/generate-service/test-api-rest.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 6: Descargue el código</h3>
                <p>Obtenga el proyecto Spring Boot compilable, configuración y documentación. Todo es suyo para extender y desplegar.</p>
                <img alt="Descarga de código fuente" src="/images/generate-service/download-source-code.webp" />
              </div>
            </div>

            <div className="flow-summary">
              <h4>Resumen del flujo</h4>
              <ul>
                <li>✓ Esquemas generados localmente, sin exponer credenciales</li>
                <li>✓ Código Spring Boot compilable y personalizable</li>
                <li>✓ Dockerización inmediata</li>
                <li>✓ Pruebas en tiempo real dentro de 24 horas</li>
              </ul>
            </div>
          </article>

          {/* Flujo 2: CI/CD */}
          <article id="flujo-cicd" className="guide-flow">
            <h2>2. Desplegar APIs en CI/CD automático</h2>
            <p className="flow-intro">
              Envíe el proyecto generado a su pipeline GitLab, Jenkins o Azure Pipelines y obtenga la API compilada y lista en cada commit.
            </p>

            <div className="flow-steps-guide">
              <div className="step-guide">
                <h3>Paso 1: Configure el repositorio</h3>
                <p>Suba el proyecto generado a su repositorio en GitLab, GitHub o Azure Repos. Incluye .gitlab-ci.yml o Jenkinsfile preconfigurado.</p>
                <img alt="Repositorio de API" src="/images/generate-service/repo-api-pipeline.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 2: Defina las variables de entorno</h3>
                <p>Configure en CI/CD las conexiones a base de datos, colas de mensajes, SFTP y credenciales de acceso.</p>
                <img alt="Configuración de ambiente" src="/images/generate-service/update-environment-deploy-cicd.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 3: Ejecute el pipeline</h3>
                <p>Cada commit dispara automáticamente la compilación del JAR, creación de imagen Docker y ejecución de tests.</p>
                <img alt="Pipeline ejecutándose" src="/images/generate-service/run-pipeline.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 4: Genere artefactos binarios</h3>
                <p>El pipeline produce JAR compilado, imagen Docker y todos los artefactos necesarios para despliegue.</p>
                <img alt="Estructura de artefactos" src="/images/generate-service/structure-artifact-jar.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 5: Encripte secretos</h3>
                <p>Use Vault, Azure Key Vault o el gestor de secretos de tu plataforma para proteger credenciales en CI/CD.</p>
                <img alt="Encriptación de secretos" src="/images/generate-service/encrypt-environment-secrets.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 6: Despliega a tu entorno</h3>
                <p>El pipeline entrega el artefacto a desarrollo, staging o producción según tu configuración. Automatización completa.</p>
                <img alt="Finalización del pipeline" src="/images/generate-service/finish-pipeline.webp" />
              </div>
            </div>

            <div className="flow-summary">
              <h4>Resumen del flujo</h4>
              <ul>
                <li>✓ Pipelines preconstruidos para GitLab CI, Jenkins y Azure Pipelines</li>
                <li>✓ Compilación automática en cada commit</li>
                <li>✓ Tests integrados en el pipeline</li>
                <li>✓ Gestión segura de secretos</li>
                <li>✓ Despliegue automático a staging y producción</li>
              </ul>
            </div>
          </article>

          {/* Flujo 3: ArgoCD */}
          <article id="flujo-argocd" className="guide-flow">
            <h2>3. Gestionar con ArgoCD</h2>
            <p className="flow-intro">
              Una vez desplegada en Kubernetes, use ArgoCD para gestionar la sincronización automática de cambios desde GitOps.
            </p>

            <div className="flow-steps-guide">
              <div className="step-guide">
                <h3>Paso 1: Instale ArgoCD</h3>
                <p>Agregue ArgoCD a su cluster Kubernetes. Proporciona un dashboard visual para gestionar todas sus aplicaciones.</p>
                <img alt="Inicio de ArgoCD" src="/images/generate-service/argocd-init.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 2: Registre el repositorio</h3>
                <p>Conecte su repositorio (GitLab, GitHub, Gitea) a ArgoCD. ArgoCD detectará automáticamente los cambios de configuración.</p>
                <img alt="Repositorio en ArgoCD" src="/images/generate-service/argocd-repo.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 3: Cree una nueva aplicación</h3>
                <p>Defina la aplicación en ArgoCD apuntando a su repositorio. Sincronización automática con cada commit.</p>
                <img alt="Nueva aplicación en ArgoCD" src="/images/generate-service/argocd-new-app.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 4: Sincronice la aplicación</h3>
                <p>ArgoCD sincroniza automáticamente la definición de la aplicación en el cluster. El estado siempre coincide con el repositorio.</p>
                <img alt="ArgoCD desplegado" src="/images/generate-service/argocd-deployed.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 5: Valide en el cluster</h3>
                <p>Verifique que la API esté corriendo en Kubernetes y accesible. ArgoCD muestra logs, eventos y estado en tiempo real.</p>
                <img alt="API desplegada y validada" src="/images/generate-service/api-argocd-deployed-test.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 6: Mantenga la sincronización</h3>
                <p>Cada cambio en el repositorio se sincroniza automáticamente. Los rollbacks también ocurren automáticamente si hay conflictos.</p>
                <img alt="Gestión con GitOps" src="/images/generate-service/update-repo-argocd.webp" />
              </div>
            </div>

            <div className="flow-summary">
              <h4>Resumen del flujo</h4>
              <ul>
                <li>✓ GitOps: el repositorio es la fuente de verdad</li>
                <li>✓ Sincronización automática de cambios</li>
                <li>✓ Dashboard visual en ArgoCD</li>
                <li>✓ Rollbacks automáticos en caso de conflicto</li>
                <li>✓ Multi-cluster y multi-ambiente soportado</li>
              </ul>
            </div>
          </article>

          {/* Flujo 4: Pruebas */}
          <article id="flujo-pruebas" className="guide-flow">
            <h2>4. Probar APIs en tiempo real</h2>
            <p className="flow-intro">
              Valide la API generada con herramientas estándar: Swagger, Postman, Kreya o curl. Las pruebas tienen vigencia de 24 horas.
            </p>

            <div className="flow-steps-guide">
              <div className="step-guide">
                <h3>Paso 1: Acceda al Swagger integrado</h3>
                <p>Abra la interfaz Swagger de la API en http://localhost:8080/swagger-ui.html. Vea todos los endpoints documentados.</p>
                <img alt="Interfaz Swagger" src="/images/generate-service/swagger.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 2: Pruebe un endpoint REST</h3>
                <p>Ejecute un GET o POST directamente desde Swagger. Verifique que la respuesta coincide con su especificación.</p>
                <img alt="Prueba de API REST" src="/images/generate-service/test-api-rest.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 3: Exporte a Postman</h3>
                <p>Descargue la colección Postman desde Swagger e importe en tu cliente de Postman para pruebas más avanzadas.</p>
                <img alt="Exportación a Postman" src="/images/generate-service/test-api-generate-local.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 4: Pruebe con datos reales</h3>
                <p>Ejecute llamadas contra la base de datos real. Verifique que los datos se recuperan, transforman y retornan correctamente.</p>
                <img alt="Pruebas con datos reales" src="/images/generate-service/test-api-rest.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 5: Valide contratos GraphQL</h3>
                <p>Si generó GraphQL, use Apollo Studio o similar para explorar el esquema y ejecutar queries y mutations.</p>
                <img alt="Pruebas GraphQL" src="/images/generate-service/test-api-rest.webp" />
              </div>

              <div className="step-guide">
                <h3>Paso 6: Descargue los resultados</h3>
                <p>Documente los resultados de pruebas. El JAR, imagen Docker y código fuente están listos para llevar a producción.</p>
                <img alt="Descarga de artefactos" src="/images/generate-service/download-source-code.webp" />
              </div>
            </div>

            <div className="flow-summary">
              <h4>Resumen del flujo</h4>
              <ul>
                <li>✓ Swagger integrado con documentación automática</li>
                <li>✓ Exporta a Postman para testing avanzado</li>
                <li>✓ Pruebas contra datos reales en 24 horas</li>
                <li>✓ Soporta REST, GraphQL, gRPC y SOAP</li>
                <li>✓ API destruida automáticamente después de 24h</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
