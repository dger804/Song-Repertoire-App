import { IsIn, IsString, MaxLength, MinLength } from "class-validator";

export const REPERTOIRE_TAG_COLORS = [
  "slate",
  "red",
  "amber",
  "green",
  "blue",
  "purple"
] as const;

export class RepertoireTagDto {
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  tagId!: string;

  @IsString()
  @MinLength(2)
  @MaxLength(40)
  name!: string;

  @IsString()
  @IsIn(REPERTOIRE_TAG_COLORS)
  color!: string;
}
