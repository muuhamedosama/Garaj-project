import { IsEnum, IsString } from "class-validator";
import { UserType } from "src/types/enums";

export class LoginDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsEnum(UserType)
  userType: UserType;
}
