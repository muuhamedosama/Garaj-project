import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUserForLogin(phone: string, password?: string): Promise<import("../users/users.schema").User>;
    checkUserExistence(phone: string): Promise<import("../users/users.schema").User>;
    login(user: any): Promise<{
        id: any;
        name: any;
        access_token: string;
    }>;
    signup(user: any): Promise<{
        id: any;
        name: string;
        access_token: string;
    }>;
}
