import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {
        path:"/category",
        component:CategoryComponent,
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class CategoryRoutingModule{}



