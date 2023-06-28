import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MembersService } from '../services/members.service';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

 @Input() color = 'lightblue';

  constructor(service: MembersService, private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnterEvent() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener ('mouseleave') onMouseExitEvent() {
       this.el.nativeElement.style.backgroundColor = "";
  }
}
