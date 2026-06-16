import {
  IsArray,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
  MaxLength,
  Min
} from "class-validator";

export class RepertoireSongDto {
  @IsMongoId()
  songId!: string;

  @IsInt()
  @Min(1)
  order!: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MaxLength(80, { each: true })
  tagIds?: string[];
}
