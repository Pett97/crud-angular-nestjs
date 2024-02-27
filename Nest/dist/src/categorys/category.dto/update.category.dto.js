"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const category_dto_1 = require("./category.dto");
class UpdateCategoryDto extends (0, mapped_types_1.PartialType)(category_dto_1.CategoryDto) {
}
exports.UpdateCategoryDto = UpdateCategoryDto;
//# sourceMappingURL=update.category.dto.js.map