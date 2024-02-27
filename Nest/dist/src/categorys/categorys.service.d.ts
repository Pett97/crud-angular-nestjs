import { Repository } from 'typeorm';
import { UpdateCategoryDto } from './category.dto/update.category.dto';
import { Category } from './entities/category';
export declare class CategorysService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(createCategoryDto: any): Promise<Category[]>;
    findAll(): Promise<Category[]>;
    findOneByName(name: string): Promise<Category | undefined>;
    findOneById(id: string): Promise<Category | undefined>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category | undefined>;
    delete(id: string): Promise<void>;
}
