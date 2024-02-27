import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategoryDto } from './category.dto/category.dto';
import { Category } from './entities/category';
import { UpdateCategoryDto } from './category.dto/update.category.dto';

@Controller('categorys')
export class CategorysController {
    constructor(private readonly categorysService: CategorysService) { }

    @Post('create')
    create(@Body() categoryDto: CategoryDto): void {
        this.categorysService.create(categoryDto);
    }

    @Get('list')
    async findAll(): Promise<Category[]> {
        return await this.categorysService.findAll();
    }

    @Get('list/:name')
    async findOne(@Param('name') name: string): Promise<Category | undefined> {
        return this.categorysService.findOneByName(name);
    }

    //so para testar mesmo sei que que está errado

    @Get('list/one/:id')
    async findOneById(@Param('id') id: string): Promise<Category | undefined> {
        return this.categorysService.findOneById(id);
    }

    @Post('update/:id')
    update(
        @Param('id') id: string,
        @Body() updateCategoryDto: UpdateCategoryDto
    ): Promise<Category | undefined> {
        return this.categorysService.update(id, updateCategoryDto);
    }

    @Delete('delete/:id')
     async delete(
        @Param('id') id:string,
     ) {
        await this.categorysService.delete(id);
     }

    


}
