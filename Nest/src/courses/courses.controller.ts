import { Body, Controller, Get, Param, Post,Delete } from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get('list')
  async findAll(): Promise<Course[]> {
     return await this.courseService.findAll();
  }

  @Get('list/:id')
  async findOne(@Param() params):Promise<Course|undefined>  {
     return await this.courseService.findOne(params.id);
  }

  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto): void {
    this.courseService.create(createCourseDto);
  }

  @Post('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ): void {
    this.courseService.update(id, updateCourseDto);
  }

  @Delete('delete/:id')
    async delete(
      @Param('id') id:string){
        await this.courseService.delete(id);
      }
    
  }


