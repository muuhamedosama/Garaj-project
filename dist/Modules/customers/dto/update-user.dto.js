"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const signup_dto_1 = require("../../auth/dto/signup.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(signup_dto_1.SignUpDto) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map