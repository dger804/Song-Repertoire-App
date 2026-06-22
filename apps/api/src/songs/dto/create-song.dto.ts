import {
  ArrayUnique,
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  ValidateIf
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
  @MaxLength(30000)
  chordSheet?: string;

  @IsOptional()
  @ValidateIf((_, value) => value !== undefined && value !== "")
  @IsString()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  youtubeUrl?: string;

  @IsOptional()
  @ValidateIf((_, value) => value !== undefined && value !== "")
  @IsString()
  @IsUrl({ require_protocol: true })
  @MaxLength(500)
  sheetMusicUrl?: string;

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
