import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, CategoryPipe, RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',

})
export class CategoryComponent {

  categoryList: Category[] = [];

  displayedColumns = ["id", "name", 'action'];

  filterForm = new FormGroup({
    id: new FormControl(''),
  })

  constructor(private categoryService: CategoryService) {
    this.callCategory();
  }

  async callCategory() {
    const categorys = await this.categoryService.getAllCategorys();
    this.categoryList = categorys;
  }

  getOneCategory() {
    let Id = this.filterForm.value.id + "";
    this.categoryService.listOneCategory(Id).subscribe(
      category => {
        this.categoryList = [];
        this.categoryList.push(category)
      })
  }

  clearFilter() {
    this.callCategory();
  }

  delete(id: string) {
    if (window.confirm("Você realmente quer sair?")) {
      this.categoryService.deleteCategory(id).subscribe((res) => {
        this.callCategory();
      })
    }
  }
}
