import { IsArray, IsString } from "class-validator";

export class CreateMechanicDto {
  @IsString()
  businessName: string;

  @IsString()
  location: string;

  @IsString()
  address: string;

  @IsArray()
  specificCarBrands: string[];

  @IsString()
  openingFrom: string;

  @IsString()
  closingAt: string;

  @IsArray()
  amenities: string[];

  @IsArray()
  specialization: string[];
  userId: any;
}
