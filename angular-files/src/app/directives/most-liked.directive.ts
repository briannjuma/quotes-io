import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostLiked]',
})
export class MostLikedDirective {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '';
  }
}
