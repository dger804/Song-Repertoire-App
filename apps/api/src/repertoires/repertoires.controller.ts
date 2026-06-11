import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";
import { CreateRepertoireDto } from "./dto/create-repertoire.dto";
import { UpdateRepertoireDto } from "./dto/update-repertoire.dto";
import { RepertoiresService } from "./repertoires.service";

@Controller("repertoires")
export class RepertoiresController {
  constructor(private readonly repertoiresService: RepertoiresService) {}

  @Get()
  findAll() {
    return this.repertoiresService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.repertoiresService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateRepertoireDto) {
    return this.repertoiresService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateRepertoireDto) {
    return this.repertoiresService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.repertoiresService.remove(id);
  }
}
