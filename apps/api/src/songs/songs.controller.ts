import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from "@nestjs/common";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { SongsService } from "./songs.service";

@Controller("songs")
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSongDto) {
    return this.songsService.create(dto);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdateSongDto) {
    return this.songsService.update(id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.songsService.remove(id);
  }
}
