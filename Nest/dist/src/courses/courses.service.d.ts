import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course | undefined>;
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course | undefined>;
    delete(id: string): Promise<void>;
}
