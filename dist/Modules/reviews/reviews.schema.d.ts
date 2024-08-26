import { Types, HydratedDocument } from "mongoose";
export type ReviewDocument = HydratedDocument<Review>;
export declare class Review {
    providerId: Types.ObjectId;
    bookingId: Types.ObjectId;
    rating: number;
    comment: string;
}
export declare const ReviewSchema: import("mongoose").Schema<Review, import("mongoose").Model<Review, any, any, any, import("mongoose").Document<unknown, any, Review> & Review & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Review, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Review>> & import("mongoose").FlatRecord<Review> & {
    _id: Types.ObjectId;
}>;
