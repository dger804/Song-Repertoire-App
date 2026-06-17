import {
  ArrayUnique,
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";

export class CreateSongDto {
  @IsString()
  @MinLength(2)
  @MaxLength(140)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(140)
  author?: string;

  @IsString()
  @MaxLength(20000)
  lyrics!: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsMongoId({ each: true })
  categoryIds?: string[];
}
