import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightDirective]'
})
export class LightDirectiveDirective {

  constructor(private eleRef:ElementRef) 
  { 
    eleRef.nativeElement.border="2px solid red"
  }
@HostListener('mouseover') mouseover()
{
 this.eleRef.nativeElement.border="2px solid blue"
}
@HostListener('mouseout') mouseout()
{
 this.eleRef.nativeElement.border="2px solid green"
}
}
