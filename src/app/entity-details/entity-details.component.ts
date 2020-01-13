import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EntityDirectiveDirective } from '../entity-directive.directive';
import { SampleDetailComponent } from '../sample-detail/sample-detail.component';
import { IEntity } from '../entity-viewer.service';
import { DefaultDetailComponent } from '../default-detail/default-detail.component';
import { EntityComponent } from '../entity/entity.component';



@Component({
  selector: 'app-entity-details',
  templateUrl: './entity-details.component.html',
  styleUrls: ['./entity-details.component.css']
})
export class EntityDetailsComponent implements OnInit {

  @ViewChild (EntityDirectiveDirective, {static:true}) EntityDirective: EntityDirectiveDirective;

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let entityType;
    let entityId;
    this.route.params.forEach((params:Params) => {
       entityType = params['entitytype'];
       entityId = params['entityid'];
    })
    switch(entityType){
      case 'sample':
        console.log("hiii");
        this.displaySampleDetails(this.route.params['entityid']);
        break;
      default: 
        console.log(entityType);
        console.log(entityId);
        this.displayDefaultDetails(entityType, entityId);
        break;
    }

  }

  displayDefaultDetails(table: any, tableId: any){

    console.log("default details");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DefaultDetailComponent);
    const viewContainerRef = this.EntityDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(tableId);
    (<EntityComponent>componentRef.instance).data = tableId;

  };

  displaySampleDetails(idNumeric: number)
  {
        //Gets access to the Ad Item that needs to be displayed next
        //SampleDetailComponent
    console.log("display sample detail");
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SampleDetailComponent);

    //Gets the reference to the current viewContainer and then removes it
    const viewContainerRef = this.EntityDirective.viewContainerRef;
    viewContainerRef.clear();

    //Adds the new component to the view
    const componentRef = viewContainerRef.createComponent(componentFactory);
    //Add data to the component -- Edit later
    //(<AdComponent>componentRef.instance).data = adItem.data;

  }

}
