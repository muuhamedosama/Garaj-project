import { Model } from "mongoose";
import { CreateReviewDto } from "./dto/create-review.dto";
import { Review, ReviewDocument } from "./reviews.schema";
import { UserDocument } from "../users/users.schema";
export declare class ReviewsService {
    private reviewModel;
    private userModel;
    constructor(reviewModel: Model<ReviewDocument>, userModel: Model<UserDocument>);
    createReview(createReviewDto: CreateReviewDto): Promise<Review>;
    getReviewsByProvider(providerId: string): Promise<Review[]>;
}
