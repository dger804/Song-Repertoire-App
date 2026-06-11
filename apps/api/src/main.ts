import "reflect-metadata";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AppConfigService } from "./config/app-config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(AppConfigService).app;

  app.enableCors({
    origin: config.corsOrigin,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: false
  });

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true
    })
  );

  await app.listen(config.port, "0.0.0.0");
}

void bootstrap();
