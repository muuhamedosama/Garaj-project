import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type RecordDocument = HydratedDocument<Record>;

@Schema({ timestamps: true })
export class Record {
  @Prop({ required: true })
  vehicleId: string;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  providerId: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: "Service", required: true })
  services: Types.ObjectId[];

  @Prop({ required: true })
  bill: number;

  @Prop({ type: [String], default: [] })
  partsInstalled: string[];
}

export const RecordSchema = SchemaFactory.createForClass(Record);
