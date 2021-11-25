import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[swAttract]'
})
export class AttractDirective {
    @Input('swAttract') bgColor!: string;

    private el: HTMLElement;

    constructor(el: ElementRef) {
      this.el = el.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
      console.log(`Mouse enter "${this.bgColor}"`);
      this.el.style.backgroundColor = this.bgColor;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
      console.log('Mouse leave');
      this.el.style.backgroundColor = '';
    }
}
