import { Component, inject } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import { ServiceTableService } from '../service/service.table.service';
import { TableModel } from '../model/table.model';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AppMaterialModule, CategoryPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  protected erroLog = "";
  protected showTable = false;
  listModel: TableModel[] = [];
  tableService: ServiceTableService = inject(ServiceTableService);
  displayedColumns = ['nameCourse' ,'nameCategory'];


  constructor() {
    setTimeout(() => {
      this.getTable();
    }, 3000)
  }

  async getTable() {
    try {
      const dataModel = await this.tableService.getAllData();
      this.listModel = dataModel;
      console.log(this.listModel);
      this.showTable = true;
    } catch (error) {
      setTimeout(() => {
        this.erroLog = "Erro Ao Buscar Dados"
      }, 5000);
    }
  }

}
