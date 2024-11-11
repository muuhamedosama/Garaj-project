import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    const user = await this.authService.validateUserForLogin(
      loginDto.phone,
      loginDto.password,
    );
    
    if (user) {
      return this.authService.login(user);
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signUpDto: SignUpDto) {
    const existedUser = await this.authService.checkUserExistence(
      signUpDto.phone,
    );
    if (existedUser) {
      throw new ConflictException('User with this phone number already exists');
    }
    return this.authService.signup(signUpDto);
  }
}
