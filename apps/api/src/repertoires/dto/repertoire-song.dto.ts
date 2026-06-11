import { IsInt, IsMongoId, Min } from "class-validator";

export class RepertoireSongDto {
  @IsMongoId()
  songId!: string;

  @IsInt()
  @Min(1)
  order!: number;
}
