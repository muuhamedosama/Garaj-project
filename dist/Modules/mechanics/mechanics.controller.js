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
exports.MechanicsController = void 0;
const common_1 = require("@nestjs/common");
const mechanics_service_1 = require("./mechanics.service");
const update_mechanic_dto_1 = require("./dto/update-mechanic.dto");
let MechanicsController = class MechanicsController {
    constructor(mechanicsService) {
        this.mechanicsService = mechanicsService;
    }
    async update(id, updateMechanicDto, req) {
        const user = req.user;
        if (user.userType !== "admin" && "rating" in updateMechanicDto) {
            throw new common_1.ForbiddenException();
        }
        const updatedMechanic = await this.mechanicsService.update(+id, updateMechanicDto);
        return { message: "Mechanic updated successfully", data: updatedMechanic };
    }
};
exports.MechanicsController = MechanicsController;
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mechanic_dto_1.UpdateMechanicDto, Object]),
    __metadata("design:returntype", Promise)
], MechanicsController.prototype, "update", null);
exports.MechanicsController = MechanicsController = __decorate([
    (0, common_1.Controller)("mechanics"),
    __metadata("design:paramtypes", [mechanics_service_1.MechanicsService])
], MechanicsController);
//# sourceMappingURL=mechanics.controller.js.map