import { IsMongoId, IsInt, Min, Max, IsOptional } from "class-validator";

export class CreateReviewDto {
  @IsMongoId()
  providerId: string;

  @IsMongoId()
  bookingId: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  comment: string;
}
