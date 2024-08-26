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
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const records_schema_1 = require("./records.schema");
let RecordsService = class RecordsService {
    constructor(recordModel) {
        this.recordModel = recordModel;
    }
    async create(createRecordDto) {
        const createdRecord = new this.recordModel(createRecordDto);
        return createdRecord.save();
    }
    async findByVehicleId(vehicleId) {
        return await this.recordModel.find({ vehicleId }).exec();
    }
    async findByProviderId(providerId) {
        const records = await this.recordModel.find({ providerId }).exec();
        if (records.length === 0) {
            throw new common_1.NotFoundException("No records found for this user");
        }
        return records;
    }
    async update(id, updateRecordDto) {
        const updatedRecord = await this.recordModel
            .findByIdAndUpdate(id, updateRecordDto, { new: true })
            .exec();
        if (!updatedRecord) {
            throw new common_1.NotFoundException("Record not found");
        }
        return updatedRecord;
    }
    async remove(id) {
        const result = await this.recordModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException("Record not found");
        }
        return result;
    }
};
exports.RecordsService = RecordsService;
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(records_schema_1.Record.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecordsService);
//# sourceMappingURL=records.service.js.map