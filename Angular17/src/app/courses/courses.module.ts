import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoursesRoutingModule,MatTableModule],
})
export class CoursesModule {}
