import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
} from "class-validator";

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  vehicleMake: string;

  @IsString()
  @IsNotEmpty()
  vehicleModel: string;

  @IsNumber()
  @Min(1886)
  @Max(new Date().getFullYear())
  vehicleYear: number;

  @IsString()
  @IsNotEmpty()
  registration: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
