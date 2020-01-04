import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleViewComponent } from './sample-view/sample-view.component';

//Services
import { SampleViewService } from './sample-view.service';
import { IndexComponent } from './index/index.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityDirectiveDirective } from './entity-directive.directive';
import { SampleDetailComponent } from './sample-detail/sample-detail.component';
import { EntityComponent } from './entity/entity.component';
import { DefaultDetailComponent } from './default-detail/default-detail.component';
import { EntityViewerComponent } from './entity-viewer/entity-viewer.component';
import { EntityViewerDirective } from './entity-viewer.directive';
import { DefaultViewComponent } from './default-view/default-view.component';
import { EntityViewerService } from './entity-viewer.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SampleViewComponent,
    IndexComponent,
    EntityDetailsComponent,
    EntityDirectiveDirective,
    SampleDetailComponent,
    DefaultDetailComponent,
    EntityViewerComponent,
    EntityViewerDirective,
    DefaultViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  entryComponents: [SampleDetailComponent, SampleViewComponent, DefaultViewComponent],
  providers: [SampleViewService, EntityViewerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
