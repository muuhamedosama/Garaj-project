import {
  Injectable,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateReviewDto } from "./dto/create-review.dto";
import { Review, ReviewDocument } from "./reviews.schema";
import { User, UserDocument } from "../users/users.schema";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const { providerId, bookingId } = createReviewDto;

    const providerUser = await this.userModel.findById({ _id: providerId });
    if (!providerUser) {
      throw new NotFoundException("Provider not found");
    }

    const existingReview = await this.reviewModel.findOne({ bookingId }).exec();
    if (existingReview) {
      throw new ConflictException("A review for this booking already exists.");
    }

    const newReview = await this.reviewModel.create(createReviewDto);

    const reviews = await this.reviewModel.find({ providerId }).exec();
    const avgRating =
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

    await this.userModel.findByIdAndUpdate(
      { _id: providerId },
      { rating: avgRating }
    );

    return newReview;
  }

  async getReviewsByProvider(providerId: string): Promise<Review[]> {
    return this.reviewModel.find({ providerId }).exec();
  }

}
