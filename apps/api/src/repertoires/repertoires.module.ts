import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Repertoire, RepertoireSchema } from "./repertoire.schema";
import { RepertoiresController } from "./repertoires.controller";
import { RepertoiresService } from "./repertoires.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Repertoire.name, schema: RepertoireSchema }
    ])
  ],
  controllers: [RepertoiresController],
  providers: [RepertoiresService],
  exports: [MongooseModule]
})
export class RepertoiresModule {}
