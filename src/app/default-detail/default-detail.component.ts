import { Component, Input } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.css']
})
export class DefaultDetailComponent implements EntityComponent {
  @Input() data: any;
}

