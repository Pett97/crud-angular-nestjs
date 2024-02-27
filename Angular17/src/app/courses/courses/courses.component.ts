import { Component, inject } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule, CategoryPipe, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  protected errorLog = '';
  protected showTable = false;
  courseList: Course[] = [];
  coursesService: CoursesService = inject(CoursesService);
  displayedColumns = ['name', 'action'];

  constructor() {
    setTimeout(() => {
      this.callData();
    }, 1000);
  }

  async callData() {
    try {
      const courses = await this.coursesService.getAllCourses(); // Use await aqui
      this.courseList = courses;
      this.mostrarTabela();
    } catch (error) {
      setTimeout(() => {
        this.errorLog = 'Erro ao buscar cursos';
      }, 2000);
    }
  }

  mostrarTabela(): void {
    this.showTable = true;
  }

  deletar(id: string) {
    if (window.confirm("Você realmente quer sair?")) {
      this.coursesService.delete(id).subscribe((res) => {
        this.callData();
      })
    }
  }
}


