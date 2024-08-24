import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login-dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        id: any;
        name: any;
        access_token: string;
    }>;
    signup(signUpDto: SignUpDto): Promise<{
        id: any;
        name: string;
        access_token: string;
    }>;
}
