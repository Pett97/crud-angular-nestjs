import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private readonly courseRepository: Repository<Course>) { }

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: string): Promise<Course | undefined> {
    let idFind = Number(id);
    return await this.courseRepository.findOne({ where: { id: idFind } });
  }


  async create(createCourseDto: CreateCourseDto) {
    const newCourse = this.courseRepository.create(createCourseDto)

    return await this.courseRepository.save(newCourse);
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course | undefined> {
    const idFind = Number(id);
    let courseForUpdate = await this.courseRepository.findOne({ where: { id: idFind } });

    if (!courseForUpdate) {
      return undefined;
    }
    if (courseForUpdate.name !== undefined) {
      courseForUpdate.name = updateCourseDto.name;
      courseForUpdate.id_category = updateCourseDto.id_category;
    }
    courseForUpdate = await this.courseRepository.save(courseForUpdate);

    return courseForUpdate;
  }


  async delete(id:string){
    const course = await this.findOne(id);
    await this.courseRepository.remove(course);
  }


}
