import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "./config";
import { createDatabase } from "typeorm-extension";

async function bootstrap() {
  await createDatabase({
    options: {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "stock",
    },
    initialDatabase: "postgres",
    ifNotExist: true,
  });

  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: config.corsOrigins });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await app.listen(config.port);
}

void bootstrap();
