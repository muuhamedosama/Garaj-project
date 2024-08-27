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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vehicles_schema_1 = require("./vehicles.schema");
const mongoose_2 = require("mongoose");
let VehiclesService = class VehiclesService {
    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }
    async create(createVehicleDto) {
        try {
            const newVehicle = new this.vehicleModel(createVehicleDto);
            return await newVehicle.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException();
            }
            throw error;
        }
    }
    async findByUser(userId) {
        return this.vehicleModel.find({ userId }).exec();
    }
    async findById(id) {
        return this.vehicleModel.findById(id).exec();
    }
    async update(id, updateVehicleDto) {
        const { registration } = updateVehicleDto;
        const existingVehicle = await this.vehicleModel.findById(id).exec();
        if (!existingVehicle) {
            throw new common_1.NotFoundException("Vehicle not found");
        }
        if (registration && registration !== existingVehicle.registration) {
            const duplicateVehicle = await this.vehicleModel
                .findOne({ registration })
                .exec();
            if (duplicateVehicle) {
                throw new common_1.ConflictException("Vehicle with this registration already exists.");
            }
        }
        const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto, {
            new: true,
            runValidators: true,
        });
        if (!updatedVehicle) {
            throw new common_1.NotFoundException();
        }
        return updatedVehicle;
    }
    async delete(id, userId) {
        const vehicle = await this.vehicleModel.findById(id).exec();
        if (!vehicle) {
            throw new common_1.NotFoundException("Vehicle not found");
        }
        if (vehicle.userId.toString() !== userId) {
            throw new common_1.ForbiddenException("You are not allowed to delete this vehicle");
        }
        const result = await this.vehicleModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException("Vehicle not found");
        }
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vehicles_schema_1.Vehicle.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map