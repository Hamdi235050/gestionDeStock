import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "./config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: config.corsOrigins });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  await app.listen(config.port);
}

void bootstrap();
