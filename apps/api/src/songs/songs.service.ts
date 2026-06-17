import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { Song, type SongDocument } from "./song.schema";

interface SongPersistencePayload {
  title?: string;
  author?: string;
  lyrics?: string;
  notes?: string;
  categoryIds?: Types.ObjectId[];
}

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name)
    private readonly songModel: Model<SongDocument>
  ) {}

  findAll() {
    return this.songModel.find().sort({ title: 1 }).lean().exec();
  }

  async findOne(id: string) {
    const song = await this.songModel.findById(this.parseObjectId(id)).lean().exec();

    if (!song) {
      throw new NotFoundException("Song not found.");
    }

    return song;
  }

  async create(dto: CreateSongDto) {
    const payload = this.toPersistence(dto);
    const song = new this.songModel(payload);
    await song.save();

    return song.toObject();
  }

  async update(id: string, dto: UpdateSongDto) {
    const song = await this.songModel
      .findByIdAndUpdate(this.parseObjectId(id), this.toPersistence(dto), {
        new: true,
        runValidators: true
      })
      .lean()
      .exec();

    if (!song) {
      throw new NotFoundException("Song not found.");
    }

    return song;
  }

  async remove(id: string) {
    const song = await this.songModel
      .findByIdAndDelete(this.parseObjectId(id))
      .lean()
      .exec();

    if (!song) {
      throw new NotFoundException("Song not found.");
    }

    return { deleted: true, id };
  }

  private toPersistence(dto: CreateSongDto | UpdateSongDto): SongPersistencePayload {
    const payload: SongPersistencePayload = {};

    if (dto.title !== undefined) {
      payload.title = dto.title;
    }

    if (dto.author !== undefined) {
      payload.author = dto.author;
    }

    if (dto.lyrics !== undefined) {
      payload.lyrics = dto.lyrics;
    }

    if (dto.notes !== undefined) {
      payload.notes = dto.notes;
    }

    if (dto.categoryIds !== undefined) {
      payload.categoryIds = dto.categoryIds.map((id) => this.parseObjectId(id));
    }

    return payload;
  }

  private parseObjectId(id: string): Types.ObjectId {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException("Invalid song id.");
    }

    return new Types.ObjectId(id);
  }
}
