#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Mapeo manual de nombres originales a nombres en kebab-case
const nameMapping = {
  'TestApiGenerateIn Local.png': 'test-api-generate-local.png',
  'TestApiRest.png': 'test-api-rest.png',
  'TestBuilJar.png': 'test-build-jar.png',
  'UpdateEnviromentForDeploydCI-CD.png': 'update-environment-deploy-cicd.png',
  'updateRepoArgocd.png': 'update-repo-argocd.png',
  'UploadFileSchemmaInGenerateService.png': 'upload-file-schema-generate-service.png',
  'ViewBuildJarInGenrate-serviceClinet.png': 'view-build-jar-generate-service-client.png',
  'ViewContainerApi.png': 'view-container-api.png',
  'ViewRunApisInGenerateServiceClinet.png': 'view-run-apis-generate-service-client.png',
  'aargoceIni.png': 'argocd-init.png',
  'ApiResrArgoCDDeployedAND_Test.png': 'api-argocd-deployed-test.png',
  'ArgocdDeployd.png': 'argocd-deployed.png',
  'ArgocdNewApp.png': 'argocd-new-app.png',
  'argocdRepo.png': 'argocd-repo.png',
  'TestSignPdfGenerateForApiByFreeMarketTempalte.png': 'test-sign-pdf-generate-api-freemarker-template.png',
  'CingurateCi-CD.png': 'configure-cicd.png',
  'CompileSorceCode.png': 'compile-source-code.png',
  'ConfigClient.png': 'config-client.png',
  'ConfigConexionLocalDatabase.png': 'config-connection-local-database.png',
  'ConfigConextionCI-CD.png': 'config-connection-cicd.png',
  'ConfigEnviromentIn Clinet.png': 'config-environment-client.png',
  'ConfigEnviromentSftpForApisGenerated.png': 'config-environment-sftp-apis-generated.png',
  'ConfigEnviromentSMB_COnnectionForApiGenrated.png': 'config-environment-smb-connection-api-generated.png',
  'ConfigEnvirometConnectiosMessajeQueue.png': 'config-environment-connections-message-queue.png',
  'ConfigLocalDatabaseCOnnectionInCLinet.png': 'config-local-database-connection-client.png',
  'ConsifigCI-CD.png': 'configure-cicd-2.png',
  'DatasourceConfig.png': 'datasource-config.png',
  'DatabaseSelection.png': 'database-selection.png',
  'DeployOnAzureDevOps.png': 'deploy-azure-devops.png',
  'DeploylinkToPipeline.png': 'deploy-link-to-pipeline.png',
  'DescargarJsonSchema.png': 'download-json-schema.png',
  'DownLoadSourceCode.png': 'download-source-code.png',
  'EdirSourceCode.png': 'edit-source-code.png',
  'encriptEnviromnetforSeccrets.png': 'encrypt-environment-secrets.png',
  'EstructruaArtefactJar.png': 'structure-artifact-jar.png',
  'FinshPipeline.png': 'finish-pipeline.png',
  'GenerarSchemaLocal.png': 'generate-schema-local.png',
  'GenerateApiAndSendCI-CD.png': 'generate-api-send-cicd.png',
  'GenerateApiBinaryOptionBuild.png': 'generate-api-binary-option-build.png',
  'generate-api-rest.png': 'generate-api-rest.png',
  'GenerateTestApiByLocalSchema.png': 'generate-test-api-local-schema.png',
  'gitlap-triger.png': 'gitlab-trigger.png',
  'login.png': 'login.png',
  'PipelineBuildApi.png': 'pipeline-build-api.png',
  'portada.png': 'portada.png',
  'ProceessCLientBuildApi.png': 'process-client-build-api.png',
  'RedirectGenerateServiceClientOrApiGenrate.png': 'redirect-generate-service-client-api.png',
  'RegisterEndpointRestByProcesdure.png': 'register-endpoint-rest-by-procedure.png',
  'RepoApiPipeline.png': 'repo-api-pipeline.png',
  'RunBuilJar.png': 'run-build-jar.png',
  'RunClientGenerateService.png': 'run-client-generate-service.png',
  'RunMicroService.png': 'run-microservice.png',
  'runPipeline.png': 'run-pipeline.png',
  'SchemaDatabaseClient.png': 'schema-database-client.png',
  'SelectPLSql.png': 'select-plsql.png',
  'SelectSorceOrigin.png': 'select-source-origin.png',
  'SelectWebHookAndSendGenerate-service-client.png': 'select-webhook-send-generate-service-client.png',
  'SendArtefactTOGeneratgeServiceFOrCompile.png': 'send-artifact-generate-service-compile.png',
  'Swagger.png': 'swagger.png',
  'DownLoadClientGenerateService.png': 'download-client-generate-service.png',
  'DownLoadSchemaLocal.png': 'download-schema-local.png',
  'DownloadJarArtefact.png': 'download-jar-artifact.png',
};

