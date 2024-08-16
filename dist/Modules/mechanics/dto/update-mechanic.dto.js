"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMechanicDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mechanic_dto_1 = require("./create-mechanic.dto");
class UpdateMechanicDto extends (0, mapped_types_1.PartialType)(create_mechanic_dto_1.CreateMechanicDto) {
}
exports.UpdateMechanicDto = UpdateMechanicDto;
//# sourceMappingURL=update-mechanic.dto.js.map