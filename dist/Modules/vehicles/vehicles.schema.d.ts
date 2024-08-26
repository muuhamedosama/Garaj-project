import { HydratedDocument, Types } from "mongoose";
export type VehicleDocument = HydratedDocument<Vehicle>;
export declare class Vehicle {
    vehicleMake: string;
    vehicleModel: string;
    userId: Types.ObjectId;
    vehicleYear: number;
    registration: string;
    _id: any;
}
export declare const VehicleSchema: import("mongoose").Schema<Vehicle, import("mongoose").Model<Vehicle, any, any, any, import("mongoose").Document<unknown, any, Vehicle> & Vehicle & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Vehicle, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Vehicle>> & import("mongoose").FlatRecord<Vehicle> & {
    _id: Types.ObjectId;
}>;
