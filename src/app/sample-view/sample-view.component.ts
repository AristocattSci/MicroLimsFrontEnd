import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SampleViewService, Sample, SampleList } from '../sample-view.service';
import { EntityViewerFactoryComponent } from '../EntityViewerFactory.component';

@Component({
  selector: 'app-sample-view',
  templateUrl: './sample-view.component.html',
  styleUrls: ['./sample-view.component.css']
})
export class SampleViewComponent implements OnInit, EntityViewerFactoryComponent {

  data: any;
  columns: any;
  sampleList: SampleList;
  sampleSearch: string;

  constructor(
    private router: Router,
    private SampleViewService: SampleViewService
  ) { }

  ngOnInit() {
    this.SampleViewService.getSample()
        .subscribe(sample => {
           console.log(sample);
           this.sampleList = sample;
        } );
  }

  gotoEntityDetail(sample:Sample)
  {
    const link = ['/entitydetails', 'sample', sample.idNumeric];
    this.router.navigate(link);
  }

  

}
