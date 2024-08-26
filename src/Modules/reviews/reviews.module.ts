import { Module } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { ReviewsController } from "./reviews.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Review, ReviewSchema } from "./reviews.schema";
import { JwtService } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { User, UserSchema } from "../users/users.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [ReviewsController],
  providers: [JwtService, ReviewsService],
})
export class ReviewsModule {}
