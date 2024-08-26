import { IsArray, IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { BookingStatus } from 'src/types/enums';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNotEmpty()
  @IsMongoId()
  providerId: string;

  @IsNotEmpty()
  @IsArray()
  @IsMongoId({ each: true })
  services: string[];

  @IsNotEmpty()
  @IsMongoId()
  vehicleId: string;

  @IsEnum(BookingStatus)
  status: BookingStatus;
}
