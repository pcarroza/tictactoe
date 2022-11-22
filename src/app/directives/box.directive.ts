import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBoxDinamic]'
})
export class BoxDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
