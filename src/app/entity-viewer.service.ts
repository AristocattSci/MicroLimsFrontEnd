import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



export interface IEntity {
  data: any;
  columns: any;
}

export interface IEntityCollection {
  metadata: any;
  data: IEntity;
}

@Injectable({
  providedIn: 'root'
})
export class EntityViewerService {

  urlPath: string;

  constructor(private http: HttpClient) { }

  getEntities(url: string): Observable<IEntityCollection> {
    console.log("Making the request");
  
    return this.http.get<IEntityCollection>('http://localhost:3000'+ url);
  }
}
