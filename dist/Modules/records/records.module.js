"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsModule = void 0;
const common_1 = require("@nestjs/common");
const records_service_1 = require("./records.service");
const records_controller_1 = require("./records.controller");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const records_schema_1 = require("./records.schema");
const users_schema_1 = require("../users/users.schema");
const bookings_schema_1 = require("../bookings/bookings.schema");
const bookings_service_1 = require("../bookings/bookings.service");
const users_service_1 = require("../users/users.service");
let RecordsModule = class RecordsModule {
};
exports.RecordsModule = RecordsModule;
exports.RecordsModule = RecordsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: records_schema_1.Record.name, schema: records_schema_1.RecordSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.User.name, schema: users_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: bookings_schema_1.Booking.name, schema: bookings_schema_1.BookingSchema }]),
        ],
        controllers: [records_controller_1.RecordsController],
        providers: [jwt_1.JwtService, records_service_1.RecordsService, bookings_service_1.BookingsService, users_service_1.UsersService],
    })
], RecordsModule);
//# sourceMappingURL=records.module.js.map