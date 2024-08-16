import {
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { UserType } from 'src/types/enums';
import { MechanicsService } from '../mechanics/mechanics.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private mechanicService: MechanicsService,
    private jwtService: JwtService,
  ) {}

  async validateUserForLogin(phone: string, password?: string) {
    const user = await this.usersService.findOneByContact(phone);
    try {
      if (user && (await bcrypt.compare(password, user.password))) {
        return user;
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async checkUserExistence(phone: string) {
    const user = await this.usersService.findOneByContact(phone);
    return user;
  }

  async login(user: any) {
    const payload = {
      phone: user.phone,
      UserType: user.userType,
      sub: user._id,
    };
    try {
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async signup(user: any) {
    const createdUser = await this.usersService.create(user);
    if (user.userType == UserType.ServiceProvider) {
      await this.mechanicService.create({
        userId: createdUser._id,
        ...user,
      });
    }

    const payload = {
      phone: user.phone,
      UserType: user.userType,
      sub: user._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
