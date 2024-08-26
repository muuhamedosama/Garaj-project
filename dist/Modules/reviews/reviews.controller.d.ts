import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    createReview(createReviewDto: CreateReviewDto, req: any): Promise<import("./reviews.schema").Review>;
    getReviewsByProvider(providerId: string): Promise<import("./reviews.schema").Review[]>;
}
