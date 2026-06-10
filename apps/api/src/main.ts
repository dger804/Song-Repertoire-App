import "reflect-metadata";
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

  await app.listen(config.port, "0.0.0.0");
}

void bootstrap();
