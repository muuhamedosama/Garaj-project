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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicsService = void 0;
const common_1 = require("@nestjs/common");
const mechanics_schema_1 = require("./mechanics.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const users_service_1 = require("../users/users.service");
let MechanicsService = class MechanicsService {
    constructor(mechanicModel, usersService) {
        this.mechanicModel = mechanicModel;
        this.usersService = usersService;
    }
    async create(user) {
        const createdUser = new this.mechanicModel(user);
        return createdUser.save();
    }
    update(id, updateMechanicDto) {
        console.log(updateMechanicDto);
        return `This action updates a #${id} mechanic`;
    }
};
exports.MechanicsService = MechanicsService;
exports.MechanicsService = MechanicsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(mechanics_schema_1.Mechanic.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        users_service_1.UsersService])
], MechanicsService);
//# sourceMappingURL=mechanics.service.js.map