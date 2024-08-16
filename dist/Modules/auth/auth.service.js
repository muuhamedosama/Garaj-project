"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const users_service_1 = require("../users/users.service");
const enums_1 = require("../../types/enums");
const mechanics_service_1 = require("../mechanics/mechanics.service");
let AuthService = class AuthService {
    constructor(usersService, mechanicService, jwtService) {
        this.usersService = usersService;
        this.mechanicService = mechanicService;
        this.jwtService = jwtService;
    }
    async validateUserForLogin(phone, password) {
        const user = await this.usersService.findOneByContact(phone);
        try {
            if (user && (await bcrypt.compare(password, user.password))) {
                return user;
            }
            return null;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async checkUserExistence(phone) {
        const user = await this.usersService.findOneByContact(phone);
        return user;
    }
    async login(user) {
        const payload = {
            phone: user.phone,
            UserType: user.userType,
            sub: user._id,
        };
        try {
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async signup(user) {
        const createdUser = await this.usersService.create(user);
        if (user.userType == enums_1.UserType.ServiceProvider) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mechanics_service_1.MechanicsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map