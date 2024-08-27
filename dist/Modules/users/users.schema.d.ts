import { HydratedDocument, Types } from "mongoose";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    phone: string;
    email: string;
    name: string;
    userType: number;
    password: string;
    businessName: string;
    location: string;
    address: string;
    specificCarBrands: string[];
    openingFrom: string;
    closingAt: string;
    amenities: string[];
    specialization: string[];
    rating: number;
    revenue: number;
    totalBookings: number;
    services: {
        serviceRef: Types.ObjectId;
        price: Number;
    }[];
    _id: any;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: Types.ObjectId;
}>;
