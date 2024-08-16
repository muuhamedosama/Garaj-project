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
exports.SignUpDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../types/enums");
class SignUpDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^01[0-9]{9}$/, {
        message: 'Phone number must start with 01 and be 11 digits long',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.UserType),
    __metadata("design:type", Number)
], SignUpDto.prototype, "userType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^.{6,}$/, {
        message: 'Password must be at least 6 characters long',
    }),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "businessName", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SignUpDto.prototype, "specificCarBrands", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "openingFrom", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "closingAt", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SignUpDto.prototype, "amenities", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.userType === enums_1.UserType.ServiceProvider),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], SignUpDto.prototype, "specialization", void 0);
//# sourceMappingURL=signup.dto.js.map