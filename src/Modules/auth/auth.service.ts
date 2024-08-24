import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { UsersService } from "../customers/users.service";
import { UserType } from "src/types/enums";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUserForLogin(phone: string, password?: string) {
    let user;
    user = await this.usersService.findOneByContact(phone);

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
      userType: user.userType,
      sub: user._id,
    };
    try {
      return {
        id: user._id,
        name: user.name,
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async signup(user: any) {
    if (user.userType == UserType.admin) {
      throw new ForbiddenException();
    }
    const createdUser = await this.usersService.create(user);

    const payload = {
      phone: user.phone,
      userType: user.userType,
      sub: user._id,
    };
    return {
      id: createdUser._id,
      name: createdUser.name,
      access_token: this.jwtService.sign(payload),
    };
  }
}
