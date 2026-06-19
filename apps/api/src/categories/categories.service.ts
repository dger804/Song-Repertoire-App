import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Category, type CategoryDocument } from "./category.schema";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Song, type SongDocument } from "../songs/song.schema";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
    @InjectModel(Song.name)
    private readonly songModel: Model<SongDocument>
  ) {}

  findAll() {
    return this.categoryModel.find().sort({ name: 1 }).lean().exec();
  }

  async findOne(id: string) {
    const category = await this.categoryModel
      .findById(this.parseObjectId(id))
      .lean()
      .exec();

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    return category;
  }

  async create(dto: CreateCategoryDto) {
    const category = await this.categoryModel.create(dto);

    return category.toObject();
  }

  async update(id: string, dto: UpdateCategoryDto) {
    const category = await this.categoryModel
      .findByIdAndUpdate(this.parseObjectId(id), dto, {
        new: true,
        runValidators: true
      })
      .lean()
      .exec();

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    return category;
  }

  async remove(id: string) {
    const categoryId = this.parseObjectId(id);
    const category = await this.categoryModel
      .findByIdAndDelete(categoryId)
      .lean()
      .exec();

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    const songFilter = {
      categoryIds: categoryId
    } as unknown as Parameters<typeof this.songModel.updateMany>[0];
    const songUpdate = {
      $pull: { categoryIds: categoryId }
    } as Parameters<typeof this.songModel.updateMany>[1];

    await this.songModel.updateMany(songFilter, songUpdate).exec();

    return { deleted: true, id };
  }

  private parseObjectId(id: string): Types.ObjectId {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException("Invalid category id.");
    }

    return new Types.ObjectId(id);
  }
}
