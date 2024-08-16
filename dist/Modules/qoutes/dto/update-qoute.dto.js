"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQouteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_qoute_dto_1 = require("./create-qoute.dto");
class UpdateQouteDto extends (0, mapped_types_1.PartialType)(create_qoute_dto_1.CreateQouteDto) {
}
exports.UpdateQouteDto = UpdateQouteDto;
//# sourceMappingURL=update-qoute.dto.js.map