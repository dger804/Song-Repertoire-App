import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Song, SongSchema } from "./song.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }])],
  exports: [MongooseModule]
})
export class SongsModule {}
