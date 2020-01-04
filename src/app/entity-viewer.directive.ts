import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEntityViewer]'
})
export class EntityViewerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
