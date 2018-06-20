import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const li = this.el.nativeElement;  // dobieramy się do wskazanego elementu w htmlu
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png)');
    this.renderer.setStyle(li, 'background', 'aquamarine');
  }
}
