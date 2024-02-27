import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateCategoryDto } from './category.dto/update.category.dto';
import { Category } from './entities/category';

@Injectable()
export class CategorysService {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) { }

    async create(createCategoryDto: any) {
        const category = this.categoryRepository.create(createCategoryDto)

        return await this.categoryRepository.save(category);
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async findOneByName(name: string): Promise<Category | undefined> {
        return await this.categoryRepository.findOne({ where: { name: name } });
    }

    async findOneById(id: string): Promise<Category | undefined> {
        let idFind = Number(id);
        return await this.categoryRepository.findOne({ where: { id: idFind } });
    }

    async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category | undefined> {
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

    async delete(id:string){
        const category = await this.findOneById(id);
        await this.categoryRepository.remove(category);
    }


}
