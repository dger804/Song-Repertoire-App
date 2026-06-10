import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Repertoire, RepertoireSchema } from "./repertoire.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Repertoire.name, schema: RepertoireSchema }
    ])
  ],
  exports: [MongooseModule]
})
export class RepertoiresModule {}
