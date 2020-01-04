import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface SampleList {
  samples: Array<Sample>
}

export interface Sample {
  idNumeric: number,
  status: string,
  LoggedInBy: string
}

@Injectable({
  providedIn: 'root'
})
export class SampleViewService {

  constructor(private http: HttpClient) {  }

  getSample(): Observable<SampleList> {
    console.log("Making the request");

    return this.http.get<SampleList>('http://localhost:3000/samples');
  }

  getSampleById(idNumeric: number): Observable<Sample> {
    return this.http.get<Sample>('http://localhost:3000/samples/idNumeric'+ idNumeric);
  }
}
