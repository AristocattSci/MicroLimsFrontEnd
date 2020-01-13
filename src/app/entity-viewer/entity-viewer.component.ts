import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { EntityViewerDirective } from '../entity-viewer.directive';
import { ActivatedRoute, Params } from '@angular/router';
import { SampleViewComponent } from '../sample-view/sample-view.component';
import { DefaultViewComponent } from '../default-view/default-view.component';
import { EntityViewerService, IEntity, IEntityCollection } from '../entity-viewer.service';
import {Location} from '@angular/common';
import { EntitydetailService } from '../entitydetail.service';

@Component({
  selector: 'app-entity-viewer',
  templateUrl: './entity-viewer.component.html',
  styleUrls: ['./entity-viewer.component.css']
})
export class EntityViewerComponent implements OnInit {

  data: IEntityCollection;

  @ViewChild (EntityViewerDirective, {static: true}) EntityViewerDirective: EntityViewerDirective;

  constructor(
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private entityViewerService: EntityViewerService,
    private location: Location,
  ) { }

  ngOnInit() {
    
     console.log("Going to entity viewer service with path" + this.location.path());
     this.entityViewerService.getEntities(this.location.path())
        .subscribe(mydata => {
          console.log(mydata);
          this.data = mydata;
          this.decideEntityView();      
        });
           
  }

  decideEntityView(){
            

    let entityType;
    this.route.params.forEach((params: Params) => {
      entityType = params['entitytype'];
    })
    

    switch(entityType){
      case 'samples':
        this.displaySampleEntities();
        break;
      default: 
        this.displayDefaultEntities();
        break;
    }

  }

  displayDefaultEntities(){

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DefaultViewComponent);

    //Gets the reference to the current viewContainer and then removes it
    const viewContainerRef = this.EntityViewerDirective.viewContainerRef;
    viewContainerRef.clear();

    //Adds the new component to the view
    const componentRef = viewContainerRef.createComponent(componentFactory);
    //Add data to the component -- Edit later
        console.log("the data");
    console.log(this.data);
    console.log(this.data.data);
    console.log(this.data.metadata);
    (<DefaultViewComponent>componentRef.instance).data = this.data;    
  }

  displaySampleEntities(){

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SampleViewComponent);

    //Gets the reference to the current viewContainer and then removes it
    const viewContainerRef = this.EntityViewerDirective.viewContainerRef;
    viewContainerRef.clear();

    //Adds the new component to the view
    const componentRef = viewContainerRef.createComponent(componentFactory);
    //Add data to the component -- Edit later
    console.log("the data");
    console.log(this.data);
    console.log(this.data.data);
    console.log(this.data.metadata);
    (<SampleViewComponent>componentRef.instance).data = this.data;

  }



}
