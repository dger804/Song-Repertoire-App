import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { UserRole } from "@song-repertoire/shared";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

const USER_ROLE_VALUES = [
  "owner",
  "supervisor",
  "moderator",
  "regular"
] as const satisfies readonly UserRole[];

@Schema({ collection: "users", timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  displayName!: string;

  @Prop({ enum: USER_ROLE_VALUES, required: true, type: String })
  role!: UserRole;

  @Prop({ default: true, required: true })
  isActive!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ role: 1 });
UserSchema.index({ isActive: 1 });
