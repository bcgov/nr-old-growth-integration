import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DB example')
    .setDescription('The user API description')
    .setVersion('1.0')
    .addTag('client')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    SwaggerModule.setup('api', app, document);
  } else {
    SwaggerModule.setup('api', app, document, {
      swaggerOptions: {
        supportedSubmitMethods: [],
      },
    });
  }

  await app.listen(3000);
}
bootstrap();
