import { Component, Input } from '@angular/core';

import {EntityComponent} from '../entity/entity.component';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html',
  styleUrls: ['./sample-detail.component.css']
})
export class SampleDetailComponent implements EntityComponent {
  @Input() data: any;
}
