import { Component, Input, OnInit } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';
import { EntitydetailService } from '../entitydetail.service';
import { IEntity } from '../entity-viewer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.css']
})
export class DefaultDetailComponent implements OnInit, EntityComponent {
  @Input() data: any;
  entity: IEntity;
  columns: [];
  updateEntity;
  
  constructor(
    private entityDetailService: EntitydetailService,
    private formBuilder: FormBuilder
  ){
    this.updateEntity = this.formBuilder.group({
    })
  };


  ngOnInit(): void {
    this.entity = this.entityDetailService.getCurrentEntity();
    this.columns = this.entityDetailService.getCurrentColumsn();
    console.log("What is the entity");
    console.log(this.entity);

  }



  onSubmit(updateEntity){
    console.log(this.entity);
    console.log("what");
  }

}

