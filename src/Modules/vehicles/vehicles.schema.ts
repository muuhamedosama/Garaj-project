import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ required: true })
  vehicleMake: string;

  @Prop({ required: true })
  vehicleModel: string;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  userId: Types.ObjectId;

  @Prop({
    required: true,
    min: 1886, // The first car was made in 1886
    max: new Date().getFullYear(),
  })
  vehicleYear: number;

  @Prop({ required: true, unique: true })
  registration: string;

  _id: any;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
