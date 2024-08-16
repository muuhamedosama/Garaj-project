import { IsString } from "class-validator";

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  duration: string;
}
