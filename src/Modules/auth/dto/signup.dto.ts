import {
  IsString,
  IsEnum,
  IsArray,
  Matches,
  ValidateIf,
} from 'class-validator';
import { UserType } from 'src/types/enums';

export class SignUpDto {
  @IsString()
  @Matches(/^01[0-9]{9}$/, {
    message: 'Phone number must start with 01 and be 11 digits long',
  })
  phone: string;

  @IsString()
  email: string;

  @IsEnum(UserType)
  userType: UserType;

  @IsString()
  name: string;

  @IsString()
  @Matches(/^.{8,}$/, {
    message: 'Password must be at least 8 characters long',
  })
  password: string;

  // Fields specific to ServiceProvider
  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsString()
  businessName: string;

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsString()
  location: string;

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsString()
  address: string;

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsArray()
  specificCarBrands: string[];

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsString()
  openingFrom: string;

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsString()
  closingAt: string;

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsArray()
  amenities: string[];

  @ValidateIf((o) => o.userType === UserType.ServiceProvider)
  @IsArray()
  specialization: string[];
}
