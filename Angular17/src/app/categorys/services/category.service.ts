import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly urlCategory = 'http://172.17.0.2:3000/categorys/list';
  private readonly urlCreateCategory = "http://172.17.0.2:3000/categorys/create";
  private readonly urlUpdate = "http://172.17.0.2:3000/categorys/update";

  private readonly urlListOne = "http://172.17.0.2:3000/categorys/list/one";

  private readonly urlDelete = "http://172.17.0.2:3000/categorys/delete"

  constructor(private http: HttpClient) { }

  async getAllCategorys(): Promise<Category[]> {
    const data = await fetch(this.urlCategory);
    return (await data.json()) ?? [];
  }

  createNewCategory(newCategory: Category): Observable<Category> {
    return this.http.post<Category>(this.urlCreateCategory, newCategory);
  }

  listOneCategory(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.urlListOne}/${id}`)

  }

  updateCategory(id: string, updateCategory: Category): Observable<Category> {

    return this.http.post<Category>(`${this.urlUpdate}/${id}`, updateCategory);
  }

  deleteCategory(id:string): Observable<Category>{
      return this.http.delete<Category>(`${this.urlDelete}/${id}`)
      
  }
}
