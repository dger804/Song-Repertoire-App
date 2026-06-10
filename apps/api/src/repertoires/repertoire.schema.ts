import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Song } from "../songs/song.schema";

export type RepertoireDocument = HydratedDocument<Repertoire>;

@Schema({ _id: false })
export class RepertoireSong {
  @Prop({ ref: Song.name, required: true, type: MongooseSchema.Types.ObjectId })
  songId!: MongooseSchema.Types.ObjectId;

  @Prop({ min: 1, required: true })
  order!: number;
}

export const RepertoireSongSchema = SchemaFactory.createForClass(RepertoireSong);

@Schema({ collection: "repertoires", timestamps: true })
export class Repertoire {
  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({ trim: true })
  description?: string;

  @Prop({ default: [], type: [RepertoireSongSchema] })
  songs!: RepertoireSong[];
}

export const RepertoireSchema = SchemaFactory.createForClass(Repertoire);

RepertoireSchema.index({ name: 1 });
RepertoireSchema.index({ "songs.songId": 1 });
