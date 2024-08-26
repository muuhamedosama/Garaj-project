import { PartialType } from '@nestjs/mapped-types';
import { SignUpDto } from 'src/Modules/auth/dto/signup.dto';

export class UpdateUserDto extends PartialType(SignUpDto) {}
