import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateRepertoireDto } from "./dto/create-repertoire.dto";
import { UpdateRepertoireDto } from "./dto/update-repertoire.dto";
import {
  Repertoire,
  type RepertoireDocument
} from "./repertoire.schema";

interface RepertoirePersistenceSong {
  songId: Types.ObjectId;
  order: number;
}

interface RepertoirePersistencePayload {
  name?: string;
  description?: string;
  songs?: RepertoirePersistenceSong[];
}

@Injectable()
export class RepertoiresService {
  constructor(
    @InjectModel(Repertoire.name)
    private readonly repertoireModel: Model<RepertoireDocument>
  ) {}

  findAll() {
    return this.repertoireModel.find().sort({ name: 1 }).lean().exec();
  }

  async findOne(id: string) {
    const repertoire = await this.repertoireModel
      .findById(this.parseObjectId(id, "repertoire"))
      .lean()
      .exec();

    if (!repertoire) {
      throw new NotFoundException("Repertoire not found.");
    }

    return repertoire;
  }

  async create(dto: CreateRepertoireDto) {
    const payload = this.toPersistence(dto);
    const repertoire = new this.repertoireModel(payload);
    await repertoire.save();

    return repertoire.toObject();
  }

  async update(id: string, dto: UpdateRepertoireDto) {
    const repertoire = await this.repertoireModel
      .findByIdAndUpdate(
        this.parseObjectId(id, "repertoire"),
        this.toPersistence(dto),
        {
          new: true,
          runValidators: true
        }
      )
      .lean()
      .exec();

    if (!repertoire) {
      throw new NotFoundException("Repertoire not found.");
    }

    return repertoire;
  }

  async remove(id: string) {
    const repertoire = await this.repertoireModel
      .findByIdAndDelete(this.parseObjectId(id, "repertoire"))
      .lean()
      .exec();

    if (!repertoire) {
      throw new NotFoundException("Repertoire not found.");
    }

    return { deleted: true, id };
  }

  private toPersistence(
    dto: CreateRepertoireDto | UpdateRepertoireDto
  ): RepertoirePersistencePayload {
    const payload: RepertoirePersistencePayload = {};

    if (dto.name !== undefined) {
      payload.name = dto.name;
    }

    if (dto.description !== undefined) {
      payload.description = dto.description;
    }

    if (dto.songs !== undefined) {
      payload.songs = dto.songs.map((song) => ({
        songId: this.parseObjectId(song.songId, "song"),
        order: song.order
      }));
    }

    return payload;
  }

  private parseObjectId(id: string, label: string): Types.ObjectId {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException(`Invalid ${label} id.`);
    }

    return new Types.ObjectId(id);
  }
}
