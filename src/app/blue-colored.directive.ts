import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) { 
    element.nativeElement.style.color = 'blue';
  }

}
