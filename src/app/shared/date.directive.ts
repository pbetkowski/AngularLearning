import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input() // umozliwia wstrzykniecie tutaj daty z innego obiektu
  private date: Date; // przesylamy date z obiektu task z htmla
  private paragraph; // pole html

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p'); // tworzymy paragraf
  }

  @HostListener('mouseenter')   // faktyczna nazwa eventu
  mouseOn(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);  // rodzic, dziecko
  }

  @HostListener('mouseleave')   // faktyczna nazwa eventu
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
