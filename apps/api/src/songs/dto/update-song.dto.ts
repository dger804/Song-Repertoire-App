import {
  ArrayUnique,
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from "class-validator";

export class UpdateSongDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(140)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20000)
  lyrics?: string;

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsMongoId({ each: true })
  categoryIds?: string[];
}
