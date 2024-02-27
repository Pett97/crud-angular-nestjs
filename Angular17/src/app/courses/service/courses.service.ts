import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly urlCourses = 'http://172.17.0.2:3000/courses';




  constructor(private http: HttpClient) { }

  async getAllCourses(): Promise<Course[]> {
    const data = await fetch(`${this.urlCourses}/list`);
    return (await data.json()) ?? [];
  }

  create(newCourse: Course): Observable<Course> {
    return this.http.post<Course>(`${this.urlCourses}/create`, newCourse)
  }

  update(id: string, course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.urlCourses}/update/${id}`, course)
  }

  delete(id: string): Observable<Course> {
    return this.http.delete<Course>(`${this.urlCourses}/delete/${id}`)
  }


}
