import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Repertoire, RepertoireSchema } from "../repertoires/repertoire.schema";
import { Song, SongSchema } from "./song.schema";
import { SongsController } from "./songs.controller";
import { SongsService } from "./songs.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Song.name, schema: SongSchema },
      { name: Repertoire.name, schema: RepertoireSchema }
    ])
  ],
  controllers: [SongsController],
  providers: [SongsService],
  exports: [MongooseModule]
})
export class SongsModule {}
