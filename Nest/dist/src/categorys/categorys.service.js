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
exports.CategorysService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_1 = require("./entities/category");
let CategorysService = class CategorysService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        const category = this.categoryRepository.create(createCategoryDto);
        return await this.categoryRepository.save(category);
    }
    async findAll() {
        return await this.categoryRepository.find();
    }
    async findOneByName(name) {
        return await this.categoryRepository.findOne({ where: { name: name } });
    }
    async findOneById(id) {
        let idFind = Number(id);
        return await this.categoryRepository.findOne({ where: { id: idFind } });
    }
    async update(id, updateCategoryDto) {
        const idFind = Number(id);
        let categoryForUpdate = await this.categoryRepository.findOne({
            where: { id: idFind }
        });
        if (!categoryForUpdate) {
            return undefined;
        }
        if (updateCategoryDto.name !== undefined) {
            categoryForUpdate.name = updateCategoryDto.name;
        }
        categoryForUpdate = await this.categoryRepository.save(categoryForUpdate);
        return categoryForUpdate;
    }
    async delete(id) {
        const category = await this.findOneById(id);
        await this.categoryRepository.remove(category);
    }
};
exports.CategorysService = CategorysService;
exports.CategorysService = CategorysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategorysService);
//# sourceMappingURL=categorys.service.js.map