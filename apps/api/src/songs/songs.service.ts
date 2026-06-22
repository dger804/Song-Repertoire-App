import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import {
  Repertoire,
  type RepertoireDocument
} from "../repertoires/repertoire.schema";
import { CreateSongDto } from "./dto/create-song.dto";
import { UpdateSongDto } from "./dto/update-song.dto";
import { Song, type SongDocument } from "./song.schema";

interface SongPersistencePayload {
  title?: string;
  author?: string;
  lyrics?: string;
  chordSheet?: string;
  youtubeUrl?: string;
  sheetMusicUrl?: string;
  notes?: string;
  categoryIds?: Types.ObjectId[];
}

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name)
    private readonly songModel: Model<SongDocument>,
    @InjectModel(Repertoire.name)
    private readonly repertoireModel: Model<RepertoireDocument>
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
    const songId = this.parseObjectId(id);
    const song = await this.songModel
      .findByIdAndDelete(songId)
      .lean()
      .exec();

    if (!song) {
      throw new NotFoundException("Song not found.");
    }

    const repertoireFilter = {
      "songs.songId": songId
    } as unknown as Parameters<typeof this.repertoireModel.updateMany>[0];
    const repertoireUpdate = {
      $pull: { songs: { songId } }
    } as Parameters<typeof this.repertoireModel.updateMany>[1];

    await this.repertoireModel.updateMany(repertoireFilter, repertoireUpdate).exec();

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

    if (dto.chordSheet !== undefined) {
      payload.chordSheet = dto.chordSheet;
    }

    if (dto.youtubeUrl !== undefined) {
      payload.youtubeUrl = dto.youtubeUrl;
    }

    if (dto.sheetMusicUrl !== undefined) {
      payload.sheetMusicUrl = dto.sheetMusicUrl;
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
