import { Type } from "class-transformer";
import {
  IsArray,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested
} from "class-validator";
import { RepertoireSongDto } from "./repertoire-song.dto";
import { RepertoireTagDto } from "./repertoire-tag.dto";

export class UpdateRepertoireDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  description?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RepertoireTagDto)
  tags?: RepertoireTagDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RepertoireSongDto)
  songs?: RepertoireSongDto[];
}
