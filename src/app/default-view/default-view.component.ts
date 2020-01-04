import { Component, OnInit, Input } from '@angular/core';
import { EntityViewerFactoryComponent } from '../EntityViewerFactory.component';
import { IEntity, IEntityCollection } from '../entity-viewer.service';
import { IEntityManager } from '../IEntityManager';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})
export class DefaultViewComponent implements OnInit, EntityViewerFactoryComponent, IEntityManager {
  @Input() data: IEntityCollection;


  constructor() {

   }

  ngOnInit() {
    console.log(this.data);

  }

  getEntityDetails(identity: any)
  {
    console.log(identity);
    console.log(this.data.metadata.keys.primary);
  }

}
