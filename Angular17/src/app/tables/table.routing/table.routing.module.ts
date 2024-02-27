import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { TableComponent } from '../table/table.component';


const routes:Routes=[
  {
    path:'table',
    component:TableComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class TableRoutingModule { }
