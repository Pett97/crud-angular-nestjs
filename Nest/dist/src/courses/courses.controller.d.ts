import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    findAll(): Promise<Course[]>;
    findOne(params: any): Promise<Course | undefined>;
    create(createCourseDto: CreateCourseDto): void;
    update(id: string, updateCourseDto: UpdateCourseDto): void;
    delete(id: string): Promise<void>;
}
