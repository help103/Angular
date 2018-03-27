import {Directive,ElementRef} from '@angular/core'
@Directive(
    {
        selector:'[changecolor]'
    }
)
export class MyDirective
{
   constructor(private element:ElementRef)
   {
     this.element.nativeElement.style.color='red';
   }
}