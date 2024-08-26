import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Request,
  UnauthorizedException,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { AuthGuard } from "../auth/auth.guard";
import { UserType } from "src/types/enums";

@UseGuards(AuthGuard)
@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    const { userType } = req.user;
    if (userType === UserType.ServiceProvider)
      throw new UnauthorizedException();
    return this.reviewsService.createReview(createReviewDto);
  }

  @Get(":providerId")
  getReviewsByProvider(@Param("providerId") providerId: string) {
    return this.reviewsService.getReviewsByProvider(providerId);
  }
}
