import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { BookingStatus } from "src/types/enums";

export type BookingDocument = HydratedDocument<Booking>;

@Schema({ timestamps: true })
export class Booking {
  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  providerId: Types.ObjectId;

  @Prop({ type: [Types.ObjectId], ref: "Service", required: true })
  services: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: "Vehicle", required: true })
  vehicleId: Types.ObjectId;

  @Prop({
    type: String,
    enum: BookingStatus,
    default: BookingStatus.Pending,
    required: true,
  })
  status: BookingStatus;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
