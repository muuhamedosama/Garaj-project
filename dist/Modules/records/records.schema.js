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
exports.RecordSchema = exports.Record = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Record = class Record {
};
exports.Record = Record;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Record.prototype, "vehicleId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Record.prototype, "providerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: "User", required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Record.prototype, "bookingId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: "Service", required: true }),
    __metadata("design:type", Array)
], Record.prototype, "services", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Record.prototype, "bill", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Record.prototype, "partsInstalled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Record.prototype, "approved", void 0);
exports.Record = Record = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Record);
exports.RecordSchema = mongoose_1.SchemaFactory.createForClass(Record);
//# sourceMappingURL=records.schema.js.map