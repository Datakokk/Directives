import { 
  Directive,  
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'navy';

  @HostBinding('style.backgroundColor') colorFondo: string;
  @HostBinding('style.color') colorLetra: string = '#000';

  constructor(private elRef: ElementRef , private renderer: Renderer2) { }

  ngOnInit(){
    this.colorFondo = this.defaultColor
  }

  @HostListener('mouseover') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fff');
    this.colorFondo = this.highlightColor;
    this.colorLetra = '#fff';
  }

  @HostListener('mouseout') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.colorFondo = this.defaultColor;
    this.colorLetra = 'green';
  }

}