async function processImages() {
  const imagesDir = path.join(__dirname, '../public/images/generate-service');
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));

  console.log(`Procesando ${files.length} imágenes...`);

  const processedImages = [];
  let successCount = 0;
  let skipCount = 0;

  for (const file of files) {
    const oldPath = path.join(imagesDir, file);
    const newName = nameMapping[file];

    if (!newName) {
      console.warn(`⚠️  No hay mapeo para: ${file}`);
      skipCount++;
      continue;
    }

    const newPath = path.join(imagesDir, newName);
    const webpPath = newPath.replace('.png', '.webp');

    try {
      // Obtener dimensiones de la imagen original
      const metadata = await sharp(oldPath).metadata();
      const { width, height } = metadata;

      // Convertir a WebP con ancho máximo de 1600px
      const maxWidth = 1600;
      const scale = width > maxWidth ? maxWidth / width : 1;
      const finalWidth = Math.round(width * scale);
      const finalHeight = Math.round(height * scale);

      await sharp(oldPath)
        .resize(finalWidth, finalHeight, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);

      // Eliminar el original si la conversión fue exitosa
      fs.unlinkSync(oldPath);

      processedImages.push({
        original: file,
        renamed: newName.replace('.png', '.webp'),
        width: finalWidth,
        height: finalHeight,
      });

      successCount++;
      console.log(`✓ ${file} → ${newName.replace('.png', '.webp')} (${finalWidth}x${finalHeight})`);
    } catch (error) {
      console.error(`✗ Error procesando ${file}:`, error.message);
    }
  }

  // Crear README con tabla de equivalencias
  const readmeContent = `# Imágenes de Generate Service

## Tabla de equivalencias

| Nombre original | Nombre final | Dimensiones |
|---|---|---|
${processedImages.map(img => `| ${img.original} | ${img.renamed} | ${img.width}x${img.height} |`).join('\n')}

## Notas

- ⚠️ **Imágenes no publicadas** (contienen tokens reales):
  - \`config-client.png\` (original: ConfigClient.png) — TODO: reemplazar con captura difuminada
  - \`configure-cicd-2.png\` (original: ConsifigCI-CD.png) — TODO: reemplazar con captura difuminada

- Todas las imágenes han sido convertidas a WebP con ancho máximo de 1600px
- Las dimensiones originales se preservan en el archivo de datos para evitar saltos de diseño
`;

  fs.writeFileSync(path.join(imagesDir, 'README.md'), readmeContent);

  console.log(`\n✅ Procesamiento completado:`);
  console.log(`   - Exitosas: ${successCount}`);
  console.log(`   - Omitidas: ${skipCount}`);
  console.log(`\n📋 README creado en: ${path.join(imagesDir, 'README.md')}`);

  // Guardar metadatos para usar en el archivo de datos
  const metadataFile = path.join(__dirname, '../app/components/generate-service-images-metadata.js');
  const metadataContent = `// Metadatos de imágenes de Generate Service
// Generado automáticamente por scripts/process-generate-service-images.js

export const generateServiceImages = {
${processedImages.map(img => `  '${img.renamed}': { width: ${img.width}, height: ${img.height} },`).join('\n')}
};
`;

  fs.writeFileSync(metadataFile, metadataContent);
  console.log(`📊 Metadatos guardados en: ${metadataFile}`);
}

processImages().catch(console.error);
