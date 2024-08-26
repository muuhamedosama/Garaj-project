import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: any): Promise<{
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
