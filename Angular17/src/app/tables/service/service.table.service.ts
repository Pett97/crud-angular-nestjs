import { Injectable } from '@angular/core';
import { TableModel } from '../model/table.model';
import { Course } from '../../courses/model/course';
import { Category } from '../../categorys/model/category';

@Injectable({
  providedIn: 'root'
})
export class ServiceTableService {
  urlCategory = 'http://172.17.0.2:3000/categorys/list';
  urlCourses = 'http://172.17.0.2:3000/courses/list';
  constructor() { }

  async getAllCourses(): Promise<Course[]> {
    const data = await fetch(this.urlCourses);
    return (await data.json()) ?? [];
  }

  async getAllCategory(): Promise<Category[]> {
    const data = await fetch(this.urlCategory);
    return (await data.json()) ?? [];
  }

  async getAllData(): Promise<TableModel[]> {
    const [courses, categories] = await Promise.all([
      this.getAllCourses(),
      this.getAllCategory(),
    ]);
  
    const transformedData = courses.map(course => {
      const matchingCategory = categories.find(cat => cat.id === course.id_category);
      return {
        nameCourse: course.name,
        categoryId: course.id_category,
        nameCategory: matchingCategory?.name,
      };
    });
  
    return transformedData;
  }

}
