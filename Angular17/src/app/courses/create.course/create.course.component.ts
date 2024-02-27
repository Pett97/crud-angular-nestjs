import { Component} from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from '../service/courses.service';
import { Course } from '../model/course';
import { CategoryService } from '../../categorys/services/category.service';
import { Category } from '../../categorys/model/category';
@Component({
  selector: 'app-create.course',
  standalone: true,
  imports: [AppMaterialModule,ReactiveFormsModule],
  templateUrl: './create.course.component.html',
  styleUrl: './create.course.component.scss'
})
export class CreateCourseComponent {

  categoryList:Category[]=[];

  createForm = new FormGroup({
    nameCourse : new FormControl(''),
    selectCategory:new FormControl('')
  })

  constructor(private service : CoursesService, private categoryService:CategoryService){
    this.getAllCategorys();
  }

  save(){
    let nameCourse = this.createForm.value.nameCourse?.toUpperCase().trim();

    let idCategory = Number(this.createForm.get('selectCategory')?.value);

    if(!idCategory || !nameCourse){
      return;
    }

    let newCourse:Course={name:nameCourse,id_category:idCategory}

    this.service.create(newCourse).subscribe(course=>course);
    alert("Salvo com Sucesso")
  }

  private async getAllCategorys(){
      const categorys = await this.categoryService.getAllCategorys();
      this.categoryList = categorys;
  }



}
