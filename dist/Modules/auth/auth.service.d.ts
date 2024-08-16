import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { MechanicsService } from '../mechanics/mechanics.service';
export declare class AuthService {
    private usersService;
    private mechanicService;
    private jwtService;
    constructor(usersService: UsersService, mechanicService: MechanicsService, jwtService: JwtService);
    validateUserForLogin(phone: string, password?: string): Promise<import("../users/users.schema").User>;
    checkUserExistence(phone: string): Promise<import("../users/users.schema").User>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    signup(user: any): Promise<{
        access_token: string;
    }>;
}
