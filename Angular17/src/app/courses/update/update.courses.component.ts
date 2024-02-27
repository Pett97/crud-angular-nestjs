import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { CategoryService } from '../../categorys/services/category.service';
import { Category } from '../../categorys/model/category';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update.courses',
  standalone: true,
  imports: [ReactiveFormsModule, AppMaterialModule,CommonModule],
  templateUrl: './update.courses.component.html',
  styleUrl: './update.courses.component.scss'
})
export class UpdateCoursesComponent {

  categoryList: Category[] = [];

  constructor(private service: CoursesService, private serviceCatergory: CategoryService,private route:ActivatedRoute) {
    this.getCategorys();
  }

  updateCourse = new FormGroup({
    newName: new FormControl(''),
    selectCategory:new FormControl('')
  })


  update() {
    let idCourse = this.route.snapshot.params['id']
    let idCategory = Number(this.updateCourse.get('selectCategory')?.value);
    let newName = this.updateCourse.value.newName?.toUpperCase().trim();
    if (!idCategory || !newName) {
      return;
    }
    let course: Course = {name: newName,id_category: idCategory}

    this.service.update(idCourse, course).subscribe((course) => {
      console.log("atualizado", course);
    });
  }

  private async getCategorys() {
    const categorys = await this.serviceCatergory.getAllCategorys();
    this.categoryList = categorys;
    console.log(this.categoryList);
   
  }
}
