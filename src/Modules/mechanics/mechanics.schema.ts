import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type mechanicDocument = HydratedDocument<Mechanic>;

@Schema({ timestamps: true })
export class Mechanic {
  @Prop({ required: true })
  businessName: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  specificCarBrands: string[];

  @Prop({ required: true })
  openingFrom: string;

  @Prop({ required: true })
  closingAt: string;

  @Prop({ required: true })
  amenities: string[];

  @Prop({ required: true })
  specialization: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const MechanicSchema = SchemaFactory.createForClass(Mechanic);
