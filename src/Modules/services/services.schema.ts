import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema({ timestamps: true })
export class Service {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({required: true})
  duration: string;

  _id: any;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
