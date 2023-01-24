import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  private colorChanged = false;

  @HostListener('click') onClick() {
    this.changeColor()
  }

  private changeColor() {
    if (!this.colorChanged) {
      this.el.nativeElement.style.color = 'blue';
      this.colorChanged = !this.colorChanged;
    } else {
      this.el.nativeElement.style.color = 'black';
      this.colorChanged = !this.colorChanged;
    }
  }
}
