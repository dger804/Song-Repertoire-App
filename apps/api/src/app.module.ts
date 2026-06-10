import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppConfigService } from "./config/app-config.service";
import type { AppEnvironment } from "./config/environment";
import configuration from "./config/configuration";
import { CategoriesModule } from "./categories/categories.module";
import { HealthController } from "./health.controller";
import { RepertoiresModule } from "./repertoires/repertoires.module";
import { SongsModule } from "./songs/songs.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ["apps/api/.env", ".env"],
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const appConfig = configService.getOrThrow<AppEnvironment>("app");

        return {
          uri: appConfig.mongodbUri,
          dbName: appConfig.mongodbDbName
        };
      }
    }),
    UsersModule,
    CategoriesModule,
    SongsModule,
    RepertoiresModule
  ],
  controllers: [HealthController],
  providers: [AppConfigService]
})
export class AppModule {}
