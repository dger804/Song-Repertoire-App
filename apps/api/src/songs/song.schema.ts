import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Category } from "../categories/category.schema";

export type SongDocument = HydratedDocument<Song>;

@Schema({ collection: "songs", timestamps: true })
export class Song {
  @Prop({ required: true, trim: true })
  title!: string;

  @Prop({ default: "", trim: true })
  author!: string;

  @Prop({ default: "", required: true })
  lyrics!: string;

  @Prop({ default: "", trim: true })
  notes!: string;

  @Prop({
    default: [],
    ref: Category.name,
    type: [{ type: MongooseSchema.Types.ObjectId }]
  })
  categoryIds!: MongooseSchema.Types.ObjectId[];
}

export const SongSchema = SchemaFactory.createForClass(Song);

SongSchema.index({ title: 1 });
SongSchema.index({ author: 1 });
SongSchema.index({ categoryIds: 1 });
