export interface AppEnvironment {
  nodeEnv: string;
  port: number;
  corsOrigins: string[];
  mongodbUri: string;
  mongodbDbName: string;
}

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value || value.trim().length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function readPort(): number {
  const rawPort = process.env.PORT ?? "3000";
  const port = Number(rawPort);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid PORT value: ${rawPort}`);
  }

  return port;
}

function readCorsOrigins(): string[] {
  const rawOrigins = process.env.CORS_ORIGIN ?? "http://localhost:4321";
  const origins = rawOrigins
    .split(",")
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  if (origins.length === 0) {
    throw new Error("CORS_ORIGIN must contain at least one origin.");
  }

  return origins;
}

export function loadEnvironment(): AppEnvironment {
  return {
    nodeEnv: process.env.NODE_ENV ?? "development",
    port: readPort(),
    corsOrigins: readCorsOrigins(),
    mongodbUri: requireEnv("MONGODB_URI"),
    mongodbDbName: requireEnv("MONGODB_DB_NAME")
  };
}
