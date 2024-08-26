"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const users_module_1 = require("./Modules/users/users.module");
const auth_module_1 = require("./Modules/auth/auth.module");
const services_module_1 = require("./Modules/services/services.module");
const vehicles_module_1 = require("./Modules/vehicles/vehicles.module");
const records_module_1 = require("./Modules/records/records.module");
const bookings_module_1 = require("./Modules/bookings/bookings.module");
const reviews_module_1 = require("./Modules/reviews/reviews.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ cache: true, isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    uri: config.get("MONGODB_URI"),
                    ssl: true,
                }),
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            services_module_1.ServicesModule,
            vehicles_module_1.VehiclesModule,
            records_module_1.RecordsModule,
            bookings_module_1.BookingsModule,
            reviews_module_1.ReviewsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map