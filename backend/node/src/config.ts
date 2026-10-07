import "dotenv/config";

export const config = {
  port: Number(process.env.PORT),
  databaseUrl: process.env.DATABASE_URL,
  corsOrigins: (process.env.CORS_ORIGINS ?? "http://localhost:8081")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
};
