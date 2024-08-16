import { HydratedDocument } from 'mongoose';
export type ServiceDocument = HydratedDocument<Service>;
export declare class Service {
    name: string;
    duration: string;
    _id: any;
}
export declare const ServiceSchema: import("mongoose").Schema<Service, import("mongoose").Model<Service, any, any, any, import("mongoose").Document<unknown, any, Service> & Service & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Service, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Service>> & import("mongoose").FlatRecord<Service> & {
    _id: import("mongoose").Types.ObjectId;
}>;
