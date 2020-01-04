import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEntityDirective]'
})
export class EntityDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
