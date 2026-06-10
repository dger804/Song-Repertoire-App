import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

function readPort(): number {
  const rawPort = process.env.PORT ?? "3000";
  const port = Number(rawPort);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value: ${rawPort}`);
  }

  return port;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOrigin = process.env.CORS_ORIGIN ?? "http://localhost:4321";

  app.enableCors({
    origin: corsOrigin,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: false
  });

  await app.listen(readPort(), "0.0.0.0");
}

void bootstrap();
