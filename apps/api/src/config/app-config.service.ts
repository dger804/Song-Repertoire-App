import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { AppEnvironment } from "./environment";

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get app(): AppEnvironment {
    const config = this.configService.get<AppEnvironment>("app");

    if (!config) {
      throw new Error("Application configuration is not loaded.");
    }

    return config;
  }
}
