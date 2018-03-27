import {Component} from '@angular/core'
@Component({
    selector:'bpipe',
    templateUrl:'BPipe.html'
    }
    )
export class BuiltinPipes
{

  Input:number;
  Flag:boolean=false;
  StudentName:string ="Ramesh";
  Amount:number=1000.2345;
  BirthDate=new Date(2010,3,14);
  toggle()
  {
    this.Flag = this.Flag?false:true;
  }
}