"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reviews_schema_1 = require("./reviews.schema");
const users_schema_1 = require("../users/users.schema");
let ReviewsService = class ReviewsService {
    constructor(reviewModel, userModel) {
        this.reviewModel = reviewModel;
        this.userModel = userModel;
    }
    async createReview(createReviewDto) {
        const { providerId, bookingId } = createReviewDto;
        const providerUser = await this.userModel.findById({ _id: providerId });
        if (!providerUser) {
            throw new common_1.NotFoundException("Provider not found");
        }
        const existingReview = await this.reviewModel.findOne({ bookingId }).exec();
        if (existingReview) {
            throw new common_1.ConflictException("A review for this booking already exists.");
        }
        const newReview = await this.reviewModel.create(createReviewDto);
        const reviews = await this.reviewModel.find({ providerId }).exec();
        const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
        await this.userModel.findByIdAndUpdate({ _id: providerId }, { rating: avgRating });
        return newReview;
    }
    async getReviewsByProvider(providerId) {
        return this.reviewModel.find({ providerId }).exec();
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reviews_schema_1.Review.name)),
    __param(1, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map