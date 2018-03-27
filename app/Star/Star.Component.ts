import {Component,Input} from '@angular/core'
@Component({
  selector:'star',
  templateUrl:'star.html'
})
export class Star
{
   @Input()
   NoOfStars:number;
}