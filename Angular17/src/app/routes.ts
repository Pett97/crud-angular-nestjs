import { Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses/courses.component";
import { CategoryComponent } from "./categorys/category/category.component";
import { TableComponent } from "./tables/table/table.component";
import { CreateCategoryComponent } from "./categorys/create-category/create-category.component";
import { UpdateCategoryComponent } from "./categorys/update-category/update-category.component";
import { CreateCourseComponent } from "./courses/create.course/create.course.component";
import { UpdateCoursesComponent } from "./courses/update/update.courses.component";

const routerConfig:Routes=[
  {
    path:"",
    component:CoursesComponent,
  },
  {
    path:"courses",
    component:CoursesComponent,
  },
  {
    path:"category",
    component:CategoryComponent,
  },
  {
    path:"table",
    component:TableComponent,
  },
  {
    path:"createCategory",
    component:CreateCategoryComponent,
  },
  {
    path:"updatecategory/:id",
    component:UpdateCategoryComponent,
  },
  {
    path:"create-course",
    component:CreateCourseComponent,
  },
  {
    path:"update-course/:id",
    component:UpdateCoursesComponent,
  },
];



export default routerConfig;
