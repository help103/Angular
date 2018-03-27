import {Component} from '@angular/core'
@Component({
  selector:'custnew',
  templateUrl:'CustomerNew.Component.html',
  styles:['input.ng-valid {border-right:4px solid green} input.ng-invalid {border-right:4px solid red;}']
})
export class CustomerNew
{
   SaveCustomer(values):void
   {
      console.log(values);
   }
}