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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./users.schema");
const bcrypt = require("bcryptjs");
const enums_1 = require("../../types/enums");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const createdUser = new this.userModel({
            ...user,
            password: hashedPassword,
            rating: 0,
            revenue: 0,
            totalBookings: 0,
        });
        return createdUser.save();
    }
    async update(id, updateUserDto) {
        if (updateUserDto.hasOwnProperty("rating")) {
            throw new common_1.ForbiddenException("You are not allowed to update the rating");
        }
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
            new: true,
            runValidators: true,
        });
        if (!updatedUser) {
            throw new common_1.NotFoundException();
        }
        return updatedUser;
    }
    async updateRevenueAndPrice(providerId, bill) {
        await this.userModel.findByIdAndUpdate(providerId, {
            $inc: {
                revenue: bill,
                totalBookings: 1,
            },
        }, { new: true });
    }
    async findOneByContact(phone) {
        return this.userModel.findOne({ phone }).exec();
    }
    async findById(id) {
        return this.userModel.findById(id).select("-password").exec();
    }
    async findServiceProviders(userType, query) {
        if (userType === enums_1.UserType.ServiceProvider)
            throw new common_1.ForbiddenException();
        const filter = { userType: enums_1.UserType.ServiceProvider };
        if (query.name) {
            filter["name"] = { $regex: query.name, $options: "i" };
        }
        if (query.location) {
            filter["location"] = { $regex: query.location, $options: "i" };
        }
        if (query.specificCarBrands) {
            filter["specificCarBrands"] = { $in: [query.specificCarBrands] };
        }
        return this.userModel.find(filter).select("-password").exec();
    }
    async delete(id) {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map