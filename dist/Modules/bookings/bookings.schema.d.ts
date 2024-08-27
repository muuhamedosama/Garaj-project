import { HydratedDocument, Types } from "mongoose";
import { BookingStatus } from "src/types/enums";
export type BookingDocument = HydratedDocument<Booking>;
export declare class Booking {
    userId: Types.ObjectId;
    providerId: Types.ObjectId;
    services: Types.ObjectId[];
    vehicleId: Types.ObjectId;
    price: number;
    status: BookingStatus;
}
export declare const BookingSchema: import("mongoose").Schema<Booking, import("mongoose").Model<Booking, any, any, any, import("mongoose").Document<unknown, any, Booking> & Booking & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Booking, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Booking>> & import("mongoose").FlatRecord<Booking> & {
    _id: Types.ObjectId;
}>;
