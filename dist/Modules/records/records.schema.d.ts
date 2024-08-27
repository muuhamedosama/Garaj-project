import { HydratedDocument, Types } from "mongoose";
export type RecordDocument = HydratedDocument<Record>;
export declare class Record {
    vehicleId: string;
    providerId: Types.ObjectId;
    bookingId: Types.ObjectId;
    services: Types.ObjectId[];
    bill: number;
    partsInstalled: string[];
    approved: boolean;
}
export declare const RecordSchema: import("mongoose").Schema<Record, import("mongoose").Model<Record, any, any, any, import("mongoose").Document<unknown, any, Record> & Record & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Record, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Record>> & import("mongoose").FlatRecord<Record> & {
    _id: Types.ObjectId;
}>;
