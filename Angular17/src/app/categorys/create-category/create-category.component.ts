import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.scss'
})
export class CreateCategoryComponent {
  createForm = new FormGroup({
    nameCategory: new FormControl(""),
  })

  constructor(private createCategoryService: CategoryService) {

  }

  saveCategory() {
    let nameCategory = this.createForm.value.nameCategory?.toUpperCase().trim();

    if (!nameCategory) {
      return;
    }
    const newCategory: Category = { name: nameCategory };
    this.createCategoryService.createNewCategory(newCategory).subscribe(category =>{this.alert()});
  }

  alert(){
    alert("Categoria Criada com sucesso")
  }

}
