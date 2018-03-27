import {Component} from '@angular/core'
import {trigger,state,style,transition,animate} from '@angular/animations'
@Component({
  selector:'san',
  template:`<p [@StateAnim]='statvalue'>This is para <input type='button' value='click' (click)='changestate()' />  </p> `,
  animations:[trigger("StateAnim",[
    state('first',style({transform:'scale(1)'})),
    state('second',style({transform:'scale(1.5)'})),
    transition('first<=>second',animate('1000ms'))
  ])]
})
export class SampleAnimation
{
    statvalue:string="first"
    changestate():void
    {
     alert("Change State Called!");
     this.statvalue= this.statvalue=="first"?"second":"first";
    }
}