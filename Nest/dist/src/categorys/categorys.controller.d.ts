import { CategorysService } from './categorys.service';
import { CategoryDto } from './category.dto/category.dto';
import { Category } from './entities/category';
import { UpdateCategoryDto } from './category.dto/update.category.dto';
export declare class CategorysController {
    private readonly categorysService;
    constructor(categorysService: CategorysService);
    create(categoryDto: CategoryDto): void;
    findAll(): Promise<Category[]>;
    findOne(name: string): Promise<Category | undefined>;
    findOneById(id: string): Promise<Category | undefined>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category | undefined>;
    delete(id: string): Promise<void>;
}
