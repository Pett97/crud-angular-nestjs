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
exports.CategorysController = void 0;
const common_1 = require("@nestjs/common");
const categorys_service_1 = require("./categorys.service");
const category_dto_1 = require("./category.dto/category.dto");
const update_category_dto_1 = require("./category.dto/update.category.dto");
let CategorysController = class CategorysController {
    constructor(categorysService) {
        this.categorysService = categorysService;
    }
    create(categoryDto) {
        this.categorysService.create(categoryDto);
    }
    async findAll() {
        return await this.categorysService.findAll();
    }
    async findOne(name) {
        return this.categorysService.findOneByName(name);
    }
    async findOneById(id) {
        return this.categorysService.findOneById(id);
    }
    update(id, updateCategoryDto) {
        return this.categorysService.update(id, updateCategoryDto);
    }
    async delete(id) {
        await this.categorysService.delete(id);
    }
};
exports.CategorysController = CategorysController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.CategoryDto]),
    __metadata("design:returntype", void 0)
], CategorysController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('list/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('list/one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategorysController.prototype, "delete", null);
exports.CategorysController = CategorysController = __decorate([
    (0, common_1.Controller)('categorys'),
    __metadata("design:paramtypes", [categorys_service_1.CategorysService])
], CategorysController);
//# sourceMappingURL=categorys.controller.js.map