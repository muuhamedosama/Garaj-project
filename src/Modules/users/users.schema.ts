import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { UserType } from 'src/types/enums';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  phone: string;

  @Prop()
  email: string;

  @Prop({ required: true, enum: UserType })
  userType: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;
  _id: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
