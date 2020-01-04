import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleViewComponent } from './sample-view/sample-view.component';
import {IndexComponent} from './index/index.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityViewerComponent } from './entity-viewer/entity-viewer.component';



const routes: Routes = [
  {path: 'samples', component: SampleViewComponent},
  {path: '', component: IndexComponent},
  {path: 'entitydetails/:entitytype/:entityid', component: EntityDetailsComponent},
  {path: 'entityviewer/:entitytype', component: EntityViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
