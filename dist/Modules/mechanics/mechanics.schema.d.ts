import { HydratedDocument, Types } from "mongoose";
export type mechanicDocument = HydratedDocument<Mechanic>;
export declare class Mechanic {
    businessName: string;
    location: string;
    address: string;
    specificCarBrands: string[];
    openingFrom: string;
    closingAt: string;
    amenities: string[];
    specialization: string[];
    rating: number;
    services: {
        serviceRef: Types.ObjectId;
        price: Number;
    }[];
    userId: Types.ObjectId;
}
export declare const MechanicSchema: import("mongoose").Schema<Mechanic, import("mongoose").Model<Mechanic, any, any, any, import("mongoose").Document<unknown, any, Mechanic> & Mechanic & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Mechanic, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Mechanic>> & import("mongoose").FlatRecord<Mechanic> & {
    _id: Types.ObjectId;
}>;
