import { Injectable } from '@angular/core';
import { IEntity } from './entity-viewer.service';

@Injectable({
  providedIn: 'root'
})
export class EntitydetailService {

  currentEntity: IEntity;
  currentColumns: [];

  constructor() { }

  getCurrentEntity(){
    return this.currentEntity;
  }

  setCurrentEntity(entity: IEntity){
    this.currentEntity = entity;
  }

  getCurrentColumsn(){
    return this.currentColumns;
  }

  setCurrentColumns(columns: any){
    this.currentColumns = columns;
  }
}
