import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT, 10) || 4000;
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Mongo Nest API 🌸')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addTag('Made BY LG 🌸')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customfavIcon:
      'https://img.freepik.com/premium-vector/beauty-plumeria-icon-flowers-design-illustration-symbol_610945-9130.jpg?w=1380',
    customSiteTitle: ' 🌸 Mongo Nest API ',
    customCss: `
      .swagger-ui .topbar {
        background-color: #C0809C;
        display:none;
      }
      .operation-filter-input {
        border: 2px solid #C0809C !important;
        color: #C0809C;
      }
      .model-container{
        border: 2px solid #C0809C !important;
      }
      // .opblock-summary-get{
      //   background-color: #655A7C;
      //   border: 2px solid #655A7C !important;
      // }
    `,
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      filter: true,
      persistAuthorization: true,
      // defaultModelsExpandDepth: -1,
    },
  });
  await app.listen(port, '0.0.0.0');
}
bootstrap();
