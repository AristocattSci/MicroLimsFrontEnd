import { Component, OnInit, Input } from '@angular/core';
import { EntityViewerFactoryComponent } from '../EntityViewerFactory.component';
import { IEntity, IEntityCollection } from '../entity-viewer.service';
import { IEntityManager } from '../IEntityManager';
import { Router } from '@angular/router';
import { EntitydetailService } from '../entitydetail.service';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})
export class DefaultViewComponent implements OnInit, EntityViewerFactoryComponent, IEntityManager {
  @Input() data: IEntityCollection;


  constructor(
    private router: Router,
    private entityDetailService: EntitydetailService
  ) {


   }

  ngOnInit() {
    console.log("I AM IN THIS PLACE");
    console.log(this.data);

  }

  getEntityDetails(identity: any)
  {

    let keys = this.data.metadata.keys;
    let tableId;
    let tableName;
    keys.forEach(key => {
      if (key.constraint_type == 'PRIMARY KEY'){

        tableName = key.table_name; 
        tableId = identity[key.column_name];
      }

      
    });
    console.log(keys);

    const link = ['/entitydetails',tableName, tableId];
    this.entityDetailService.setCurrentEntity(identity);
    this.entityDetailService.setCurrentColumns(this.data.data.columns);
    this.router.navigate(link);
    
  }

}
