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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enums_1 = require("../../types/enums");
let User = class User {
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        enum: enums_1.UserType,
        validate: {
            validator: function (value) {
                if (value === enums_1.UserType.ServiceProvider) {
                    return (this.businessName &&
                        this.location &&
                        this.address &&
                        this.specificCarBrands &&
                        this.openingFrom &&
                        this.closingAt &&
                        this.amenities &&
                        this.specialization);
                }
                return true;
            },
            message: "All provider fields must be filled when userType is provider.",
        },
    }),
    __metadata("design:type", Number)
], User.prototype, "userType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "businessName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", Array)
], User.prototype, "specificCarBrands", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "openingFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", String)
], User.prototype, "closingAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", Array)
], User.prototype, "amenities", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: function () {
            return this.userType === enums_1.UserType.ServiceProvider;
        },
    }),
    __metadata("design:type", Array)
], User.prototype, "specialization", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "Service" }),
    __metadata("design:type", Array)
], User.prototype, "services", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.pre("save", function (next) {
    if (this.specificCarBrands?.length === 0) {
        this.specificCarBrands = undefined;
    }
    if (this.amenities?.length === 0) {
        this.amenities = undefined;
    }
    if (this.specialization?.length === 0) {
        this.specialization = undefined;
    }
    next();
});
exports.UserSchema.pre("save", function (next) {
    if (this.userType === enums_1.UserType.ServiceProvider && this.isNew) {
        this.rating = 0;
    }
    next();
});
//# sourceMappingURL=users.schema.js.map