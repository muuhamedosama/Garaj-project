import { IsString, IsArray, IsNumber, IsOptional, IsMongoId } from 'class-validator';

export class CreateRecordDto {
  @IsString()
  vehicleId?: string;

  @IsMongoId()
  providerId: string;

  @IsArray()
  @IsOptional()
  @IsMongoId({ each: true })
  services?: string[];

  @IsNumber()
  bill: number; 

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  partsInstalled?: string[];
}
