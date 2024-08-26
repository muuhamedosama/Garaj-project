import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { UserType } from "src/types/enums";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(UserType)
  userType: UserType;
}
