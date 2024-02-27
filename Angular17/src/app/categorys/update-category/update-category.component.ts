import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../services/category.service';
import { Category } from '../model/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [AppMaterialModule, ReactiveFormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent {

  updateForm = new FormGroup({
    newNameCategory: new FormControl(''),
  })

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
  
    ) 
    {}

  update() {
    
    let id = this.route.snapshot.params['id'];
    let newName = this.updateForm.value.newNameCategory?.toUpperCase().trim();
    if (!newName) {
      return;
    }
    const c: Category = { name: newName };
    console.log(c);
    this.service.updateCategory(id, c).subscribe(newCategory=>console.log("Atualizada",newCategory))
  }

}
